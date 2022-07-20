let elBox = document.querySelector('.box')
let elRed = document.querySelector('.red')
let elYellow = document.querySelector('.yellow')
let elGreen= document.querySelector('.green')
let elNum = 2

  const red = setInterval((a) =>{
    elRed.style.backgroundColor = 'red'
    setTimeout(() => {
      // clearInterval(red)
      elRed.style.backgroundColor = 'white'
    
    },2000);
  }, 6000)

setTimeout(() => {
  const yellow = setInterval((a) =>{
    elYellow.style.backgroundColor = 'yellow'
    setTimeout(() => {
      // clearInterval(red)
      elYellow.style.backgroundColor = 'white'
    
    },2000);

    // setTimeout(() => {
    //   let interval = setInterval(() => {
    //     // clearInterval(red)
    //     elYellow.textContent = elNum--
      
    //   },1000);
    //   setTimeout(() => {
    //     clearInterval(interval)
    //   }, elNum * 1000);
    // }, 0);
  }, 6000)
}, 2000);

setTimeout(() => {
  const green = setInterval((a) =>{
    elGreen.style.backgroundColor = 'green'
    setTimeout(() => {
      // clearInterval(red)
      elGreen.style.backgroundColor = 'white'
    
    },2000);
   
  }, 6000)
}, 4000);






// const yellow = setInterval(() =>{
  
// }, 6000)



// const green = setInterval(() =>{
//   elGreen.style.backgroundColor = 'green'
  

// }, 5000)

// setInterval(() => {
//   changeFun()
// }, 1000);

// function changeFun (){
//   elRed.setAttribute('class' , 'red1 , red')
// }

// setInterval(() => {
//   changeFun2()
// }, 3000);

// function changeFun2 (){
//   elYellow.setAttribute('class' , 'yellow1 , yellow')
// }


// setInterval(() => {
//   changeFun3()
// }, 5000);

// function changeFun3 (){
//   elGreen.setAttribute('class' , 'green1 , green')
// }


// elYellow.style.backgroundColor = 'yellow'
//   setInterval(() => {
//     elYellow.style.backgroundColor = 'white'
    
//   },2000 );

//   setInterval(() => {
//     // clearInterval(green)
//     elGreen.style.backgroundColor = 'white'
  
//   },7000);
