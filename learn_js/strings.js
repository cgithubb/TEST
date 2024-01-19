let string1 = "computer";
let count = 65

// console.log(string1 +" "+ count + "value");

// console.log(`value of ${string1.toUpperCase()} is ${count}`);

const names = new String('  GTA  VICE  CITY');

// console.log(names.__proto__);

// console.log(string1.length);
// console.log(string1.indexOf('M'))
// console.log(string1.charAt(4))
// console.log(typeof(names))

// * ? Always use String Interpolation while using strings

const string2 = string1.substring(1,4);

// console.log(string2);
// console.log(string1);

// ! we can use -ve index to start from back of string
const anotherStr = names.slice(-1, 3);

// console.log(names.length);

// console.log(anotherStr);

const trim = names.trim();

// console.log(names);
// console.log(trim);

const url = "https://gnanendra.com/gnane%20chaithu"
console.log(url.replace('%20', "-"));

// console.log(url.includes('sundar'));
console.log(names.split('    '))
