// Question 1
// var userInput = +window.prompt('enter a number')
// if(userInput == 5)
// {
// console.log('5')
// }else if(userInput == 2){
// console.log('2')
// }

// Question 2
// var userInput = +window.prompt('enter a number')
// if((userInput % 4 == 0)&&(userInput % 3 == 0))
// {
// console.log('yes')
// }else{
// console.log('no')
// }


// Question 3
// var n1 = Number(window.prompt('enter first number'))
// var n2 = Number(window.prompt('enter second number'))
// if (n1 > n2) {
//     console.log(n1)
// } else {
//     console.log(n2)
// }


// Question 4
// var userInput = +window.prompt('enter a number')
// if((userInput < 0))
// {
// console.log('negative')
// }else if ((userInput > 0)){
// console.log('positive')
// }
// else{
//     console.log('zero')
// }


// Question 5
// var n1 = Number(window.prompt('enter first number'))
// var n2 = Number(window.prompt('enter second number'))
// var n3 = Number(window.prompt('enter third number'))

// var max = n1
// var min = n1

// if (n2 > max) {
//     max = n2
// }

// if (n3 > max) {
//     max = n3
// }

// if (n2 < min) {
//     min = n2
// }

// if (n3 < min) {
//     min = n3
// }  
// console.log(max + " is the max and " + min + " is the min");


// Question 6
// var num = Number(window.prompt('enter a number'))
// if (num % 2 == 0) {
//     console.log('even');
// } else {
//     console.log('odd');
// }


// Question 7
// var char = window.prompt('enter a character')
// if ((char == 'a')||(char == 'A')||(char == 'e')||(char == 'E') ||(char == 'i')||(char == 'I') ||(char == 'O')||(char == 'o') ||(char == 'U')||(char == 'u')  ){
//     console.log('Vowel');
// } else {
//     console.log('Consonant');
// }


// Question 8
// var userInput = +window.prompt('enter a number')
// for(var i=1 ; i<=userInput ; i++)
// {
//     console.log (i);
// }


// Question 9
// var num = +window.prompt('enter a number')
// for(var i=1 ; i<=12 ; i++)
// {
//     console.log (num*i);
// }


// Question 10
// var num = +window.prompt('enter a number')
// for (var i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }


// // Question 11
// var base = prompt("Enter the base number:");
// var power = prompt("Enter the power:");
// var result = 1;
// var i = 0;
// while (i < Number(power)) {
//   result = result * Number(base);
//   i++;
// }
// console.log(result);

// // Question 12
// var total = 0;
// var i = 1;
// while (i <= 5) {
//   var mark = prompt("Enter mark " + i + ":");
//   total = total + Number(mark);
//   i++;
// }
// var avg = total / 5;
// var percent = avg;
// console.log("Total: " + total);
// console.log("Average: " + avg);
// console.log("Percentage: " + percent + "%");

// // Question 13
// var month = prompt("Enter month number:");
// if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//   console.log("31 days");
// } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//   console.log("30 days");
// } else if (month == 2) {
//   console.log("28 or 29 days");
// } else {
//   console.log("Invalid month");
// }

// // Question 14
// var i = 1;
// while (i <= 5) {
//   var mark = prompt("Enter mark " + i + ":");
//   var grade = "";
//   var num = Number(mark);

//   if (num >= 90 && num <= 100) {
//     grade = "A";
//   } else if (num >= 80 && num < 90) {
//     grade = "B";
//   } else if (num >= 70 && num < 80) {
//     grade = "C";
//   } else if (num >= 50 && num < 70) {
//     grade = "D";
//   } else if (num < 50) {
//     grade = "F";
//   }

//   console.log("Mark " + i + ": " + grade + " and " + num + "%");
//   i++;
// }

// // Question 15 
// var month = prompt("Enter month number:");
// switch (month) {
//   case "1":
//   case "3":
//   case "5":
//   case "7":
//   case "8":
//   case "10":
//   case "12":
//     console.log("31 days");
//     break;
//   case "4":
//   case "6":
//   case "9":
//   case "11":
//     console.log("30 days");
//     break;
//   case "2":
//     console.log("28 or 29 days");
//     break;
//   default:
//     console.log("Invalid month");
// }

// // Question 16 
// var char = prompt("Enter a character:");
// switch (char) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U":
//     console.log("Vowel");
//     break;
//   default:
//     console.log("Consonant");
// }

// // Question 17
// var num1 = Number(prompt("Enter first number:"));
// var num2 = Number(prompt("Enter second number:"));
// switch (true) {
//   case (num1 > num2):
//     console.log(num1 + " is the max");
//     break;
//   case (num2 > num1):
//     console.log(num2 + " is the max");
//     break;
//   default:
//     console.log("Both are equal");
// }

// // Question 18 
// var num = Number(prompt("Enter a number:"));
// switch (num % 2) {
//   case 0:
//     console.log("Even");
//     break;
//   default:
//     console.log("Odd");
// }

// // Question 19 
// var num = Number(prompt("Enter a number:"));
// switch (true) {
//   case (num > 0):
//     console.log("Positive");
//     break;
//   case (num < 0):
//     console.log("Negative");
//     break;
//   case (num == 0):
//     console.log("Zero");
//     break;
// }

// // Question 20 
// var num1 = Number(prompt("Enter first number:"));
// var num2 = Number(prompt("Enter second number:"));
// var operator = prompt("Enter operator (+, -, *, /):");
// switch (operator) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//     break;
//   case "*":
//     console.log(num1 * num2);
//     break;
//   case "/":
//     console.log(num1 / num2);
//     break;
//   default:
//     console.log("Invalid operator");
// }
