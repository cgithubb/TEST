const myobject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    sft : 'swift'
}

for (const key in myobject) {
    // console.log(key);
    if (Object.hasOwnProperty.call(myobject, key)) {
        const element = myobject[key];
        // console.log(`${key} -- ${element}`);
    }
}
const programming = ['js', 'cpp', 'java', 'ruby'];

for (const key in programming) {
    // console.log(key);
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
}

const map = new Map()
map.set('In', 'India');
map.set('USA', 'United States ');
map.set('Fr', 'France');


for (const key in map) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
                                            //not iterable
    // }
    console.log(key);
}

const programs = ['js', 'cpp', 'java', 'ruby'];


programs.forEach((element) => {
    // console.log(element);           // func given as param
                       //  is called a callback
});

function printme(item) {
    console.log(item);
}

// programs.forEach(printme);

programs.forEach((item, index, arr) => {
    // console.log(`${item}, ${index}, ${arr}`);
})  // foreach has values of item, index and array

const myCoding = [
    {
        langname : 'javascript',
        langfile : 'js'
    },
    {
        langname : 'java',
        langfile : 'java'
    },
    {
        langname : 'python',
        langfile : 'py'
    }
]

myCoding.forEach((item) => {
    // console.log(item.langfile);
});

// ---------- 

const coding = ['js', 'java', 'python', 'cpp']

// const vals = coding.forEach((item) => {
//     // console.log(item);
//     return item;                 //returns void
// });

// console.log(vals);


const myNums = [1,2,3,4,5,6,7,8];

const vals = myNums.filter((num) => {
    return num > 3;
});

// console.log(vals);

const kal = myNums.filter((item) => item);

// console.log(kal)


// we can give double map\\


const nums = myNums.map((n) => n*10).map((n) => n/2).filter((n) => n<10);

console.log(nums);


const sumWithInitial = myNums.reduce((acc, val) => {
    // console.log(`${acc}, ${val}`);
    return acc + val;
}, 0);

// console.log(sumWithInitial);


