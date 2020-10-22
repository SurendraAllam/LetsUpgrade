// Question-1
// Create a web page containing an image and three buttons
//    1) On click of the second button a change the existing image to a new image
//    2) On click of the third button change it once again
//    3) On click of the first button,the first image should come back

function button1(){
    const i = document.getElementById("img");
    i.src = "Images/img1.jpg"
}
function button2(){
    const i = document.getElementById("img");
    i.src = "Images/img2.jpg"
}
function button3(){
    const i = document.getElementById("img");
    i.src = "Images/img3.jpg"
}
