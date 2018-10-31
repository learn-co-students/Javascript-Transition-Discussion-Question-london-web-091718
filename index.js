// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

//
// const zombiePic=document.querySelector("#foreground")
// const text_area = document.querySelector('#interval')
// const text_value=text_area.value
// const button = document.querySelector('#save_lincoln')
//
// const sleeper=function(text_value){
// for (let i=100; i>=0 ;i--){
//
//   zombiePic.style.opacity=i/100
// }
// }
//
//
// button.addEventListener('click', sleeper)
//
// function sleeper(text_value)
//

const zombiePic=document.querySelector("#foreground")
const text_area = document.querySelector('#interval')
let text_value=text_area.value

const button = document.querySelector('#save_lincoln')
i=100

function func(){

    if (i>0){
      zombiePic.style.opacity=i/100
      i--
    }
}


button.addEventListener('click', function(text_value){

  setInterval(func, text_value/100 )
})
