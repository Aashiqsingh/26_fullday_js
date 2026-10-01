const lasvegas = (fname,budget)=>{
    console.log(fname + " ur tour is confirm in lasvegas with budget " + budget);
}

const newyork = (fname,budget)=>{
    console.log(fname + " ur tour is confirm in newyork with budget " + budget);
}

const chicago = (fname,budget)=>{
    console.log(fname + " ur tour is confirm in chicago with budget " + budget);
}


const travel = (file)=>{
    file.cb(file.name,file.amount);
}

let firstName = "snehil";
let budget = 3000;

if(budget > 5000)
{
    travel(
        {cb:lasvegas,
        name:firstName,
        amount:budget}
    );
}
else if(budget > 3000)
{
    // travel(newyork,firstName,budget);
    travel(
        {cb:newyork,
        name:firstName,
        amount:budget}
    );
}
else if(budget > 2000)
{
    // travel(chicago,firstName,budget);
    travel(
        {cb:chicago,
        name:firstName,
        amount:budget}
    );
}
else{
    console.log("you are not eligible for any tour..");
}