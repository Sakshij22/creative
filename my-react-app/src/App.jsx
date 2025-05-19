// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// import React,{useState} from 'react'
//  const App = ()=>{
//   let[input,SetInput]=useState({
//     name:'',
//     email:'',
//     passWord:'' 
//   })
 

// function fun1(e){
//   // console.log(e.target,"hehe");
//   let{name,value}=e.target
//   // console.log(name,value,"hee");
//   SetInput({...input,[name]:value})
//   console.log(input,"hello");
//   // SetInput(e.target.value)
  
// }

//   return(
//     <div>
    
//       <input type='text' name='name' value={input.name}   onChange={fun1} placeholder='Enter your name'/>
//       <br/>
//       <br/>
//       <input type='text' name='email' value={input.email}   onChange={fun1} placeholder='Enter your email'/>
//       <br/>
//       <br/>
//       <input type='text' name='passWord' value={input.passWord}   onChange={fun1} placeholder='Enter your passWord'/>
//       <br/>
//       <br/>
//       <button>submit</button>
//     </div>
//     )
//   }

//   export default App
  



// import React,{useState} from 'react'
//  const App = ()=>{
//   let[input,SetInput]=useState({
//     name:'',
//     email:'',
//     passWord:'' 
//   })
//   return(
//         <div>
        
//           <input type='text' name='name' value={input.name}   onChange={fun1} placeholder='Enter your name'/>
//           <br/>
//           <br/>
//           <input type='text' name='email' value={input.email}   onChange={fun1} placeholder='Enter your email'/>
//           <br/>
//           <br/>
//           <input type='text' name='passWord' value={input.passWord}   onChange={fun1} placeholder='Enter your passWord'/>
//           <br/>
//           <br/>
//           <button>submit</button>
//         </div>
//         )
//       }

//       export default App

// import React, {useState, useEffect } from 'react'

// const App=()=>{

// useEffect(()=>{
//   fetch('https://dummy.json.com/recipes').then((res)=>{
//     return res.json()

//   }).then((data)=>{
//     console.log(data);
    
//   })

// },[count])

// return (
//   <div>
//       <h2>{city}</h2>
//       <button onClick={()=>SetCity('bhopal')}>city</button>
//       <button onClick={()=>{SetCount(count+1)}}>click:{count}</button>
//   </div>
// )

// }




// import React,{useState,useEffect} from 'react'
// import './App.css'
// const App= ()=>{

//   let [apiData,SetApi]=useState([])
//   useEffect(()=>{
//       fetch('https://dummyjson.com/recipes')
//          .then((res)=>{
//          return res.json()
    
//        }).then((data)=>{
//         console.log(data.recipes);
//         SetApi(data.recipes);
        
//        })
//        .catch((error) => console.error("Error fetching data:", error));
//       },[])

//       const deleteCard = (index) => {
//         SetApi(apiData.filter((_, i) => i !== index));
//       };
    

// return(
//     <div id='card'>
//       {apiData.map((val,index)=>{
//         return(
//           <div className='card-item' onClick={() => deleteCard(index)}>
//           <img src={val.image} alt={val.name}/>
//           <p>{val.name}</p>
//           </div>
//         )
//       })}
      
//       </div>
//     );

// }
// export default App



// import React from 'react'
// import Home from './Home'

// const App = ({main}) => {
//   return (
//     <div>
//       <Home data={user} main={main}/>
//     </div>
//   )
// }

// export default App



// import React, {useReducer,useState} from 'react'

// const App = () => {
//   function reducer(count,action){
//     if(action.type==='incre'){
//       return count+1
//     }
//     else if(action,type='d'){
//       return count-1
//     }
//     else if(action,type==='r'){
//       return 0
//     }
//   }
//   let [count,dispatch]=useReducer(reducer,0)
//   function fun1(){
//     dispatch({
//       type:'incre'
//     })
//   }
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={fun1}>Incre:</button>
//       <button onClick={()=>dispatch({type:'d'})}>0:</button>
//       <button onClick={()=>dispatch({type:'r'})}>reset:</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Home'
// import {Route,Routes} from 'react-router-dom'
// import About from './About'
// import SignUp from './SignUp'

// const App = () => {
//   return (
    
//      <div>
//       <Home/>
//       <Routes>

//         <Route path='/' element={<About/>}/>
//         <Route path='/signup' element={<SignUp/>}/>
       
//       </Routes>
//      </div>
    
//   )
// }

// export default App





// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <input type=''></input>
//     </div>
//   )
// }

// export default App




// import React, {useReducer,useState} from 'react'

//  const App = () => {
//      function reducer(count,action){
//      if(action.type==='count'){
//      return count+1;
//      }

//    }
//    const [count, dispatch] = useReducer(reducer, 0);
//    const [inputValue, setInputValue] = useState("");
 
//    function incrementCount() {
//      dispatch({ type: "increment" });
//   }
//     return (
//     <div>
     
//       {/* /* <button onClick={incrementCount}>Increment</button> */ */}

//       <br /><br />

//       <input type="number" placeholder="Enter a number" onChange={(e) => setInputValue(e.target.value)}/>
//       <button onClick={d}>click</button>
    
//     </div>
//   )
// }

// export default App






// import React, {useState} from 'react'

// const App = () => {
      
//   return (
//     <div>
      
//       <input type="text" placeholder="Enter your todo" value={input} onChange={(e)= setInput(e.target.value)}/>
//       <button onClick={addTodo}>Add</button>
//       <button onClick={}>delete</button>
//       <button onClick={}>edit</button>
      
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//             {todo.text}
           
