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

// find working employee of all departments



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


// let ans = departments.find((deprt)=> deprt.name == "IT").employees.reduce((sum,emp)=> sum + emp.age,0);
// console.log(ans);



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


// 1\. Display the names of all employees from every department.

// 2\. Display each department's name along with the names of its employees.

// 3\. Find and display all employees whose age is greater than 30.

// 4\. Display the names of all active employees.

// 5\. Count and display the total number of employees in each department.

// 6\. Find and display all female employees across every department.

// 7\. Find and display the oldest employee's name and age.

// 8\. Count the total number of active and inactive employees in the company.

// 9\. Calculate and display the average age of employees in each department.

// 10\. Display the names of departments that have more than two active employees.

