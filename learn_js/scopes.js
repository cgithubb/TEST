{
    // scope
}

if(true){
    let a = 30;
    var b = 40;
}

// console.log(a); //undefined
// console.log(b); // 40

// var has global scope 
// let has block scope


// ------ scope 2 -----

function one() {
    let a = 40;
    console.log(a);
    // console.log(m);
    function two() {
        let m =30;
        console.log(b);
        console.log(m);
    }
    two();
}

// one();

// what are expressions?


