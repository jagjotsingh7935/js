function updateClock(){
    const clockElement = document.getElementById('clock');
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();



    const time = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent=  time;
    
    
}

updateClock();

setInterval(updateClock,1000);