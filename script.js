let decrement = document.getElementById("decrement");
let increment = document.getElementById("increment");
let reset = document.getElementById("reset");
let counter = document.getElementById("counter");

let count = 0;

decrement.addEventListener("click", function() {
    count--;
    counter.innerText = count;
});

increment.addEventListener("click", function(){
    count++;
    counter.innerText = count;
});

reset.addEventListener("click", function(){
    count = 0;
    counter.innerText = count;
});




