let canvas = document.querySelector('canvas');
let btn = document.querySelector('button');


  let pen = canvas.getContext('2d')
  let cell=50
  let snakeCells=[[0,0]]
  let direction='right'
  let gameOver=false
  let randomCell = generateRandomCell()

  document.addEventListener('keydown',(e)=>{

    if(e.key==='ArrowUp'){
        direction='up'
    }
    else if(e.key==='ArrowDown'){
        direction='down'
    }
    else if(e.key==='ArrowLeft'){
        direction='left'
    }
    else{
        direction='right'
    }
})

let id=setInterval(()=>{
    shapeCreate()
    update()
  },200)
  btn.addEventListener('click',()=>{
    clearInterval(id)
  })


  function shapeCreate(){
    if(gameOver){
        clearInterval(id)
        pen.fillStyle = 'red';
        pen.font='40px sans-serif';
        pen.fillText('Game over',50,150);
        return
    }
    pen.clearRect(0,0,600,600)
    for(let i of snakeCells){
        pen.fillStyle='yellow'
        pen.fillRect(i[0],i[1],cell,cell)
    }
    pen.fillStyle='green'
    pen.fillRect(randomCell[0],randomCell[1],cell,cell)

  }

  function update(){
    let headX = snakeCells[snakeCells.length-1][0]
    let headY = snakeCells[snakeCells.length-1][1]

    let newX 
    let newY 
   
    if(direction==='right'){
        newX=headX+cell
        newY=headY

        if(newX===1000 || checkMate(newX,newY)){
            gameOver=true
        }

    }
    else if(direction=='left'){
        newX=headX-cell
        newY=headY

        if(newX<0 || checkMate(newX,newY)){
            gameOver=true
        }

    }
    else if(direction=='up'){
        newX=headX
        newY=headY-cell

        if(newY<0 || checkMate(newX,newY)){
            gameOver=true
        }

    }
    else{
        newX=headX
        newY=headY+cell
        if(newY===600 || checkMate(newX,newY)){
            
            gameOver=true
        }
    }
    if(newX===randomCell[0] && newY===randomCell[1]){
        randomCell=generateRandomCell()
       }
       else{
            snakeCells.shift()

       }

       snakeCells.push([newX,newY])
  
     }


   function generateRandomCell() {
return [
  Math.round((Math.random()*(1000 - cell))/cell)*cell,
  Math.round((Math.random()*(600 - cell))/cell)*cell
]
}
//khud ko katna achhi bat hai
function checkMate(newHeadX,newHeadY){
    
    for(let item of snakeCells){
        console.log(item,newHeadX,newHeadY);
        if(item[0]=== newHeadX && item[1]=== newHeadY){
            return true;
        }        
    }
    return false;
}

console.log(generateRandomCell(),"heheheh");

