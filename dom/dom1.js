// let txt = document.getElementById("txt")
// txt.innerHTML = "Royal technosoft p ltd."
// txt.style.backgroundColor = "red";
// txt.style.color = "white"


function changeTxt(){
    let txt = document.getElementById("txt")
    txt.innerHTML = "Royal technosoft p ltd."
    txt.style.backgroundColor = "red";
    txt.style.color = "white";
    txt.style.height = "200px";
    txt.style.fontSize = "50px"
}


const changeRef = ()=>{
    let a = document.getElementById("a");
    a.style.backgroundColor = "green";
    a.href = "https://amazon.com";
    a.innerHTML = "Amazon";
    a.target = "_blank";
}

function changeSize(){
    let img = document.getElementById("img");
    img.style.height = "400px";
    img.style.width = "400px";
    img.style.borderRadius = "50%";
    img.style.border = "10px dotted blue"
}