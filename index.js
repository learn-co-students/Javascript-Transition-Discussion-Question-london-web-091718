
let button = document.querySelector('#save_lincoln')
const func = function() {
let zombiePic = document.querySelector("#foreground")
let text_area = document.querySelector('#interval')
text_value=text_area.value

i=100

setInterval(function(){
  if(i>0) {
    zombiePic.style.opacity = i/100
    console.log(zombiePic.style.opacity)
    i--
  }
},text_value/100)

text_area.addEventListener("inout",()=> {
  console.log(text_area.value)
  text_value = text_area.value
})}
// clear interval  - assign to variable

button.addEventListener('click', func)
