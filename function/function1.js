// function  : code reuseblity
// function : function keyword

// without return without argument
function demo()
{
    console.log("hello world");
}

// demo();

// withour return with argument

function add(a,b)
{
    console.log(a+b);
    
}

// add(10,20)
// add(10.12,12.23)
// add("shree","ram")
// add(12.56,"ram")

// with return without argument

function str()
{
    return "with return without argument";
}

// let ans = str()
// console.log(ans);

// console.log(str());


// with return with argument

function multy(x,y)
{
    return x*y;
}

let ans = multy(10,12);
console.log("multiply = ",ans);
