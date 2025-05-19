let inp = document.querySelector('input')
let button = document.querySelectorAll('button')

for(let btn of button)
    btn.addEventListener('click',()=>{
        console.log('hahaha');
        
        let text = btn.innerText
        console.log(text,"kyaa");
        if(text=='C'){
            inp.value=''
        }
        else if(text==='='){
            inp.value=eval(inp.value)
        }
        else(
            inp.value+=text
        )
        
    })