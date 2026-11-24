function increseSize(){
    let image = document.getElementById("image")
    image.style.height = "400px";
    image.style.width = "400px";
}

function decreseSize(){
    let image = document.getElementById("image")
    image.style.height = "200px";
    image.style.width = "200px";
}


function changeSize(){
    let image = document.getElementById("image");
    
    if(image.style.height == "200px")
    {
        image.style.height = "400px";
        image.style.width = "400px";
    }
    else{
        image.style.height = "200px";
        image.style.width = "200px";
    }
    
}