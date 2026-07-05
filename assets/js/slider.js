/*======================================================

SLIDER

======================================================*/

class Slider{

constructor(){

this.slides=document.querySelectorAll(".slide");

this.dots=document.querySelectorAll(".dot");

this.prev=document.querySelector(".prev");

this.next=document.querySelector(".next");

this.current=0;

if(!this.slides.length) return;

this.init();

}

init(){

this.show(0);

this.auto();

this.events();

}

show(index){

this.slides.forEach(slide=>slide.classList.remove("active"));

this.dots.forEach(dot=>dot.classList.remove("active"));

this.slides[index].classList.add("active");

this.dots[index].classList.add("active");

this.current=index;

}

nextSlide(){

let index=this.current+1;

if(index>=this.slides.length){

index=0;

}

this.show(index);

}

prevSlide(){

let index=this.current-1;

if(index<0){

index=this.slides.length-1;

}

this.show(index);

}

auto(){

setInterval(()=>{

this.nextSlide();

},5000);

}

events(){

this.next.onclick=()=>this.nextSlide();

this.prev.onclick=()=>this.prevSlide();

this.dots.forEach((dot,index)=>{

dot.onclick=()=>{

this.show(index);

};

});

}

}

document.addEventListener("DOMContentLoaded",()=>{

new Slider();

});