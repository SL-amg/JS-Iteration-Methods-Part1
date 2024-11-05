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
    num = num *3;
    return num;
})
console.log(multiplyNewArray);

// the End //

/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/

const logger = ["Day 1", "Day 2", "Day 3"];
logger.forEach(function (log) {
    console.log(log);
  });

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/

const tempInFah = [0, 40, 45, 60, 70];

const toCelsius = tempInFah.map(function(temperature){
temperature = ((temperature -32)*((5/9)));
temperature = temperature.toFixed(2);
return temperature;
});

console.log(toCelsius);

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/

const temperatureInFah = [26, 23, 50, 67, 46];
const threshHoldTemp = 35;

const hottestDays = temperatureInFah.filter(function(temp){
    if (temp > threshHoldTemp)
    return true
    else return false;
});
console.log (hottestDays)


/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/

const temperatureInDegFah = [55, 34, 67, 70, 80];
const threshHoldTempDeg = 12;

const convertArrayToDegC = temperatureInDegFah.map(function(temperature2){
    temperature2 = ((temperature2 -32)*((5/9)));
    temperature2 = temperature2.toFixed(2);
    return temperature2;
    });
    
console.log(convertArrayToDegC); // this will print array in Degree C

const logHottestDays = convertArrayToDegC.filter(function(temp){
    if (temp > threshHoldTempDeg)
        return true
        else return false;
    });
    console.log (logHottestDays) // this will print array hottest than 12 degree C

    logHottestDays.forEach(function (log) { // this will log the array in a list
        console.log(log);
      });

