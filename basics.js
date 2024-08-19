// let a = 6;
// let b = 10;


// // let  num = 10;
// // num++;                             //Increment n + 1
// // console.log(num);

// // num--;                             // Decrement   n - 1
// // console.log(num);

// a += 4;                         //Asignment oprators  a = a + 4
// console.log("a += 4 is", a);

// a -= 4;                         //Asignment oprators  a = a - 4
// console.log("a -= 4 is", a);

// a *= 4;                         //Asignment oprators  a = a * 4
// console.log("a *= 4 is", a);

// a %= 4;                         //Asignment oprators  a = a % 4
// console.log("a %= 4 is", a);

// a /= 4;                         //Asignment oprators  a = a / 4
// console.log("a /= 4 is", a);

// a **= 4;                         //Asignment oprators  a = a ** 4
// console.log("a **= 4 is", a);

// //Comparison Oprators          there answer is in boolean type True or false
// console.log("6 == 10", a==b);                  //   a==b 

// console.log("6 != 10", a!=b);                  //   a!=b 

// //if  
// // a = 10  ;
// // b = "10";
// // console.log(a == b);          // there answere is true   but

// // console.log(a === b);       // there answere is false because === they are strictily check a and b value and type
// // console.log(a !== b);

// console.log(a < b);
// console.log(a <= b);
// console.log(a > b);
// console.log(a >= b);

// //Logical Oprators

// a1 = 6;
// b1 = 5;              // And (&&) is used only when all condition is true

// let con1 = a1 > b1;          //true
// let con2 = a1 === 6;         // true

// console.log(con1 && con2);

// console.log(con1 || con2);  // the OR (||) in this when only  one condition is true there answere is true 

// console.log( !(a1 < b1));   // this condition is false but we use  NOT (!) there answere is false there answere is opposite the condition

// let myname = "Zohaib"
// oop=myname.length;                     //string length
// console.log(oop);

// let student = "Mohankomarmishira"

// console.log(student[2])                   //string position  they are start [0],[1],....

//  Template  Literals



// let obj = {
//     item: "Pen",
//     price: 100,
//     stock: "10 Pieces"
// }

// let result = `The cost of ${obj.item} is ${obj.price} and ${obj.stock} is available in the market.`;       // this sign are show (`)
// console.log(result);

// // String Interpolation 

// console.log(`My \t name\tis\t\nMuhammadZohaib`)   // (\t) next tab ,(\n) next line


// // String Methode

//  var myName = "Zohaib";
//  myName = myName.toUpperCase();               // making latter into uppercase 
//  console.log(myName);

//  let student  = ["Ali","Zohaib","Usman","Iltaf","Naseem"]
//  student = student[1].toLowerCase();                           //  making lower case
//  console.log(student);

 let student = "           Muhammad    Zohaib                    ";
 console.log(student.trim());       // remove string  first and last   spaces 

 let str = "HelloWorld";
 console.log(str.slice(2, 8));        //cut string part and print

 let str1 = "Muhammad"
 let str2 = "Zohaib"

 let add12 = str1.concat(str2);     // adding 2 string . this is another same mathod str1 + str2
 console.log(add12);
 

 let nams = "KhanKKKKKKKK"

 console.log(nams.replace("K","Y"));          // replacement of string 

 console.log(nams.charAt(0));         // when we are write index e.g. 0,1,2,.. there string value are show

 console.log(nams.replaceAll("K","Y"));    // they are replace all (K) vaiue into (Y) 


