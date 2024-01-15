// if

const isUserLoggedIn = false;

if(isUserLoggedIn) {
    console.log(`${isUserLoggedIn}`)
} else {
    console.log('falsey');
}

const score = 200;

if(score>100){
    const power = 'fly';
    console.log(`UserPower: ${power}`);
}

const balance = 1000;

if(balance>500) console.log('test'); // implicit scope

// ---------- switch ---------------
// redux


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 'mar';

switch(month) {
    case 'jan':
        console.log('January');
        break;
    case 'feb':
        console.log('February');
        break;
    case 'mar':
        console.log('march');
        break;
    default:
        console.log('enter a correct month');
        break;
}

//------ truthy falsy --------

const userEmail = 'gnane@gmail';

if(userEmail){
    console.log('email');
} else {
    console.log('no email');
}

//falsy value
    // false, 0 , -0, bigInt, On, "", null, undefined, NaN

//truthy value
    // "0", 'false', " ", [], {}, function() {}

if(Object) {
    console.log(`Array is empty`);
}

// nullish coalescing operator (??): null undefined

let val1;

// val1 = 5 ?? 10; //5
// val1 = undefined ?? 10;  //10
val1 = null ?? 10; // 10
console.log(val1);

// terinary operator

condition ? true : false;