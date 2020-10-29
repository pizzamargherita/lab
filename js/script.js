//EXERCISE 1: The Fortune Teller
let jobTitle = `Detective`
let geoLocation = `Rio`
let annualSalary= `50000`
let companyName= `BOPE`
console.log(`You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}.`)
//EXERCISE 2: The Age Calculator
var CurrentYear =`2020`
var Dob=`1995`
console.log(`They are ${CurrentYear-Dob} years old.`)
//EXERCISE 3: The Lifetime Supply Calculator
var CurrentAge=`25`
var MaxAge= `87`
var AmountSnack=`15`
console.log(`You will need ${(MaxAge-CurrentAge)*365*15} to last you until the ripe old age of ${MaxAge}.`)
//EXERCISE 4: The Geometrizer
var RadiusCalc= `3`
console.log(`The circumference is ${3.1415*(2*RadiusCalc)}. The area is ${3.1415*(RadiusCalc**2)}.`)

//EXERCISE 5: The Temperature Converter
var TempCel=`30`
var TempFar=`14`
console.log(`${TempCel}°C is ${TempCel*9/5+32}°F.${TempFar}°F is ${(TempFar-32)*5/9}°C.`)

// LAB2


// EXERCISE 6
function squareNumber(num) { 
    return num ** 2
}
let numToSq = 3

console.log(`The result of squaring the number ${numToSq} is ${squareNumber(numToSq)}.`)

// EXERCISE 7
function halfNumber(num) {
    return num /2
}
let numToDiv = 5

console.log(`Half of ${numToDiv} is ${halfNumber (numToDiv)}.`)
// EXERCISE 8
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf (num1, num2) {
   return (num1/num2) * 100
}

let num1 = 2
let num2 = 4

let result = percentOf(num1,num2)


console.log(`${num1} is ${percentOf(num1,num2)}% of ${num2}.`)

// EXERCISE 9
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.
function areaOfCircle  (num) {
   return 3.1415 * num ** 2
}
let numToArea =2

console.log(`The area for a circle with radius ${numToArea} is ${areaOfCircle (numToArea)}.`)

// EXERCISE 10
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
function runAll (num){
}
//      1. Take half of the number and store the result.
let num = 4

console.log(`Half of ${num} is ${halfNumber (num)}.`)
//      2. Square the result of #1 and store that result. 

let numEx1 = 2
console.log(`The result of squaring the number ${numEx1} is ${squareNumber(numEx1)}.`)
//      3. Calculate the area of a circle with the result of #2 as the radius.
let numEx2 = 4

console.log(`The area for a circle with radius ${numEx2} is ${areaOfCircle (numEx2)}.`)
//      4. Calculate what percentage that area (#3) is of the squared result (#2).
let numEx3 =50.264
let numEx2Sq = numEx2 **2

let resultFor5 = percentOf(numEx3,numEx2Sq)

console.log(`${numEx3} is ${percentOf(numEx3,numEx2Sq)}% of ${numEx2Sq}.`)


// DOCUMENT OUTPUT
let Ex1 = document.querySelector('#Ex_1')
Ex1.textContent = `You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}.`

let Ex2 = document.querySelector('#Ex_2')
Ex2.textContent = `They are ${CurrentYear-Dob} years old.`

let Ex3 = document.querySelector('#Ex_3')
Ex3.textContent = `You will need ${(MaxAge-CurrentAge)*365*15} to last you until the ripe old age of ${MaxAge}.`

let Ex4 = document.querySelector('#Ex_4')
Ex4.textContent = `The circumference is ${3.1415*(2*RadiusCalc)}. The area is ${3.1415*(RadiusCalc**2)}.`

let Ex5 = document.querySelector('#Ex_5')
Ex5.textContent = `${TempCel}°C is ${TempCel*9/5+32}°F.${TempFar}°F is ${(TempFar-32)*5/9}°C.`

let Ex6 = document.querySelector('#Ex_6')
Ex6.textContent = `The result of squaring the number ${numToSq} is ${squareNumber(numToSq)}.`

let Ex7 = document.querySelector('#Ex_7')
Ex7.textContent = `Half of ${numToDiv} is ${halfNumber (numToDiv)}.`

let Ex8 = document.querySelector('#Ex_8')
Ex8.textContent = `${num1} is ${percentOf(num1,num2)}% of ${num2}.`

let Ex9 = document.querySelector('#Ex_9')
Ex9.textContent = `The area for a circle with radius ${numToArea} is ${areaOfCircle (numToArea)}.`

let Ex10 = document.querySelector('#Ex_10')
Ex10.textContent = `Half of ${num} is ${halfNumber (num)}. The result of squaring the number ${numEx1} is ${squareNumber(numEx1)}.The area for a circle with radius ${numEx2} is ${areaOfCircle (numEx2)}. ${numEx3} is ${percentOf(numEx3,numEx2Sq)}% of ${numEx2Sq}. `
