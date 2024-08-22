// refresh button  function 
function refreshPage() {
    location.reload();
  }
// const student={
//     fullName : "MuhammadZohaib",
//     age : 19,
//     rollNo : 34,
//     samaster : 2,
//     cGPA : 3.21

// }
// console.log(student);

// const myStudent = ["Basett","Ali","Aktar","Joseph","Marssh","Robert","Noman","Lokman"];
// console.log(myStudent[0]);

// const myPictures =["https://drive.google.com/file/d/1QhFEZId-V_0J_NtJVxfbEErAey6TXfQ3/view?usp=sharing",
//     "https://drive.google.com/file/d/1qvf7yAwKG1mvegyOuAF4xi_RcYndEfpn/view?usp=sharing",
// "https://drive.google.com/file/d/1h8b8Fb6EnIW_lapQeTimLlBBIoYzkrf0/view?usp=drive_link",
// "https://drive.google.com/file/d/1SoEvQWpUWfscSBUUgR0-vv7ePflhqb05/view?usp=sharing"
// ];
// console.log(myPictures[1]);



// //arrow function
// let num1 = 3;
// let num2 = 7;
// const sum = (value1, value2) => {
//     return value1 + value2;
// };

// console.log(sum(num1, num2));

//                                Arrays    //

let studentn =["Muhammad Zohaib","Hamza","Ali","Abass","Jalal","Farhan"];

// studentn.push(                  // Array mathod       Push() add new item in end of array
//     "Annus","Kaloo","Jhon"
// )

// let stn = studentn.pop();         // Array mathod        pop()  delete last item in array 
// console.log(studentn);
// console.log(stn);

// let stn1 = studentn.toString();         // Array mathod        toString()  convert all array in string 
// console.log(studentn);
// console.log(stn1);
// for loop 
// for (let i = 0; i < studentn.length; i++) {
//     console.log(studentn[i])
// }

// for of loop 

// for (const st of studentn) {
//     console.log(st.toUpperCase());
// }

// Array method    Concat()  add two or more array 

// let allStudent = myStudent.concat(studentn);
// console.log(allStudent);

// Array method  unshift()    add the stsrt of array 
// let st = studentn.unshift("Nazim");
// console.log(st);

// // Array method    delete first item of array 
// let val = studentn.shift();
// console.log("Deleted item is = ",val);

// // Slice method         in this ending index is not include
// let nStudent = studentn.slice(0,3)
// console.log(nStudent);

// Splice methode      array.splice(index,number of index for delete,new index add)

// studentn.splice(1,2,"Muhaan");
// console.log(studentn);

// Array methods   Map
let array =[32,45,67,87,54,22,53,56,92];
let newarray = array.map((num)=>{
return num*2;
});
console.log(newarray);