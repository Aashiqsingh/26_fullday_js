function science(name,per)
{
    return name + " your admision confirm in science stream with per " + per
    
}

function commerce(name,per)
{
    return name + " your admision confirm in commerce stream with per " + per
}

function arts(name,per)
{
    return name + " your admision confirm in arts stream with per " + per
}


// let percentage = 48;
let percentage = parseInt(prompt("enter percentage"));
let fullName = "pooja";
let ans;

if(percentage > 90)
{
    ans = science(fullName,percentage);
}
else if(percentage > 70)
{
    ans = commerce(fullName,percentage);
}
else if(percentage > 50)
{
    ans = arts("snehil",percentage);
}
else{
    console.log("you are not eligible for any stream..");
    
}
console.log(ans);
