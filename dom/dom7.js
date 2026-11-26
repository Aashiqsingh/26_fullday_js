let box = document.getElementsByClassName("box")

function fun1()
{
    box[0].style.backgroundColor = "red";
}

function fun2()
{
    box[1].style.backgroundColor = "green";
}

function fun3()
{
    box[2].style.backgroundColor = "blue";
}

function fun4()
{
    box[3].style.backgroundColor = "orange";
}



function func20(){
    // box[0].style.backgroundColor = "white"
    for(let i=0;i<box.length;i++)
    {
        box[i].style.backgroundColor = "white";
    }
}