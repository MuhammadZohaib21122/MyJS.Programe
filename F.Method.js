// // function 
// function plus(x , y) {
//     sum = x+y;
//     return sum;
// }
// let add =plus(2,6)
// console.log(add);

// Arrow function
const arrow = (a, b)=> {
    console.log("Multiply is = ",a * b)
}
arrow(2,10);

//Higher order function 

function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);
