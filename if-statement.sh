#!/bin/bash

if [[ -d folder ]]
then
  echo "folder is a directory (klasör bir dizindir)"
fi

if [[ -f file ]]
then
  echo "file is an ordinary file (dosya sıradan bir dosyadır)"
fi

if [[ -r file ]]
then
  echo "file is a readable file(dosya okunabilir bir dosyadır)"
fi

if [[ -w file ]]
then
  echo "file is a writable file(dosya yazılabilir bir dosyadır)"
fi

if [[ -s file ]]
then
  echo "file is > 0 bytes (dosya > 0 bayttır)"
fi

if [[ -x $0 ]]
then
  echo "$0 is an executable file ($0 yürütülebilir bir dosyadır)"
fi