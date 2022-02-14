let increment = document.querySelector("#increment");
let reset = document.querySelector("#reset");
let decrement = document.querySelector("#decrement");

let counter = 0;

increment.addEventListener("click" , ()=>{
    counter++;
    counterValue.innerText = counter;
});
reset.addEventListener("click" , ()=>{
    counterValue.innerText = 0;
})
decrement.addEventListener("click" , ()=>{
    counter--;
    counterValue.innerText = counter;
});