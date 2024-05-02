// console.log("hello world")







var hours = document.getElementById("hours")
var min = document.getElementById("minutes")
var seconds = document.getElementById("Seconds")



var updated = setInterval(function()  {
    
    // var dates = new Date()
    // console.log(dates)
    var date = new Date()
   var conversion = hours.innerText = date.getHours() % 12;
    conversion = conversion ? conversion : 12;
    min.innerText = date.getMinutes()
    seconds.innerText = date.getSeconds()
}, 1000);


function stopTime(){
    clearInterval(updated)
}