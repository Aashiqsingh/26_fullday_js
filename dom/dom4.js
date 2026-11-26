let a = 1;
function temp(){
    // console.log(a++);

    let color = ["red","green","blue","yellow","skyblue","brown","black"]

    // let  random = Math.floor(Math.random() * 9000 + 1000);
    // console.log(random);
    
    let random = Math.floor(Math.random() * color.length);

    let mydiv = document.getElementById("mydiv");
    mydiv.style.backgroundColor = color[random];
    
}
