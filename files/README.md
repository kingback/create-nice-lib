# <%= name %>

[![Travis Status](https://img.shields.io/travis/<%= group %>/<%= name %>.svg)](https://travis-ci.com/github/<%= group %>/<%= name %>)
[![Coverage Status](https://coveralls.io/repos/github/<%= group %>/<%= name %>/badge.svg?branch=main)](https://coveralls.io/github/<%= group %>/<%= name %>?branch=main)
[![Download Weekly](https://img.shields.io/npm/dw/<%= name %>.svg?sanitize=true)](https://npmcharts.com/compare/<%= name %>?minimal=true)
[![License](https://img.shields.io/npm/l/<%= name %>.svg?sanitize=true)](https://github.com/<%= group %>/<%= name %>)
[![Create by](https://img.shields.io/badge/by-<%= group %>-green)](https://github.com/<%= group %>)

<%= description %>

## usage

### generate github release token

First [generate github token](https://github.com/settings/tokens/new)(`public_repo` is all you need)，then exports it in `.bashrc/.zshrc`(remember to restart your `bash/zsh`)

![](https://gw.alicdn.com/tfs/TB11BzS2FT7gK0jSZFpXXaTkpXa-2034-1020.png)

```
export CONVENTIONAL_GITHUB_RELEASER_TOKEN="your_token"
```

**Never ever expose your token in your repo**

### bind travis & coveralls

* [travis-cli](https://travis-ci.com/)
* [coveralls](https://coveralls.io/)

### commands

```bash
$ npm run build # build
$ npm run eslint # lint codes
$ npm run push # add & commit & push codes
$ npm run release:beta # release beta version
$ npm run release # release production version
```