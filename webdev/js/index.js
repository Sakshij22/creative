// let firstName = 'Lionel';
// let anotherName = firstName;
// console.log(anotherName);


// let firstName = 'leonel';
// let lastName = 'messi';
// let anotherName = firstName + lastName;
// console.log(anotherName);


// let firstName = 'leonel';
// let lastName = 'messi';
// // let space = ' ';
// let anotherName = firstName + ' ' + lastName;
// console.log(anotherName);




// for(let i=0;i<5;i++){
//       setTimeout(()=>{
//       console.log(i);
                
//             },1000*i)
//                 }

// function callBack(a){
//     console.log('hello');
//     setTimeout(()=>{
//         a()
//     },2000)
    
// }
// callBack(function outer(){

// })


// function step1(fn){
//     setTimeout(()=>{
//        console.log('select');
//        fn() 

//     },5000)
// }

// function step2(fn){
//     setTimeout(()=>{
//        console.log('filtered');
//        fn() 

//     },4000)
// }


// function step3(fn){
//     setTimeout(()=>{
//        console.log('caption');
//        fn() 

//     },3000)
// }


// function step4(fn){
//     setTimeout(()=>{
//        console.log('post');
//        fn() 

//     },2000)
// }


// step1(function(){
//     step2(function(){
//         step3(function(){
//             step4(function(){

//             })
//         })
//     })
// })

//promises


// let promise =  new Promise((res,rej)=>{
//     let a=false
//     if(a){
//         res()
//     }
//     else{
//         rej()
//     }
// })
// console.log(promise);



// let p = new Promise((res,rej)=>{
//     rej()
// })
// p.then(()=>{
//     console.log('hy');
    
// }).catch(()=>{
//     console.log('hello');
    
// })


// function step1(){
//     return new Promise
// }



 
let marks = 76;
let att = 65;
let grade = "";

if (marks >= 90) {
    grade = "A+";
} else if (marks >= 80 && marks < 90) {
    grade = "A";
} else if (marks >= 70 && marks < 80) {
    grade = "B";
} else if (marks >= 60 && marks < 70) {
    grade = "C";
} else {
    grade = "D";
}


if (att < 60) {
    if (grade === "A+") grade = "A";
    else if (grade === "A") grade = "B";
    else if (grade === "B") grade = "C";
    else if (grade === "C") grade = "D";
    else grade = "Fail";
}

console.log("Final Grade:", grade);











