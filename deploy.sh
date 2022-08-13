#!/bin/bash

npm run build && npm run export
git add .
git commit -m "deploy"
git push origin main