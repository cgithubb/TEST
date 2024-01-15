// expressions 
// console.log(addTwo(4));  // cant access expresions before declaring them, where as its not the case for normal functions
const addTwo = function(num) {
    return num
}




const user = {
    name: 'gnane',
    age: 22,
    welcomeMessage: function() {
        console.log(`welcome ${this.name}`);
        console.log(this)
    }
}

user.welcomeMessage();

// console.log(this)

// function chai() {
//     let username = 'gnane';
//     console.log(this.username);
// }

// chai();

// ---arrow functions -----

const chai = () => {
    let user = 'gnane';
    console.log(this);      //
}

// chai();

const adds = (num, num2) => {
    return num+num2;
}

// immplict return
const adder = (num, num2) =>  (num+num2)

console.log(adder(1,2));