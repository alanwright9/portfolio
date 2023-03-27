#!/usr/bin/env sh

# abort on errors
set -e

# build project first
npm run build

# enter build directory
cd dist

# commit changes in this directory to the subtree
git add -A
git commit -m 'deploy'
git push -f https://github.com/Techtress/vue-portfolio.git main:gh-pages
cd -