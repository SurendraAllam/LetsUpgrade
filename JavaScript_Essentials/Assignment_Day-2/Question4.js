// Program to display only elements containing 'a' in them from a array

let size = prompt("Enter size of array:");
let arr = new Array();
for(var i = 0;i < size; i++){
   arr[i] = prompt("Enter strings in array");
}
for(i=0;i<size;i++){
    for(var j = 0;j<arr[i].length;j++){
        if(arr[i][j] == 'a'){
            console.log(arr[i]);
            break;
        }
    }
}