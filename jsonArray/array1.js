var students = [
    {
        roll:101,
        name:"priya",
        age:20,
        address:"delhi",
        marks:90
    },
    {
        roll:102,
        name:"rahul",
        age:24,
        address:"surat",
        marks:80
    },
    {
        roll:103,
        name:"hetal",
        age:22,
        address:"bangalore",
        marks:70
    },
    {
        roll:104,
        name:"vijay",
        age:23,
        address:"delhi",
        marks:80
    },
    {
        roll:105,
        name:"samir",
        age:25,
        address:"ahmedabad",
        marks:70
    }
];


// students.forEach((stu)=>{
//     if(stu.age>22)
//     {
//         console.log(stu);
//     }
// })


// let ans = students.filter((stu)=> stu.age>22).map((stu)=> stu.name)
// console.log(ans);

// let ans = students.filter((stu)=>{
//     return stu.age>22
// }).map((stu)=>{
//     return stu.name
// })
//     console.log(ans);




// let total=0;
// students.forEach((stu)=>{
//     total += stu.marks;
// })
// console.log(total);

// reduce : it wil return a single value

// let ans = students.reduce((sum,stu)=>{
//     return sum + stu.marks;
// },0)
// console.log(ans);

// let ans = students.reduce((sum,stu)=> sum + stu.marks,0)
// console.log(ans);



// console.log(students);

// students.forEach((stu)=>{
//     console.log(stu.name.toUpperCase());
    
// })

// students.forEach((stu)=>{
//     if(stu.name.includes("i"))
//     {
//         console.log(stu.name);
        
//     }
    
// })

// let ans = students.map((stu)=>{
//     return stu.name
// })
// console.log(ans);


// let ans = students.map((stu)=>{
//     return stu.name.includes("i")
// })
// console.log(ans);