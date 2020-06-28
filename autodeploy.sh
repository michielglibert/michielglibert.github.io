#!/bin/bash

[[ $# -ne 1 ]] && echo "Provide github commit message"

shopt -s extglob
rm -rf !(CNAME|.git|old_portfolio|portfolio_final|autodeploy.sh|.|..)
cd portfolio_final
yarn build
cd ..
cp dist/* .
git add .
git commit -m "$1"
git push