#! /bin/bash
clear
echo "enter a number"
read  st1
if  (( $st1 ==  5  ))
then
  echo "You entered five!"
fi
# -eq  -gt -lt -ge  -le -a -o
if [ $st1 -eq 5  ]
then
   echo equal to five
elif (( $st1 < 5 ))
then
   echo "less than five"
else
 echo "more than five"
fi