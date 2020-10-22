// Question-2
// Create a web page containing two input fields and a button
//    1) Write something in the first input
//    2) On click of the button, the content of input one should be copied in the second input 

function copyText(){
    const text = document.getElementsByClassName("input");
    text[1].value = text[0].value; 
}