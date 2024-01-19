// APIs
// destructuring of objects

const course = {
    courseName: 'JS',
    price: 999,
    instructor: 'Gnanendra'
}


const {instructor: instcr} = course; // this is destructuring

// console.log(instructor); // Gnanendra

// console.log(instcr); //Gnanendra


// const navbar = ({instcr}) => {
                                        //while using react in arrow func parameters we give like this for props
// }

// const url = "https://api.github.com/users/hiteshChowdary"
// fetch('GET', url).then((response) => {
//     console.log(response);                   // failed
// });


// -------------------- Part 2 -------------------------



// recalling date in js

// const date = new Date();
// console.log(date.toLocaleString('default', {
//     month: "short"
// }));


// Starts


let users = new Object(); // singleton

const user = {} // non single-ton

// console.log(users);

users.name = "Sam";
users.id = 78990;
users.email = 'sam@gmail.com'

// console.log(users);

// combining objects 

const obj1 = {1: 'gnane', 2: 'chaithu'};
const obj2 = {3: 'asus', 4: 'java'};

const obj3 = Object.assign({}, obj2); // copies the obj of first layer
const obj4 = structuredClone(obj1); // creates deep clone of all layers

// console.log(obj4);

const obj5 = {...obj1, ...obj2}; // spread operator

// console.log(obj5);

//  console.log(Object.values(users));
//  console.log(Object.keys(users));

console.log(users.hasOwnProperty('name'));

