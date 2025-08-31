function createElement(tag, options = {}) {
    const el = document.createElement(tag);

    if (options.className) el.classList.add(options.className);
    if (options.id) el.id = options.id;
    if (options.html) el.innerHTML = options.html;
    if (options.text) el.textContent = options.text;

    return el;
}

const divApp = document.getElementById('app');
const boxCounter = createElement('div', { className: "box-counter" });
const titleBox = createElement('h1', { text: "Counter App" });
const counterDisplay = createElement('div', { className: "counter-display", text: "0" });
const divButton = createElement('div', { className: "buttons" });

const decrementButton = createElement('button', { id: "decrement", html: "<span>-</span>" });
const resetButton = createElement('button', { id: "reset", html: "<span>Reset</span>" });
const incrementButton = createElement('button', { id: "increment", html: "<span>+</span>" });


//--- APPEND ---
divApp.appendChild(boxCounter); 
boxCounter.appendChild(titleBox); 
boxCounter.appendChild(counterDisplay);
boxCounter.appendChild(divButton);
divButton.appendChild(decrementButton);
divButton.appendChild(resetButton);
divButton.appendChild(incrementButton);


//--- FUNZIONE ---

let counterValue = 0;

function updateDisplay() {
    counterDisplay.textContent = counterValue;
}

// --- EVENT DELEGATION ---
divButton.addEventListener('click', (event) => {
    const target = event.target.closest("button"); 
    if (!target) return; // click fuori da un bottone

    switch (target.id) {
        case "increment":
            counterValue++;
            break;
        case "decrement":
            counterValue--;
            break;
        case "reset":
            counterValue = 0;
            break;
    }
    updateDisplay();
});