var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"geeta",
                age:32,
                gender:"female",
                isActive:true
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"siya",
                age:35,
                gender:"female",
                isActive:true
            },
            {
                name:"axit",
                age:37,
                gender:"male",
                isActive:true
            },
            {
                name:"payal",
                age:39,
                gender:"female",
                isActive:true
            },
            {
                name:"sunit",
                age:42,
                gender:"male",
                isActive:false
            }
            
        ]
    },
]

// let ans = departments.find((dept)=>{
//     return dept.name == "Finance"
// }).employees.filter((emp)=>{
//     return emp.gender == "female"
// })
// console.log(ans);


// let ans = departments.find((dept)=>{
//     return dept.name == "IT"
// }).employees.reduce((sum,emp)=>{
//     return sum + emp.age
// },0);
// console.log(ans);


let ans = departments.find((deprt)=> deprt.name == "IT").employees.reduce((sum,emp)=> sum + emp.age,0);
console.log(ans);



// find:


// let ans = departments.map((depart)=>{
//     return depart.name
// })
// console.log(ans);

// let ans = departments.map((depart)=>{
//     return depart.employees.filter((emp)=>{
//         return emp.gender == "male"
//     })
// })
// console.log(ans);




// console.log(departments);

// let ans = departments.map((dept)=>{
//     return dept.employees
// })
// console.log(ans);
