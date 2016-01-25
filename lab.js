function hello(name){
  console.log(name + " you are awesome");
}

hello("barry")

var myName = 'Keith';

if(myName !== 'Barry'){
  console.log('this is not Barry!')
}

var counter = -1;

if (counter > 0) {
  console.log('the counter is greater than 0');
}
else if(counter < 0){
  console.log('the counter is less than 0');
}
else {
  console.log ('the counter is 0')
}

1 + 1 === 2 ? console.log ("yay maths") : console.log("nope universe be fucked y0");

var pet = "cat";

switch(pet){
  case "cat":
    console.log("this is a cat");
    break;
  case "dog":
    console.log("this is a dog");
    break;
  default:
    console.log("fuck knows mate");
}

var guitars = ["this one", "that one", "another one"];
console.log(guitars);

var drums = new Array();
drums.push("a rock");
drums.push("a brick");
drums.push("a misplaced wall");
drums[10] = "test";

drums.fill(2);
console.log(drums)

var myPerson = {
  name: 'Some Guy',
  age: 32,
  weapon: 'Cutting sarcasm'
};

var myKey = 'weapon';

myPerson["location"] = 'DIRECTLY BEHIND YOU'

console.log(myPerson[myKey]);
console.log(myPerson.weapon);
console.log(myPerson.location)

var pets = ["dog", "cat", "brick", "rock"];
var person = {
  name: "barry",
  age: 23
}

for(var i = 0; i < pets.length; i ++){
  console.log(pets[i])
}

for(pet in pets){
  console.log(pets[pet]);
}

for(var prop in person){
  console.log(prop + " = " + person[prop]);
}

var x = 0

while(x < 10) {
  console.log(x)
  x++
}

function hello(name) {
  console.log('hello ' + name)
}

hello('barry');

function add(a,b) {
  console.log("the value is "+ (a + b));
}

add(2,4);

function mood(name, mood, weather) {
  console.log(name + " you are in a " + mood + " mood on this " + weather + " day.");
}

mood('billy', 'pure ragin', 'rainy');

function sum(){
  var i = 0;
  var total = 0;
  for(i = 0; i < arguments.length; i +=1 ){
    total += arguments[i];
  }
  return total;
}

console.log(sum(1,2,3))

var hello = function (){
  console.log("hello");
}

hello();

var add = function(a,b){
  return a + b;
}

var subtract = function(a,b){
  return a - b
}

var wow = function(function_to_invoke){
  console.log(function_to_invoke(2,1));
}

wow(add);
wow(subtract);


var name = "Rick";

var talk = function(){
  name = "Jay"
  console.log("How is Friends, " + name + "?" );
}

var walk = function(){
  console.log(name)
}

talk();
walk();

console.log('name in memory = ' + name)

var greet = function(isHappy){

  var text = "";

  if(isHappy){
    text = 'Suffer, puny human!'
  }else{
    text = 'Cheer up, meatbag'
  }

var displayText = function(){
  console.log(text)
}

  displayText();

}

greet(false)



//Section 1

//what types are these? Write your answer in a comment beside it.

1; // number
"cat"; //string
true; //boolean
[]; // array
{}; // object
1.1; // number
undefined; // undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; // true
true; // true
NaN; //false
[]; // true
{}; // true
undefined; // false
""; //false
0; // false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var number = 3;
//3.2 Assign a variable that is a string
var string = "string";
//3.3 Assign a variable that is a boolean
var newBoolean = true;
//3.4 Assign a variable that is an object
var newObject = {name: 'barry'};

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

function truthCheck(fed_boolean) {
  if(fed_boolean === true){
    console.log("hello");
  }else{
    console.log("bye");
  }
}

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var first = animals[0];
//5.2. Assign the last element to a variable
var last = animals[-1];
//5.3. Assign the length of an array to a variable
var length = animals.length;
console.log("length is " + length)
//5.4. Add an item to the end of the array
animals.concat("cat")
//5.5. Add an item to the start of the array
animals.push("brick");
//5.6. Assign the index of hedgehog to a variable

//Section 6

//6.1 Create an array of 5 vegetables
var vegetables = ["potato", "carrot", "onion", "leek", "swede"];
//6.2 Loop over the array and write to the console using a "while"
var count = 0

while(count < vegetables.length){
  console.log(vegetables[count])
  count ++
}
//6.3 Loop again using a "for" with a counter
for(var i = 0; i < vegetables.length; i++){
  console.log(vegetables[i])
}
//6.4 Loop again using a "for in"
for(vegetable in vegetables){
  console.log(vegetables[vegetable])
}
//Section 7
var accounts = [
{ name: 'jay',
amount: 125.50,
type: 'personal'
},
{ name: 'val',
amount: 55125.10,
type: 'business'
},
{ name: 'marc',
amount: 400.00,
type: 'personal'
},
{ name: 'keith',
amount: 220.25,
type: 'business'
},
{ name: 'rick',
amount: 1.00,
type: 'personal'
},
]


function totalCash(){
  var baseCash = 0
  for(account in accounts){
    baseCash = baseCash + accounts[account]['amount']
  }
  console.log(baseCash)
}

totalCash();
//7.2 Find the name of the account with the largest balance
function mostCash(){
  var baseCash = 0
  var mostName
  for(account in accounts){
    if(baseCash < accounts[account]['amount']){
      baseCash = accounts[account]['amount']
      mostName = accounts[account]['name']
    }
  }
  console.log(mostName)
}

mostCash();

//7.3 Find the name of the account with the smallest balance

function leastCash(){
  var baseCash = 50000
  var leastName
  for(account in accounts){
    if(baseCash > accounts[account]['amount']){
      baseCash = accounts[account]['amount']
      leastName = accounts[account]['name']
    }
  }
  console.log(leastName)
}

leastCash();
//7.4 Calculate the average bank account value
function totalCashAverage(){
  var baseCash = 0
  for(account in accounts){
    baseCash = baseCash + accounts[account]['amount']
  }
  console.log(baseCash / accounts.length)
}

totalCashAverage();

//7.5 Find the value of marcs bank account

function valueFinder(name){
  for(account in accounts){
    if(accounts[account]['name'] === name){
      console.log(name + " has " + accounts[account]['amount'])
    }
  }
}

valueFinder('marc');
//7.6 Find the holder of the largest bank account
function mostCash(){
  var baseCash = 0
  var mostName
  for(account in accounts){
    if(baseCash < accounts[account]['amount']){
      baseCash = accounts[account]['amount']
      mostName = accounts[account]['name']
    }
  }
  console.log(mostName)
}

mostCash();
//7.7 Calculate the total cash in business accounts
function bizCash(){
  var baseCash = 0
  for(account in accounts){
    if(accounts[account]['type'] === 'business'){
    baseCash = baseCash + accounts[account]['amount']
    }
  }
  console.log(baseCash)
}

bizCash();
//7.8 Find the largest personal account owner
function mostPersonalCash(){
  var baseCash = 0
  var mostName
  for(account in accounts){
    if(baseCash < accounts[account]['amount'] && accounts[account]['type'] === 'personal'){
      baseCash = accounts[account]['amount']
      mostName = accounts[account]['name']
    }
  }
  console.log(mostName)
}

mostPersonalCash();

//Section 8
//Assign a variable myPerson to a hash, giving them a name, height favourate food

var myPerson = {
  name: 'barry',
  height: 'tall',
  favouriteFood: 'edible'
}