#!/usr/bin/env sh

# abort on errors
set -e

# build project first
npm run build

# enter build directory
cd dist

# commit changes in this directory to the subtree
git init
git branch -M main
git add -A
git commit -m 'deploy'
git push -f https://github.com/techtress/vue-portfolio.git main:gh-pages
cd -