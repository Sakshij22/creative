//Api


let apiLink='https://dummyjson.com/recipes'
let data= fetch(apiLink)
    // console.log(data,'kyaaa');

data.then((res)=>{
    // console.log(res,'buirfh');
    return res.json()
}).then((d)=>{
    // console.log(d.recipes[0].name,'kyaa');
    let filterData= d.recipes.filter((apiData)=>{
    //    console.log(apiData);
       
        return apiData.cuisine=='Indian'
        
    })
    console.log(filterData,"kya hai ham");
    
})


let data= document.getElementsByClassName('two')

for(let i of data){
    i.style.color='red'
}