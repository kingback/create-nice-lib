# create-nice-lib

Create a nice open source library.

## usage

### create repo

[Create a new repo on github](https://github.com/new) and clone it to local, then init your scaffold.

```bash
$ cd your_repo
$ npx create-nice-lib
```

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
