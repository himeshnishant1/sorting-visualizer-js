const inputArray = document.querySelector(".array-input"); // Input Array Element
const arr = new Array();

const display = document.querySelector(".display"); // Contains Pillars.

/* Asynchronus Function for Sleep Calls*/
async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

const visualizeButton = document.querySelector(".visualize-sort-btn");

/* On Click Visualization Begins*/
visualizeButton.addEventListener("click", event => {
    const stringArray = inputArray.value.toString().replace(/\s+/, "").split(",");
    stringArray.forEach(value => value.length ? arr.push(parseInt(value)): console.log());
    inputArray.value = arr;
    if(!arr.length)   return;
    const pillar = `<div class="pillar"></div>`;
    display.innerHTML = "";
    for(let i = 0; i < arr.length; i++)   display.innerHTML += pillar;
    const pillars = display.children;

    BubbleSort(pillars);
});


const generateButton = document.querySelector(".generate-array-btn");

/* On click Generate array */
generateButton.addEventListener("click", event => {
    const inputSize = document.querySelector(".input-array-size").value;
    if(inputSize < 3)   inputSize = 3;
    if(inputSize > 200)    inputSize = 200;
    arr.length = 0;
    for(let i = 0; i < inputSize; i++) arr.push(Math.floor(Math.random() * 200));
    inputArray.value = arr;
});


/* Bubble Sort Technique */
async function BubbleSort(pillars) {
    let max = arr[0];
    arr.forEach(el => {
        max = Math.max(max, el);
    });

    for(let i = 0; i < pillars.length; i++){
        pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
    }
    await sleep(5000);

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            for(let i = 0; i < pillars.length; i++){
                pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
            }
            await sleep(0);
        }
    }
}