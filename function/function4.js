function science(name,per)
{
    console.log(name + " your admision confirm in science stream with per " + per);
    
}

function commerce(name,per)
{
    console.log(name + " your admision confirm in commerce stream with per " + per);
}

function arts(name,per)
{
    console.log(name + " your admision confirm in arts stream with per " + per);
}


// let percentage = 48;
let percentage = parseInt(prompt("enter percentage"));
let fullName = "pooja";

if(percentage > 90)
{
    science(fullName,percentage);
}
else if(percentage > 70)
{
    commerce(fullName,percentage);
}
else if(percentage > 50)
{
    arts("snehil",percentage);
}
else{
    console.log("you are not eligible for any stream..");
    
}