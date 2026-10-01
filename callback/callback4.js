function science(fname,per)
{
    return fname + " your admision confirm in science stream with per " + per
    
}

function commerce(fname,per)
{
    return fname + " your admision confirm in commerce stream with per " + per
}

function arts(fname,per)
{
    return fname + " your admision confirm in arts stream with per " + per
}


// cb - callback 
function admission(fname,per,cb)
{
    let x = cb(fname,per);
    // console.log(x);

    return x;

    // console.log(cb(fname,per));
    
}

let percentage = 58;
let firstName = "pooja";

let ans;
if(percentage > 90)
{
    ans = admission(firstName,percentage,science)
}
else if(percentage > 70)
{
    ans = admission(firstName,percentage,commerce)
}
else if(percentage > 50)
{
    ans = admission(firstName,percentage,arts)
}
else{
    console.log("you are not eligible for any stream..");
}
console.log(ans);