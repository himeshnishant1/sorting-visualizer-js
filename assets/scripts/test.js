const arr = Array.from({length: 120}, () => Math.floor(Math.random() * 200));

const display = document.querySelector(".display");
const pillars = display.children;

let max = arr[0];
arr.forEach(el => {
    max = Math.max(max, el);
});

async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

// async function testSleep() {
//     for(let i = 0; i < pillars.length; i++){
//         //console.log(arr);
//         pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
//     }
//     await sleep(5000);
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length - i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//             for(let i = 0; i < pillars.length; i++){
//                 //console.log(arr);
//                 pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
//             }
//             await sleep(20);
//         }
//     }
// }

// async function merge(arr, l, m, r)
// {
//     var n1 = m - l + 1;
//     var n2 = r - m;
//     var L = new Array(n1);
//     var R = new Array(n2);
//     for (var i = 0; i < n1; i++)
//         L[i] = arr[l + i];
//     for (var j = 0; j < n2; j++)
//         R[j] = arr[m + 1 + j];
//     var i = 0;
//     var j = 0;
//     var k = l;
 
//     while (i < n1 && j < n2) {
//         if (L[i] <= R[j]) {
//             arr[k] = L[i];
//             i++;
//         }
//         else {
//             arr[k] = R[j];
//             j++;
//         }
//         k++;
//         for(let i = 0; i < pillars.length; i++){
//             //console.log(arr);
//             pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
//         }
//         await sleep(100);
//     }
//     while (i < n1) {
//         arr[k] = L[i];
//         i++;
//         k++;
//         for(let i = 0; i < pillars.length; i++){
//             //console.log(arr);
//             pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
//         }
//         await sleep(100);
//     }

//     while (j < n2) {
//         arr[k] = R[j];
//         j++;
//         k++;
//         for(let i = 0; i < pillars.length; i++){
//             //console.log(arr);
//             pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
//         }
//         await sleep(100);
//     }
// }
// async function mergeSort(arr,l, r){
//     if(l>=r){
//         return;
//     }
//     var m =l+ parseInt((r-l)/2);
//     await mergeSort(arr,l,m);
//     await mergeSort(arr,m+1,r);
//     await merge(arr,l,m,r);
//     for(let i = 0; i < pillars.length; i++){
//         //console.log(arr);
//         pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
//     }
//     await sleep(50);
// }

// // for(let i = 0; i < pillars.length; i++){
// //     //console.log(arr);
// //     pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
// // }
// // await sleep(5000);
// // for(let i = 0; i < arr.length; i++){
// //     let min_loc = i;
// //     for(let j = i + 1; j < arr.length; j++){
// //         if(arr[min_loc] > arr[j])   min_loc = j;
// //     }
// //     const temp = arr[min_loc];
// //     arr[min_loc] = arr[i];
// //     arr[i] = temp;
// //     for(let i = 0; i < pillars.length; i++){
// //         //console.log(arr);
// //         pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
// //     }
// //     await sleep(100);
// // }

// async function testSleep(){
//     for(let i = 0; i < pillars.length; i++){
//         //console.log(arr);
//         pillars[i].style.height = `${Math.floor((arr[i] * 100) / max)}%`;
//     }
//     await sleep(5000);
//     mergeSort(arr, 0, arr.length - 1);
// }


// testSleep();

console.log(max);
console.log(arr);