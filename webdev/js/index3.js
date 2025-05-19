// function fun1(){
//     console.log('hello');
    
// }

// let btn = document.querySelector('#one')

// btn.onclick = function(){
//         console.log('hyeeee');
        
// }

// let btn1 = document.querySelector('#two')
// let body = document.querySelector('body')
// let h1 = document.querySelector('h1')
// btn1.addEventListener('click',()=>{
//     // console.log('goo');

//     body.style.backgroundColor ='yellow'
//     console.log('hhheee');
//     h1.innerText = 'hello'
//     // alert('hello')
    
// })




let btn = document.querySelector('button')
let body = document.querySelector('body')


  let isBool = false 

btn.addEventListener('click',()=>{
   
   
   if(isBool){
    body.style.backgroundColor='blue'
    isBool=false
   }
   else{
    body.style.backgroundColor= 'red'
    isBool= true
   }
    
})


// inp.addEventListener('input',(e)=>{
//     console.log(e.target.value,"kyaaaaaa");
//     h2.innerText = e.target.value

    
// })