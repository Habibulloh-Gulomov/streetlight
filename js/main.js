let elBox = document.querySelector('.box')
let elRed = document.querySelector('.red')
let elYellow = document.querySelector('.yellow')
let elGreen= document.querySelector('.green')


const red = setInterval((a) =>{
  elRed.style.backgroundColor = 'red'
  setTimeout(() => {
    // clearInterval(red)
    elRed.style.backgroundColor = 'white'
  
  },3000);
  a+ 3000
}, 3000)



const yellow = setInterval(() =>{
  elYellow.style.backgroundColor = 'yellow'
  setTimeout(() => {
    elYellow.style.backgroundColor = 'white'
    
  },3000 );
}, 7000)



const green = setInterval(() =>{
  elGreen.style.backgroundColor = 'green'
  setTimeout(() => {
    // clearInterval(green)
    elGreen.style.backgroundColor = 'white'
  
  },3000);
}, 10000)





