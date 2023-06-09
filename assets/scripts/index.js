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
    const output = document.querySelector(".output");
    output.classList.add("hide");
    arr.length = 0;
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
    if(algoSelector.value === "quick")  triggerQuickSort(pillars);

});


/* Display Sorted Array */
async function Display(){
    const output = document.querySelector(".output");
    output.classList.remove("hide");
    const outputField = output.children[1];
    outputField.value = arr;
}


const generateButton = document.querySelector(".generate-array-btn");

/* On click Generate array */
generateButton.addEventListener("click", event => {
    const inputSize = document.querySelector(".input-array-size").value;
    if(inputSize < 3)   inputSize = 3;
    if(inputSize > 200)    inputSize = 200;
    arr.length = 0;
    for(let i = 0; i < inputSize; i++)  arr.push(parseInt(Date.now() * Math.random()) % 1000);
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

    await Display();
    
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

    await Display();
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
    await mergeSort(0, arr.length - 1, pillars, max);

    await Display();
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

    await Display();
} 

/* Quick Sort Technique */
async function swap(leftIndex, rightIndex, pillars, max){
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
    for(let count = 0; count < pillars.length; count++){
        pillars[count].style.height = `${Math.floor((arr[count] * 100) / max)}%`;
    }
    await sleep(50); 
}

async function partition(left, right, pillars, max) {
    let pivot   = arr[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            await swap(i, j, pillars); //sawpping two elements
            i++;
            j--;
        }
    }
    await sleep(5);
    return i;
}

async function quickSort(left, right, pillars, max) {
    let index;
    if (arr.length > 1) {
        index = await partition(left, right, pillars); //index returned from partition
        //console.log(index);
        if (left < index - 1) { //more elements on the left side of the pivot
            for(let count = 0; count < pillars.length; count++){
                pillars[count].style.height = `${Math.floor((arr[count] * 100) / max)}%`;
            }
            await sleep(20); 
            await quickSort(left, index - 1, pillars);
            for(let count = 0; count < pillars.length; count++){
                pillars[count].style.height = `${Math.floor((arr[count] * 100) / max)}%`;
            }
            await sleep(20); 
        }
        if (index < right) { //more elements on the right side of the pivot 
            for(let count = 0; count < pillars.length; count++){
                pillars[count].style.height = `${Math.floor((arr[count] * 100) / max)}%`;
            }
            await sleep(20); 
            await quickSort(index, right, pillars);
            for(let count = 0; count < pillars.length; count++){
                pillars[count].style.height = `${Math.floor((arr[count] * 100) / max)}%`;
            }
            await sleep(20); 
        }
    }
}

async function triggerQuickSort(pillars){
    let max = arr[0];
    arr.forEach(el => {
        max = Math.max(max, el);
    });

    for(let i = 0; i < pillars.length; i++){
        pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
    }
    await sleep(5000);
    await quickSort(0, arr.length - 1, pillars, max);

    await Display();
}