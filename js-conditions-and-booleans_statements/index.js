console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if(SUPER_SECRET_PASSWORD === receivedPassword){
    console.log("Welcome! You are logged in as Brunhilde1984.");
}else{
    console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;
if(number % 2 == 0){
    console.log("Number " + number + " is even.");
}else{
    console.log("Number " + number + " is odd.");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
if(numberOfHotdogs < 5){
    console.log("2 euro per hotdog");
}else if(numberOfHotdogs < 100){
    console.log("1,50 euro per hotdog");
}else if(numberOfHotdogs < 100000){
    console.log("1 euro per hotdog");
}else {
    console.log("0,10 euro per hotdog");
}

// Part 4: Daytime
const currentHour = 12;

let statement = "";

if(currentHour < 17){
    statement = "Still need to learn...";
}else{
    statement = "Partytime!!!";
}
console.log(statement);

// Part 5: Greeting
let name = "Archibald";

let greeting = "Hello " + "//enter your code here" + "!";

if(name === "Archibald"){
    greeting = "Hello Trainer!"
}else{
    greeting = "Hello " + name + " !";
}




console.log(greeting);
