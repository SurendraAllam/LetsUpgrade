// Program to search for a element in a array of strings

let size = prompt("Enter size of array:");
let arr = new Array();

for(var i = 0;i < size; i++){
   arr[i] = prompt("Enter strings in array");
}

let data = prompt("Enter element:");

for(let i = 0;i < arr.length; i++){
    if(data == arr[i]){
        console.log(data +" is present");
        break;
    }else{
        console.log(data + " is not present")
        break;
    }
}