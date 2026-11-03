var company = [
    {
        name: "google",
        employees:[
            {
                id:101,
                name:"meet desai",
                salary:25600,
                email:"meet@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:102,
                name:"jane",
                salary:22000,
                email:"jane@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:103,
                name:"priti",
                salary:27800,
                email:"priti@gmail.com",
                IsMarried:true,
                child:2,
                gender:"female"
            }
        ]
    },
    {
        name:"facebook",
        employees:[
            {
                id:201,
                name:"jim",
                salary:24500,
                email:"jim@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:202,
                name:"sarah",
                salary:21500,
                email:"sarah@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:203,
                name:"akash",
                salary:26200,
                email:"akash@gmail.com",
                IsMarried:true,
                child:2,
                gender:"male"
            }
        ]
    },
    {
        name:"amazon",
        employees:[
            {
                id:301,
                name:"ankit",
                salary:26200,
                email:"ankit@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            },
            {
                id:302,
                name:"riya",
                salary:86000,
                email:"riya@gmail.com",
                IsMarried:true,
                child:1,
                gender:"female"
            },
            {
                id:303,
                name:"kriti",
                salary:62500,
                email:"kriti@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            }
        ]
    },
    {
        name:"flipkart",
        employees:[
            {
                id:401,
                name:"pooja",
                salary:29800,
                email:"pooja@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:402,
                name:"ritesh",
                salary:22500,
                email:"ritesh@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:403,
                name:"bhuwan",
                salary:28700,
                email:"bhuwan@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            }
        ]
    }
    
]


// Find the total number of employees working in all companies.

// Calculate the total salary expense of each company.

// Find the average salary of all employees.

// Find the employee who receives the highest salary.

// Find the employee who receives the lowest salary.

// Display employees whose salary is between 25,000 and 30,000.

// Count the total number of male and female employees.

// Find the total number of married employees in each company.

// Find the company that has the highest total salary expense.

// Sort all employees according to their salaries in descending order.



// 1.  Find the total number of employees in all companies.

// let ans = company.reduce((count,comp)=> count + comp.employees.length,0);
// console.log(ans);


// 2. Find the company where the employee named "riya" works.

// let ans = company.find((comp)=> comp.employees.find((emp)=> emp.name === "riya")).name

// console.log(ans);

// 3. Calculate the average salary of employees across all companies.
// let ans = company.reduce((sum,comp)=> sum + comp.employees.reduce((sum,emp)=> sum + emp.salary,0),0)/company.reduce((count,comp)=> count + comp.employees.length,0)
// console.log(ans);

// 4. Find the names of all employees who are married.
                                                                             
// 5. Count the total number of children across all employees
// ans=company.reduce((count,comp)=>count+comp.employees.reduce((count,comp)=>count+comp.child,0),0)
// console.log(ans)
// 7. List all female employees.
// ans=company.map((comp)=>comp.employees.filter((comp)=>comp.gender=="female").map((emp)=>emp.name))
// console.log(ans)
// 8. Count how many employees are not married.
// let ans = company.reduce((count, comp) => count + comp.employees.filter((emp) => emp.IsMarried === false).length, 0);
// console.log(ans);
// 9. Find the email addresses of all employees earning more than 30,000.
// let ans = company.map((comp) =>comp.employees.filter((emp) => emp.salary > 30000));
// console.log(ans);
// 10. Identify the total number of employees for each company.
