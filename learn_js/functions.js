
"use strict"

function sayInstName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayInstName();
/*
function addTwoNums(numOne, numTwo) {
    let res = numOne + numTwo;
    console.log(numOne + numTwo);
       return res;
}

addTwoNums(3, 4);

const result = addTwoNums(3, 4);

console.log(`result is ${result}`);
*/


/*
function isLoggedIn(username = 'sam' ) {    //sam is default value
    if(!username){
       console.log(`Please enter a username`);
       return
    }else {
        return `${username} is logged in`;
    }
}

console.log(isLoggedIn());
*/

// ------------------- Functions, Objects -----------------

function calcCartPrice(...num) {   //use spread or REST operator to give multiple args {bundle args and give it}
    return num;
}

calcCartPrice(1,2,3,4,5);

// console.log(calcCartPrice(2, 4, 5));

const user = {
    username : 'nigger',
    price : 99
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user);

handleObject({
    username: 'creator',
    price: 'infinite'
})