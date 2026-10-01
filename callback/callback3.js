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
    // let x = cb(fname,per);
    // console.log(x);


    console.log(cb(fname,per));
    
}

let percentage = 78;
let firstName = "pooja";

if(percentage > 90)
{
    admission(firstName,percentage,science)
}
else if(percentage > 70)
{
    admission(firstName,percentage,commerce)
}
else if(percentage > 50)
{
    admission(firstName,percentage,arts)
}
else{
    console.log("you are not eligible for any stream..");
}