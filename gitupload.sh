+#! /bin/bash

while :
do	
	git status
	git add .
	time=$(date)
	git commit -m "siva $time"
	git push 
done
