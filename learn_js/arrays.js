// arrays


const myArr = [0,1,2,3,4,5];

// console.log(myArr[6]);

const myArr2 = new Array(1,2,3,4);

// console.log(myArr2.push(7));

// console.log(myArr2)


myArr2.pop();

myArr2.unshift(0); //to add an element to first index

myArr2.shift(); // to remove an element from first index

// console.log(myArr2);

const arr = myArr2.join(); // binds the array and converts into a string

// console.log(arr);

// ------slice , splice------


// console.log('A', myArr);

const myn1 = myArr.slice(1, 3); // shows the part of original array of given indexs

// console.log(myn1) // myn1 [2,3]
// console.log('B', myArr); // myarr [1,2,3,4,4]

const myn2 = myArr.splice(1, 3); // myArr = [1,2,3,4,5]
// cuts the original array and makes it without the indexed elements 
// console.log(myn2); // myn2 [2,3]
// console.log(myArr); // myArr [1,4,5]

// --------------------- Part 2 ------------------


const marvelHeroes = ['thor', 'ironman', 'spiderman'];
const dcHeroes = ['superman', 'batman', 'flash'];

// marvelHeroes.push(dcHeroes); // makes an dc array element inside the marvel array

// console.log(marvelHeroes);


// const conArr = marvelHeroes.concat(dcHeroes); // adds array elements to old array
// console.log(conArr);

const newHero = [...marvelHeroes, ...dcHeroes]; // spread operator

// console.log(newHero);

const anArr = [1,2,3,[4,5,6], 9 , [8,[99,100]]];

const usableArray = anArr.flat(Infinity);

// console.log(usableArray);

// console.log(Array.isArray('Gnane')); // shows if it is an array
// console.log(Array.from('Gnane')); // creates an array of given string chars

// console.log(Array.from({name: "gnane"})); // should say what u have to make array out of (keys or values)

let score = 90;

let score0 = 100;

let score2 = 120;

console.log(Array.of(score, score0, score2));
