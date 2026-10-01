const lasvegas = (fname,budget)=>{
    console.log(fname + " ur tour is confirm in lasvegas with budget " + budget);
}

const newyork = (fname,budget)=>{
    console.log(fname + " ur tour is confirm in newyork with budget " + budget);
}

const chicago = (fname,budget)=>{
    console.log(fname + " ur tour is confirm in chicago with budget " + budget);
}


const travel = (cb,name,amount)=>{
    cb(name,amount);
}

let firstName = "snehil";
let budget = 4000;

if(budget > 5000)
{
    travel(lasvegas,firstName,budget);
}
else if(budget > 3000)
{
    travel(newyork,firstName,budget);
}
else if(budget > 2000)
{
    travel(chicago,firstName,budget);
}
else{
    console.log("you are not eligible for any tour..");
}