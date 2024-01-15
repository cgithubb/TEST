// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log('DB CONNECTED');    // Named IIFE
})();

// ()    /*definition*/ ()    /*execution*/

// sometimes it created problem with global scope.. to reduce that IIFE is used

( (name) => {
    console.log(`credited ${name}`);    // unnamed IIFE
})('gnane');