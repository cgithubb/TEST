// for loops



for(let i =0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log('5 is best number');
    }
    // console.log(element);
}

// console.log(element); 

// for(let i = 0; i <= 10; i++) {
//     console.log(`Table of : ${i}`);
//     for (let j = 1; j <= 10; j++) {
//        console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// let myArray = ['flash', 'batman', 'superman'];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// ------------------- break and continue ------------------

// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`Value of index is ${index}`);
//         break;
//     }
//     console.log(`Value of index is ${index}`);
// }


// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`Detected is ${index}`);
//         continue;
//     }
//     console.log(`Value of index is ${index}`);
// }

// -------------- high order array loops ---------------

// for of loop ------ array specific loop



const arr = [1,2,4,3,5,6];

// (for of) loop
for (const i of arr) {
    // console.log(i);
}

// maps

const map = new Map()
map.set('In', 'India');
map.set('USA', 'United States ');
map.set('Fr', 'France');


// console.log(map);

for(const i of map) {
    console.log(i);
}

const myobject = {
    gameOne : 'NFS',
    gametwo : 'spiderman'
}

for(const game of myobject){    // objects are not iteratable
    console.log(game);
}


