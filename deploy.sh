#!/usr/bin/env bash

rm -rf build &&
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:ertigers/HuHuLog-react-website.git &&
git push -f -u origin main &&
cd -
echo https://ertigers.github.io/HuHuLog-react-website/index.html