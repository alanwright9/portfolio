#!/usr/bin/env sh

# abort on errors
set -e

git add .

echo 'Enter Commit Message'
read commitMessage

git branch -M main
git commit -m "$commitMessage"
git push -u origin main