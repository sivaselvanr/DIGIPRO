#! /bin/bash

a=1
while :
do
	git status
	git add .
	time=$(date)
	git commit -m "siva $time"
	git push 
	a++;
done
echo 'done $a'
