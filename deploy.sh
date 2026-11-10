#!/usr/bin/env sh

set -e

# Build the Vue application
npm run build

# Enter the production folder
cd dist

# Prevent GitHub Pages from processing files with Jekyll
touch .nojekyll

# Create the deployment commit
git init
git checkout -b main
git add -A
git commit -m "Deploy Module 10 Quote Generator"

# Publish the production files to GitHub Pages
git push -f https://github.com/tahill5/module11.git main:gh-pages

cd ..