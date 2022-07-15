let clock = document.getElementById("current-time");

setInterval(() =>{ 
    let timer = new Date();
    clock.innerHTML = timer.toLocaleTimeString();},1000)
   