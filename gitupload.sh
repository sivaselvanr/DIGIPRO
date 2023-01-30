#! /bin/bash


git status
sleep 2
git add .
time=$(date)
git commit -m "$time"
sleep 2
git push 
