

function clock(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    //calc the 360deg all the hors & minutes & seconds
    let hrValue = (hour * 30 ) + (min * 6) / 12;
    let minValue = min * 6;
    let secValue = sec *6;


    //selector element html
    document.querySelector('.hand-hr').style.transform = `rotate(${hrValue}deg)`;
    document.querySelector('.hand-min').style.transform = `rotate(${minValue}deg)`;
    document.querySelector('.hand-sec').style.transform = `rotate(${secValue}deg)`;
    

}



setInterval(clock,1000);