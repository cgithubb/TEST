// Dates

// 1st January 1970

let myDate = new Date();

// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let creationDate = new Date(2023, 11, 23, 17, 30);

console.log(creationDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(creationDate.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();

// console.log(creationDate.getMonth().toString());

console.log(`Todays date is ${creationDate.toDateString()}`)

console.log(creationDate.toLocaleString('default', {
    month : 'short'
}))