// // Print only even number 0 t0 100

// for (let num = 0; num <=100; num++) {
    
//     if (num % 2 === 0) {
//         console.log("num = ",num);
//     }else{

//     }
    
// }

// // Print only odd number 0 t0 100

// for (let n = 0; n <=100; n++) {
    
//     if (n % 2 !== 0) {
//         console.log("num = ",n);
//     }else{

//     }
    
// }


  //   Q2 : Guess the right number

// let gameNum = 28; 

// let guessNum = prompt("Guess the right number :::")

// while (guessNum != gameNum) {
//     guessNum = prompt("Your number is not correct. Please tryagain ....")
// }
// console.log(gameNum,  "Congratulation , You enter right number ''''''....");

// // Q3 Lecture 3  

// let fullName = prompt("Enter your fullname ...");
// let userName = "@"+fullName+fullName.length;
// console.log(userName);


// Q4 Student grades

// let score = prompt("Enter your final exam number ...");

// while (score>100  || score === "") {
//     score = prompt("Your number is invalid,Please enter number between 0 to 100...");
// }
// //                                        score === "" its mean empty or null
// if (score >= 80 && score <= 100) {
//     console.log("Your grade is  A ");
// } else if (score >= 70 && score <=89) {
//     console.log("Your grade is B ");
// } else if (score >= 60 && score <=69) {
//     console.log("Your grade is C ");
// } else if (score >= 50 && score <=59) {
//     console.log("Your grade is D ");
// } else if (score >= 0  && score <= 49){
//     console.log("Your grade is F ");
// }

// Q5 Average marks 

// let marks =[85,97,44,37,76,60];
// // normal sum method
// //let markss =marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5];
// //markss = markss/marks.length;

// let sum = 0;
// for (const num of marks) {
//     sum += num;
// }
// sum = sum / marks.length;
// console.log(`${marks} Marks average is = ${sum}`);

// // Q5 change array 10% off offer apply in itemP array 

// let itemP =[250,645,300,900,50];
// // let i =0;
// // for (const val of itemP) {
// //     let offer = val / 10;
// //     itemP[i] = itemP[i] - offer                                 // through for-of  loop
// //     i++;
// // }
// // console.log("Apply 10% off offer the final price is  = ",itemP);

// for (let i = 0; i < itemP.length; i++) {
//     const offer = itemP[i] / 10;
//     itemP[i] -=offer;
// }
// console.log(itemP);

// Q 6 - 
let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("orignal = " , companies);
companies.shift();
console.log("shift = " , companies);
companies.splice(1,1,"Ola");
console.log("ola = " + companies);
companies.push("Amazon")
console.log(companies);

