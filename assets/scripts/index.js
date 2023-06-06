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

    const algoSelector = document.querySelector(".choose-algo");
    
    if(algoSelector.value === "bubble") BubbleSort(pillars);
    if(algoSelector.value === "insertion")  InsertionSort(pillars);
    if(algoSelector.value === "merge")  triggerMergeSort(pillars);
    if(algoSelector.value === "selection")  selectionSort(pillars);
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

/* Insertion Sort Technique */
async function InsertionSort(pillars){
    let max = arr[0];
    arr.forEach(el => {
        max = Math.max(max, el);
    });

    for(let i = 0; i < pillars.length; i++){
        pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
    }
    await sleep(5000); 

    let i, key, j; 
    for (i = 1; i < arr.length; i++)
    { 
        key = arr[i]; 
        j = i - 1;
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 

            for(let i = 0; i < pillars.length; i++){
                pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
            }
            await sleep(1);
        } 
        arr[j + 1] = key; 
    } 
}

/* Merge Sort Technique*/
async function merge(l, m, r, pillars,max)
{
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    var i = 0;
    var j = 0;
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
        for(let i = 0; i < pillars.length; i++){
            pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
        }
        await sleep(100);
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
        for(let i = 0; i < pillars.length; i++){
            pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
        }
        await sleep(100);
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
        for(let i = 0; i < pillars.length; i++){
            pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
        }
        await sleep(100);
    }
}

async function mergeSort(l, r, pillars,max){
    if(l>=r){
        return;
    }
    var m = l + parseInt((r-l)/2);
    await mergeSort(l,m,pillars,max);
    await mergeSort(m+1,r,pillars,max);
    await merge(l,m,r,pillars,max);
    for(let i = 0; i < pillars.length; i++){
        pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
    }
    await sleep(50);
}

async function triggerMergeSort(pillars){
    let max = arr[0];
    arr.forEach(el => {
        max = Math.max(max, el);
    });

    for(let i = 0; i < pillars.length; i++){
        pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
    }
    await sleep(5000);
    mergeSort(0, arr.length - 1, pillars, max);
}

/* Selection Sort Technique */
async function selectionSort(pillars) 
{
    let max = arr[0];
    arr.forEach(el => {
        max = Math.max(max, el);
    });

    for(let i = 0; i < pillars.length; i++){
        pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
    }
    await sleep(5000);

    for(let i = 0; i < arr.length; i++){
        let min_loc = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[min_loc] > arr[j])   min_loc = j;
        }
        const temp = arr[min_loc];
        arr[min_loc] = arr[i];
        arr[i] = temp;
        for(let i = 0; i < pillars.length; i++){
            pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
        }
        await sleep(100);
    }
} 