//           </li>
//         ))}
//     </ul>
//     </div>
//   )
// }

// export default App





// import { useState } from "react";

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addTodo = () => {
//     if (!input.trim()) return;
//     setTodos([...todos, input]);
//     setInput("");
//   };

//   return (
//     <div>
//       <h2>todo list</h2>
//       <input value={input} onChange={(e) => setInput(e.target.value)} />
//       <button onClick={addTodo}>edit</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;


// import React from 'react'
// import Home from './Home'


// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App


// import React, {useState, useEffect } from 'react'

// const App=()=>{

// useEffect(()=>{
//   fetch('https://dummy.json.com/recipes').then((res)=>{
//     return res.json()

//   }).then((data)=>{
//     console.log(data);
    
//   })



// import React, { useState, useEffect } from "react";

// const RecipeSearch = () =>{
//   const [recipes, setRecipes] = useState([]);
//   const [searchItem, setSearchItem] =useState("");

//   useEffect(()=>{
//     fetch("https://dummyjson.com/recipes")
//     .then((res)=> res.json())
//     .then((data)=>setRecipes(data.recipes))
//     .catch((error)=>console.error("Error",error));
//   },[]);
//   const
// }


// import React,{useState} from 'react'
//  const App = ()=>{
//   let[input,SetInput]=useState({
//     name:'',
//     email:'',
//     passWord:'' 
//   })
//   / function fun1(e){
//       // console.log(e.target,"hehe");
//       let{name,value}=e.target
//       // console.log(name,value,"hee");
//       SetInput({...input,[name]:value})
//       console.log(input,"hello");
//       // SetInput(e.target.value)
      
//     }
//   return(
//         <div>
        
//           <input type='text' name='name' value={input.name}   onChange={fun1} placeholder='Enter your name'/>
//           <br/>
//           <br/>
//           <input type='text' name='email' value={input.email}   onChange={fun1} placeholder='Enter your email'/>
//           <br/>
//           <br/>
//           <input type='text' name='passWord' value={input.passWord}   onChange={fun1} placeholder='Enter your passWord'/>
//           <br/>
//           <br/>
//           <button>submit</button>
//         </div>
//         )
//       }

//       export default App



// import React,{useState}from 'react'
// let[input,SetInput]=useState({
//         name:'',
//         email:'',
//         passWord:'' 
//    })
      
//     const App = () => {
//     return (
//           <div ><input type='text' name='name' value={input.name}   onChange={fun1} placeholder='Enter your name'/>
//           <br/>
//           <br/>
//           <input type='text' name='email' value={input.email}   onChange={fun1} placeholder='Enter your email'/>
//           <br/>
//           <br/>
//           <input type='text' name='passWord' value={input.passWord}   onChange={fun1} placeholder='Enter your passWord'/>
//           <br/>
//           <br/>
//           <button>submit</button></div>
//         )

//       }
      
//       export default App


// // import React,{useState}from 'react'

// // const App = () => {
// //   let [color,setColor]= useState{'res'}
// //   function fun1(){
// //     console.log('hiiii');
// //     setColor('green')
    
// //   }
// //   return (
// //     <div></div>
// //   )
// // }

// // export default App
// import React, {useReducer,useState} from 'react'

// const App = () => {
//   function reducer(count,action){
//     if(action.type==='incre'){
//       return count+1
//     }
//     else if(action,type='d'){
//       return count-1
//     }
//     else if(action,type==='r'){
//       return 0
//     }
//   }
//   let [count,dispatch]=useReducer(reducer,0)
//   function fun1(){
//     dispatch({
//       type:'incre'
//     })
//   }
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={fun1}>Incre:</button>
//       <button onClick={()=>dispatch({type:'d'})}>0:</button>
//       <button onClick={()=>dispatch({type:'r'})}>reset:</button>
//     </div>
//   )
// }
 
// export default App

// import React,{useReducer,useState} from 'react'

// const App = () => {
//   function reducer(count,action){
//      if(action.type==='increment'){
//       return count+1
//     }
//      else if(action,type='d'){
//             return count-1
//        }
//      else if(action,type==='r'){
//         return 0
//      }
// }
// let [count,dispatch]=useReducer(reducer,0)
// let [input,SetInput]=useState('')
// function fun1(){
//       dispatch({
//         type:'incre'

//       })
//     }

//   return (
//     <div>
//       <h2>{count}</h2>
      
//       <button onClick={fun1}>++</button>
//       <button onClick={fun1}>--</button>
//       <input onChange={(e)=>SetInput(e.target.value)}/>
//       <h3>{input.length}</h3>
//       <p>{'⭕'.repeat(input.length)}</p>

//     </div>
//   )
// }

// export default App


// import React, {useState} from 'react'

// const App = () => {
//   let [time,setTime]= useState(' ')
//   setIngterval(()=>{
//       let t= new Date().toLocateTimeString()
//       setTime(t)
//   })
//   return (
//     <div style={{textAlign:"center",marginTop:"180px"}}>
//       <h2>{time}</h2>
//       <button>stop</button>
//     </div>
//   )
// }

// export default App


import React,{useState} from 'react'

const App = () => {
let [input,setInput]= useState('')

  useEffect(()=>{
      fetch('https://dummyjson.com/products/search?q=${input}').then((res)=>{
        return res.json()
    
      }).then((data)=>{
        console.log(data);
        
      })
    
    })
  setProducts(data);

  return (
    <div>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={searchProducts}>search</button>
    </div>
  )
}

export default App