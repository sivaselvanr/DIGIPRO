#! /bin/bash

while :
do	
	a=1;
	git status
	git add .
	time=$(date)
	git commit -m "siva $time"
	git push 
	((a++))
	echo "done $a"
done
