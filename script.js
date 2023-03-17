const progressCircular = document.querySelector('.progress-circular') 
const enterButton = document.querySelector('button')
const input = document.querySelector('input')
const value = document.querySelector('.value')
let start = 0

enterButton.addEventListener('click', Bar)
function Bar() {
   const progress = setInterval( () => {
    if( start < input.value) {
       start++
       console.log('increse start ' + start)
       progressEnd()
    }else{
      start--
      console.log('decrease start ' + start)
      progressEnd()
    }
      function progressEnd(){
          value.textContent= `${start}%`;
          progressCircular.style.background = `conic-gradient(#880bea ${start * 3.6}deg, #ededed 0deg)`
          if(start == input.value) {
              clearInterval(progress)
              input.value = ''
           }
       }
      
    } )
}