let users = ["pooja","krinal","om","rudra","snehil"]


// let flag = false;
// for(let i=0;i<users.length;i++)
// {
//     if(users[i].length>5)
//     {
//         flag = true;
//     }
// }

// console.log(flag);


// some : some is used for iterating over array and return true or false 

// let ans = users.some((user)=>{
//     return user.length > 5;
// })

// console.log(ans);

// let ans = users.some((user)=>{
//     return user.startsWith("z");
// })
// console.log(ans);

let ans = users.some((user)=>user.startsWith("p"))
console.log(ans);