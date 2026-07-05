/*====================================================

COUNTDOWN

====================================================*/

function startFlashSale(){

const end=new Date();

end.setHours(23,59,59);

function update(){

const now=new Date();

const distance=end-now;

const h=Math.floor(distance/1000/60/60);

const m=Math.floor(distance/1000/60)%60;

const s=Math.floor(distance/1000)%60;

document.querySelector("#hour").textContent=

String(h).padStart(2,"0");

document.querySelector("#minute").textContent=

String(m).padStart(2,"0");

document.querySelector("#second").textContent=

String(s).padStart(2,"0");

}

update();

setInterval(update,1000);

}

document.addEventListener(

"DOMContentLoaded",

startFlashSale

);