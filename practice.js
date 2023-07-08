//////////////////PROBLEM 1////////////////////

//Create a function called capitalizer that takes in an array of strings and returns a new array (does not modify original array) with all strings capitalized.

const sentenceArr = ['hello', 'how', 'are', 'you'];
const sentenceArrAlt = ['Jacob', 'Kyle', 'John'];
const newSentence = ['Mother', 'Father', 'Brother', 'Sister'];

// Code Here
function capitalizer(sentenceUncapital){
  console.log(sentenceUncapital)
  const sentenceCapital = []

  for (i = 0; i < sentenceUncapital.length; i++){
  const capital = sentenceUncapital[i].toUpperCase();
  // console.log(capital)
  sentenceCapital.push(capital)
  }
  // console.log(sentenceCapital)
  return sentenceCapital
}

console.log(capitalizer(sentenceArr))
// console.log(capitalizer(sentenceArrAlt))
// console.log(capitalizer(newSentence))








//////////////////PROBLEM 2////////////////////

// Create a function that loops over an array and returs a new array with every other value. Name the function everyOther

const secretMessage = [
  'dont',
  'always',
  'tell',
  'never',
  'anyone',
  'forget',
  'about',
  'to',
  'this',
  'remember',
  'array',
  'always',
];

//Code here
function everyOther(anything){
  const superSecret = []

  for (i = 0; i < anything.length; i+=2){
  const makingSecrets = anything[i];
  superSecret.push(makingSecrets)
  }
  return superSecret
}


console.log(everyOther(secretMessage))







//////////////////PROBLEM 3////////////////////

//Create a function that loops over an array of objects and returns a new array of the value of the `name` key. Name the function nameExtractor.

const coolGuys = [
  { name: 'Bob Ross' },
  { name: 'Steve Irwin' },
  { name: 'Mr. Rogers' },
];

//Code here
function nameExtractor(list){
  const names = []

  for (let i = 0; i < list.length; i++){
    const something = list[i];
    // const superCool = coolGuys.name
    // let nameList = Object.values(list)
    // console.log(nameList)
    names.push(something.name)
  }
  return names
}

console.log(nameExtractor(coolGuys))









//////////////////PROBLEM 4////////////////////

//This while loop is broken. Fix it so that it runs until i is no longer less than 10.

//Code here

function brokenWhileLoop(i) {
  while (i !== 10) {
    console.log(i)
    i++;
  }
  return i;
}

console.log(brokenWhileLoop(0))










//////////////////PROBLEM 5////////////////////

//Create a function called rePete that takes in a string and a number and returns a string that is the passed in string repeated that n times.

//Code here
let string = 'poopy'
let number = 7
function rePete(combination){
  const noRepeat = []
  for (let i = 0; i < combination; i++){
    // const repeat = combination[i];
    // let newstring = string*number


  }
  noRepeat.push(repeat);
}




console.log(rePete)








//////////////////PROBLEM 6////////////////////

//rewrite the function below to use a ternary instead of an if/else block

//Code here
function isEven(num) {
  // if (num % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return num % 2 === 0 ? true : false;
}
console.log(isEven(2))









//////////////////PROBLEM 7////////////////////

//rewrite the function below to use a single ternary instead of a nested one

//Code Here
function nestedTernary(num) {
  if(num < 0){
    return 'negative'
  }
  return num > 0 ? 'positive' : 'zero';
  // return num > 0 ? 'positive'; num < 0 ? 'negative' : 'zero';
}

console.log(nestedTernary(5))