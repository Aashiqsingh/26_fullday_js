// Array : collection of different data types

// let arr = [12,"hello",true,12.56,null,undefined];

// console.log(arr.length);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

let arr = ["pooja","krinal","om","rudra","snehil"]
let marks = [100,90,80,70,60]


// arr.splice(2,0,"tejas");
// arr.splice(2,1,"tejas");
// arr.splice(2,2,"tejas");
arr.splice(2,1,"tejas","paresh","pranshu");

console.log(arr);


// let ans = arr.includes("")
// console.log(ans);

// let ans = arr.indexOf("krinal")

// console.log(ans);

// let ans = arr.join("-")
// let ans = arr.join("$")
// let ans = arr.join(" ")
// let ans = arr.join("")

// console.log(ans);

// let ans = arr.reverse();
// console.log(ans);

// let ans = arr.sort()
// console.log(ans);

// let ans = arr.slice(1,3);
// let ans = arr.slice(-3,-1);
// console.log(ans);



// let ans = arr.push("tejas");
// arr.push("tejas","paresh","pranshu");
// // console.log(ans);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift("rajat");
// console.log(arr);

// arr.shift();
// console.log(arr);

// let ans = arr.concat(marks);
// console.log(ans);




// console.log(arr.toUpperCase());// error

// console.log(arr[0].toUpperCase());


// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i].toUpperCase());
    
// }


// let ans = poojasoundagar

let name = "pooja";
// let ans = name.split("").reverse().join("");
// console.log(ans);

let len = name.length;
let ans = " ";
for(let i=len-1;i>=0;i--)
{
    // console.log(name[i]);
    ans += name[i];
}
console.log(ans);