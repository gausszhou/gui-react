#!/usr/bin/env sh

set -e 

pnpm docs:build

if [ ! -d "dist"]
then
echo "构建失败"
else
echo "构建成功"

cd dist/gui-react

git init 
git config --local user.name "gausszhou"
git config --local user.email gausszhou@qq.com
git add .

time=$(date "+%Y-%m-%d %H:%m")
git commit -m "$time gh-pages"
git checkout -b gh-pages
git push git@github.com:gausszhou/gui-react.git gh-pages -f

fi

cd -