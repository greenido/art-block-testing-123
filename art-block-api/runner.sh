#!/bin/bash

site='https://api.artblocks.io/project/7'
n=11
while [ $n -le 100 ];
do
  cmd=$(curl https://api.artblocks.io/project/${n} > ${n}.html)
  n=$((n+1))
done

