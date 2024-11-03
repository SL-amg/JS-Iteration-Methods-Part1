//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
******************************************************************/

const greaterThan25 = numbers.filter(function(num){
    if ( num >= 25)
        return true;
    else return false;
})
console.log(greaterThan25);

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

const divisibleBy5 = numbers.filter(function(num){
    if( num%5 === 0)
        return true;
    else return false;
})
console.log(divisibleBy5);


/*****************************************************************
Part 2: Mapping
Write code to perform the following tasks using the map method:
3) Create a new array that contains each number squared.
******************************************************************/

const numberSquare = numbers.map(function(num){
    num = num**2;
    return num;
})
console.log(numberSquare);


/*****************************************************************
Part 2: Mapping
Write code to perform the following tasks using the map method:
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

const numberMultioiedBy2 = numbers.map(function(num){
    num = num *2;
    return num;
})
console.log(numberMultioiedBy2);

/*****************************************************************
Part 3: Combining Filtering and Mapping
Combine the filter and map methods to perform the following tasks:
5) Filter the numbers that are greater than or equal to 20 and then square each of them.
******************************************************************/

const greaterOrEqual = numbers.filter(function(num){
    if(num >= 20)
        return true;
    else return false;
})

// this will give us a new array called greaterOrEqual
// now we square each element with map

const squareNewArray = greaterOrEqual.map(function(num){
    num = num **2
    return num
})

console.log(squareNewArray);

/*****************************************************************
Part 3: Combining Filtering and Mapping
Combine the filter and map methods to perform the following tasks:
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

const divisibleBy5Again = numbers.filter(function(num){
    if(num % 5 === 0)
        return true
        else return false;
    }
)
// after filtering the number devide by 5 in a new array called divisibleBy5Again we multply each element by 3 using map

const multiplyNewArray = divisibleBy5.map(function(num){
    num = num *5;
    return num;
})
console.log(multiplyNewArray);

// the End // 