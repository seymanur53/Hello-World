#!/bin/bash
read -p "Input first number: " first_number
read -p "Input second number: " second_number

sum=$(($first_number + $second_number))

echo "SUM=$sum"

number=$sum
let new_number=++number
echo "Number = $number"

sub=$(($number - $first_number))
echo "SUB=$sub"

