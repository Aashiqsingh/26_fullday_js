function lasveges(option)
{
    // console.log(option);
    
    return option.fname + " ur tour is confirm in lasvegas with budget " + option.amount   
}

function newyork(option)
{
    console.log(option.fname + " ur tour is confirm in newyork with budget " + option.amount);   
}

function chicago(option)
{
    console.log(option.fname + " ur tour is confirm in chicago with budget " + option.amount);   
}


let firstName = "pooja";
let amount = 4100;

// let ans = {
//             fname:firstName,
//             amount:amount
//         }

if(amount > 4000)
{
    let ans = lasveges(
        {
            fname:firstName,
            amount:amount
        }
    );
    console.log(ans);
}
else if(amount > 3000)
{
    newyork({fname:firstName,amount:amount});
}
else if(amount > 2000)
{
    chicago({fname:firstName,amount:amount});
}
else{
    console.log("you are not eligible for any stream..");
}

