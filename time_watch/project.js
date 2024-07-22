const time = document.querySelector("#time")
const date = document.querySelector("#date")

setInterval(function(){
    clock = new Date()
    // console.log(time.toLocaleTimeString());
    time.innerHTML = clock.toLocaleTimeString();
    date.innerHTML = clock.toDateString();
}, 1000 )

