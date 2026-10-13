// json  : javascript object model
// key : value pair


// let student = {
//     roll:101,
//     name:"tejas",
//     age:20,
//     address:"bangalore",
//     marks:90
// }

// // console.log(student);
// // console.log(typeof student);

// console.log(student.name);
// console.log(student.age);
// console.log(student.address);

// let email = prompt("enter email");

let employee = {
    id:1,
    name:"tejas",
    age:20,
    email:"tejas@gmail.com",
    address:{
        street:"c.g road",
        city:"bangalore",
        state:"karnataka",
        pincode:560089
    },
    phone:["9876543210","9876543211"]
}

// console.log(employee);
// console.log(employee.email);
// console.log(employee.address);
// console.log(employee.address.city);


// console.log(employee.phone)
// console.log(employee.phone[0]);

for(let i=0;i<employee.phone.length;i++)
{
    console.log(employee.phone[i]);
    
}