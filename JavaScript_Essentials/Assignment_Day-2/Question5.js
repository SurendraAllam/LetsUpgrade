// Print an array in reverse order

let size = prompt("Enter size of array:");
let arr1 = new Array();

for(var i = 0;i < size; i++){
   arr1[i] = prompt("Enter elements in array");
}

let arr2 =new Array();
arr2 = arr1.reverse();

for(i=0;i<size;i++){
    console.log(arr2[i]);
}