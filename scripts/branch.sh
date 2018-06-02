#!/bin/bash

GIT_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
sed -i '/.*REACT_APP_BRANCH.*/c\REACT_APP_BRANCH='"${GIT_BRANCH}" $PWD/.env