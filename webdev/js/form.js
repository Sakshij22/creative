let form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(form[0].value,"hheheh");
    console.log(form[1].value,"heheh");
    let data = {
        Name:form[0].value,
        LastName:form[1].value,
        
       
    }
    
    localStorage.setItem('user', JSON.stringify(data))
    let userData = localStorage.getItem('user')

    console.log(userData,"usese");      //form2
    console.log(JSON.parse(userData),"usese");  //form2
    
})