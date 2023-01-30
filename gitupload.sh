#! /bin/bash


git status
sleep 2
git add .
time=$(date)
git commit -m "siva $time"
sleep 2
git push 
