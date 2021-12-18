#!/bin/bash -ex
set -e

BUILD_FOLDER=build
CJS_FOLDER=$BUILD_FOLDER/cjs
ES_FOLDER=$BUILD_FOLDER/es

mv $CJS_FOLDER/index.js $BUILD_FOLDER/index.cjs
mv $ES_FOLDER/index.js $BUILD_FOLDER/index.js
rm -rf $CJS_FOLDER $ES_FOLDER
