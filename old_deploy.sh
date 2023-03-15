# Add source to master branch
git add .

echo 'Enter Commit Message'
read commitMessage

git commit -m "$commitMessage"
git push

# Build website for distribution
npm run build

# Add distribution to gh-pages branch
git add dist -f
git commit -m "$commitMessage"
git subtree push --prefix dist origin gh-pages --squash