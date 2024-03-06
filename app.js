//                           CHAP : 4

// Q1

// var aftab , $aftab , _aftab

// Q2

// Legal
// var aftab
// var $aftab
// var _aftab
// var aftab786
// var aftabAhmed

// Illegal
// var 123aftab
// var #aftab
// var aftab-ahmed
// var aftab ahmed
// var alert aftab 

// Q3)

document.write("<h1>Rules for naming JS variables</h1><br/>Variable names can only contain letters, numbers, $ and _. For example : $my_1stVariable<br/>Variables must begin with a letter, $ or _. For example : $name, _name or name<br/>Variable names are case sensitive<br/>Variable names should not be JS<br/>");

//                          CHAP : 5

// Q1 & Q2

var firstNumber = +prompt("Enter first number: ");
var secondNumber = +prompt("Enter second number");

var bothAdd = firstNumber + secondNumber;
document.write("Sum of " , firstNumber, " and " ,secondNumber, " is " ,bothAdd, "<br/>");

var bothSub = firstNumber - secondNumber;
document.write("Sub of " , firstNumber, " and " ,secondNumber, " is " ,bothSub, "<br/>");

var bothMul = firstNumber * secondNumber;
document.write("Multiplication of " , firstNumber, " and " ,secondNumber, " is " ,bothMul, "<br/>");

var bothDiv = firstNumber / secondNumber;
document.write("Division of " , firstNumber, " and " ,secondNumber, " is " ,bothDiv, "<br/>");

var bothMod = firstNumber % secondNumber;
document.write("Modulus of " , firstNumber, " and " ,secondNumber, " is " ,bothMod, "<br/>");

// Q3

var declare 
document.write("Value after variable declaration is ",declare,"<br/>");
declare = 5;
document.write("Initialvalue: " ,declare,"<br/>");
declare = ++declare;
document.write("Value after increment is: ",declare,"<br/>");
declare = declare + 7;
document.write("Value after addition is: ",declare,"<br/>");
declare = --declare;
document.write("Value after decrement is: ",declare,"<br/>");
declare = declare%3;
document.write("The remainder is : ",declare,"<br/>");

// Q4

var ticketPrice = 600;
var fiveTicketPrice = ticketPrice*5;
document.write("Total cost to buy 5 tickets to a movie is ",fiveTicketPrice,"<br/>");

// Q5

var table = +prompt("Enter any number",4);

document.write(table , "x" , "1" , "=" , table*1 , "<br>");
document.write(table , "x" , "2" , "=" , table*2 , "<br>");
document.write(table , "x" , "3" , "=" , table*3 , "<br>");
document.write(table , "x" , "4" , "=" , table*4 , "<br>");
document.write(table , "x" , "5" , "=" , table*5 , "<br>");
document.write(table , "x" , "6" , "=" , table*6 , "<br>");
document.write(table , "x" , "7" , "=" , table*7 , "<br>");
document.write(table , "x" , "8" , "=" , table*8 , "<br>");
document.write(table , "x" , "9" , "=" , table*9 , "<br>");
document.write(table , "x" , "10" , "=" , table*10, "<br>");

// Q6

var Cel = 25;
Fah = (Cel*9/5)+32;
document.write(Cel,"<sup>o</sup>C is ", Fah , "<sup>o</sup>F<br>");

var Fah = 70;
Cel = (Fah-32)*5/9;
document.write(Fah,"<sup>o</sup>C is ", Cel , "<sup>o</sup>F");


// Q7

document.write("<h1>Shopping Cart</h1><br/>")

var item_1_price = +prompt("Enter price of item 1:");
document.write("Price of item 1 is ",item_1_price,"<br/>");

var order_quantity_1 = +prompt("How many times item 1 do you want to purchase:");
document.write("Quantity of item 1 is ",order_quantity_1,"<br/>");

var item_2_price = +prompt("Enter price of item 2:");
document.write("Price of item 2 is ",item_2_price,"<br/>");

var order_quantity_2 = +prompt("How many times item 2 do you want to purchase:");
document.write("Quantity of item 2 is ",order_quantity_2,"<br/>");

var shipping_charges = 100;
document.write("Shipping charges ",shipping_charges,"<br/>");

var total_cost = item_1_price*order_quantity_1+item_2_price*order_quantity_2+shipping_charges;
document.write("Total cost of your order is: ",total_cost);

// Q8

document.write("<h1>Marks Sheet</h1><br/>");

var total_marks = +prompt("Enter total marks:");
document.write("Total marks: ",total_marks,"<br/>");

var obtained_marks = +prompt("Enter obtained marks");
document.write("Marks obtained: ",obtained_marks,"<br/>");

var per = (obtained_marks/total_marks)*100;
document.write("Percentage: ",per);

// Q9

document.write("<h1>Currency in PKR</h1><br/>");

let usDollar = 300;
let dollar = +prompt("How much US Dollars you want?");

let saudiRiyals = 75;
let riyals = +prompt("How much Saudi Riyals you want?");

document.write("Total Currency in PKR: " , usDollar*dollar+saudiRiyals*riyals);
// Q10

var in_value = +prompt("Enter any number");
document.write((in_value+5*10)/2);

// Q11

document.write("<h1>Age Calculator</h1><br/>");

var currentYear = +prompt("Enter Current Year");
document.write("Current Year: ",currentYear,"<br>");

var birthYear = +prompt("Enter Birth Year");
document.write("Birth Year: ",birthYear,"<br>");

var age = currentYear - birthYear;

document.write("Your Age is: " , age);

// Q12

document.write("<h1>The Geometrizer</h1><br/>");

var radius = +prompt("Enter any value for radius:");
document.write("Radius of a circle: ",radius,"<br>")

const pie = 3.142;
var circumference = 2*pie*radius;
document.write("The Circumference is: ",circumference,"<br/>");

var area = pie*radius*radius
document.write("The Area is: ",area,"<br>")

// Q13

var favSnack = "Biryani";
document.write("Favourite Snack: ",favSnack,"<br>");

var currentAge = 19;
document.write("Current Age: ",currentAge,"<br>");

var maxAge = 90;
document.write("Estimated Maximum Age: " ,maxAge,"<br>");

var snack_amount_per_day = 1;
document.write("Amount of Snacks per day: ",snack_amount_per_day,"<br>");

var avgAge = maxAge - currentAge;

document.write("You will need " , avgAge , " to last you until the ripe old age of " , maxAge);