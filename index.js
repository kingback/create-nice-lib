#!/usr/bin/env node

const pwd = process.cwd();
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const inquirer = require('inquirer');
const memFs = require('mem-fs');
const memFsEditor = require('mem-fs-editor');
const execSync = require('child_process').execSync;

const cwd = path.join(__dirname, 'files');
const mfe = memFsEditor.create(memFs.create());
const isGitRepo = fs.existsSync('.git');
const repoUrl = isGitRepo && execGitSync('git ls-remote --get-url origin') || '';
const match = repoUrl.match(/github\.com[:/]([^/]+)\/([^/]+)\.git/);
const group = match && match[1] || '';
const repo = match && match[2] || '';

function execGitSync(command, trim = true) {
  try {
    const ret = execSync(command).toString('utf-8');
    return trim ? ret.trim() : ret;
  } catch(err) {
    return '';
  }
}

function ask() {
  const name = repo || path.basename(pwd);
  return inquirer.prompt([
    {
      name: 'name',
      default: name,
      validate(input) {
        return input.trim() ? true : 'Please input name'
      }
    }, {
      name: 'group',
      default: group,
      validate(input) {
        return input.trim() ? true : 'Please input group'
      }
    }, {
      name: 'description',
      default(answers) {
        return answers.name;
      },
      validate(input) {
        return input.trim() ? true : 'Please input description'
      }
    }, {
      name: 'keys',
      default(answers) {
        return answers.name.split(/-|_/).join(',')
      },
      validate(input) {
        return input.trim() ? true : 'Please input keys'
      }
    }, {
      name: 'author',
      default: execGitSync('git config --get user.email') || '',
      validate(input) {
        return input.trim() ? true : 'Please input author'
      }
    }
  ]).then((answers) => {
    answers.keys = JSON.stringify(answers.keys.split(',').filter(k => !!k).map(k => k.trim()), null, 2);
    return answers;
  });
}

function copy(answers) {
  glob.sync('**/*', {
    cwd,
    mark: true,
    dot: true
  }).forEach((file) => {
    mfe.copyTpl(path.join(cwd, file), path.join(pwd, file), answers);
  });

  return new Promise((resolve) => {
    mfe.commit(function() {
      resolve();
    });
  });
}

ask().then(copy).then(() => {
  if (!isGitRepo) execSync('git init', { stdio: 'inherit' });
  execSync('npm i', { stdio: 'inherit' });
  console.log('Success!');
}).catch((err) => {
  console.error(err);
});