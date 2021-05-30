#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:ertigers/HuHuLog-react-website.git &&
git push -u origin master -f
cd -


rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:ertigers/HuHuLog-react-website.git &&
git push -f -u origin main &&
cd -
echo https://ertigers.github.io/HuHuLog-react-website/index.html