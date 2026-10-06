let users = ["pooja","krinal","raj","rudra","snehil"]


// let flag = false;
// for(let i=0;i<users.length;i++)
// {
//     if(users[i].length>2)
//     {
//         flag = true;
//     }
// }

// console.log(flag);


// every : every is used for iterating over array and return true or false

// let ans = users.every((user)=> user.length>3)
// console.log(ans);

let ans = users.every((u)=>{
    return u.includes("a");
})
console.log(ans);