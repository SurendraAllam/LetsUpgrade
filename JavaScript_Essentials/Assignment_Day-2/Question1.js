// Program to search for a particular character in a string

let num = prompt("Enter String: ");
let char = prompt("Enter Character: ");
for(let i=0;i<num.length;i++){
    if(char == num[i]){
        console.log(char +" is present");
        break;
    }else{
        console.log(char + " is not present")
        break;
    }
}