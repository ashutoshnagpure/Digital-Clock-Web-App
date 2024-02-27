/**
 * Author:- Ashutosh Nagpure
 * Date:- 2024-02-27
 * Day:- CURRENT_WEEKDAY
 * Topic :- Digital Clock Web App 
 */

let hrs = document.querySelector("#hrs");  //fetching span tags of html inside of clock classes
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");


setInterval(() => {               // set interval function which updated every after its time mention 
let currentTime = new Date();     // its execution is continious 
                                  // here new Date function setter all value of times 
                                  // this works in miliseconds 
hrs.innerHTML = ( currentTime.getHours()<10?"0":"" )+ currentTime.getHours() ;       // here we are creaating inline if function 
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();        // if function is related to setter 0 if 
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds() ;       // there value below 10
},1000);                // <==  updatation of this function per mention of 1000ms .



