// objects  

// singleton - objects made with constructor



// object literals

// Object.create();  // singleton - made with constructor

const mySym = Symbol("Key1"); // for using symbol as key on object
// symbols are used for naming func and keys  while strings are for data

const JsUser = {
    name: "gnanendra",   //keyValue Pairs
    "fullName": "Gnanendra",
    [mySym]: 'Keys',  
    age: 18,
    location: 'nyp',
    email: 'gnne.gmail.com',
    isLoggedIn: false,
    lastLoginIn: ["Sunday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser['fullName']);

// console.log(JsUser[mySym]);
// console.log(typeof mySym); // symbol

// Object.freeze(JsUser); // cant change anything in the object
JsUser.email = 'Gnanendra@gmail.com';


// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello");
}


JsUser.greeting2 = function () {
    console.log(`Hello, ${this.fullName}`);
}

console.log(JsUser.greeting);

console.log(JsUser.greeting2()); 


