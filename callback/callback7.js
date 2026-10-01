const lasvegas = (fname,budget)=>{
    return fname + " ur tour is confirm in lasvegas with budget " + budget
}

const newyork = (fname,budget)=>{
    return fname + " ur tour is confirm in newyork with budget " + budget
}

const chicago = (fname,budget)=>{
    return fname + " ur tour is confirm in chicago with budget " + budget
}


// const travel = (file)=>{
//     return file.cb(file.name,file.amount);
// }

const travel = (file)=> file.cb(file.name,file.amount);


let firstName = "snehil";
let budget = 6000;


let ans;
if(budget > 5000)
{
    ans = travel(
        {cb:lasvegas,
        name:firstName,
        amount:budget}
    );
}
else if(budget > 3000)
{
    // travel(newyork,firstName,budget);
    ans = travel(
        {cb:newyork,
        name:firstName,
        amount:budget}
    );
}
else if(budget > 2000)
{
    // travel(chicago,firstName,budget);
    ans = travel(
        {cb:chicago,
        name:firstName,
        amount:budget}
    );
}
else{
    console.log("you are not eligible for any tour..");
}

console.log(ans);
