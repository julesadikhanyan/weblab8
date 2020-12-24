#!/bin/bash

for name in $(find . -name "*.svg" | xargs basename); do
  echo -n "$name -> "
  newname=$(echo $name | sed s/\.svg$/\.png/g)
  echo $newname
  inkscape $name --export-filename $newname 
done
