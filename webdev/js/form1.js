let form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(form[0].value,"hheheh");
    console.log(form[1].value,"heheh");
    let data = {
        Name:form[0].value,
        Email:form[1].value,
        passWord:form[2].value
       
       
    }
    
    localStorage.setItem('user', JSON.stringify(data))
    let userData = localStorage.getItem('user')

    console.log(userData,"usese");      
    console.log(JSON.parse(userData),"usese");  
    
})

let LoginForm = document.querySelector('#one')

LoginForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    let userData = localStorage.getItem('user') 
    let parsData=JSON.parse(userData)
    console.log(LoginForm[0].value);
    
    if(LoginForm[0].value==parsData.email && LoginForm[1].value==parsData.passWord){
        alert('evrything is fine')
    }
    else{
        alert('not good')
    }
    
})


