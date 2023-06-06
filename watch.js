
// Clock Creation
function clock(){
 
const time = new Date();
let hours = time.getHours();  // ghonta dhorte
let minutes = time.getMinutes(); //min ghorte
let second = time.getSeconds();  //sec dhorte
let isAmOrPm = 'AM'

//AM PM er condition first e dite hobe nahole thik moto kaj korbe nah
if(hours > 12){
    isAmOrPm = "PM"
}

//12 hours format 12tar por abar 1 theke suru hobe 
if(hours > 12){
    hours = hours - 12
}
if( hours == 0){
    hours = 12;
}


//sob pasha pashi dekhate 
document.getElementById('watch').innerText = hours + ":" + minutes + ":" + second +" "+ isAmOrPm;

}

// ki dekhabe ar koto shomoi por por dekhabe 
// Ekhne 1000 milisecond = 1sec bujhano hoyeche eta 1 sec por por change hobe
setInterval(clock,1000) 


// Analog Clock

const deg = 6;
const hr = document.querySelector('#hr')
const Mn = document.querySelector('#Mn')
const Sc = document.querySelector('#Sc')

setInterval(() => {
  
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
Mn.style.transform = `rotateZ(${mm}deg)`;
Sc.style.transform = `rotateZ(${ss}deg)`;
});


