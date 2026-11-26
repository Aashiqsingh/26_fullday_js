

let images = ["images.jpg","img2.jpg","img3.jpg","img4.jpg"];

function changeImg(){
    let random = Math.floor(Math.random() * images.length);

    let box = document.getElementById("box");
    // box.style.backgroundImage = `url("../image/${images[random]}")`
    // box.style.backgroundSize = "cover";

    box.src = "../image/" + images[random];
}


// src = images.jpg


// let a = 10;
// let b = 20;
// let c = 30;

// console.log("value of a " + a + "value of b = "+b+" value of c = "+c);
// console.log(`value of a = ${a} value of b = ${b} value of c = ${c}`);

