let language = ["hindi","english","gujarati","tamil","telugu","marathi","kannada"];
// console.log(language);


// for(let i=0;i<language.length;i++)
// {
//     console.log(language[i]);
// }
// let ans=[];
// language.forEach((lang)=>{

//     // console.log(lang.toUpperCase());
//         ans.push(lang.toUpperCase())
// })
// console.log(ans);

// map : it will return new array with same length
// let ans = language.map((lang)=>{
//     return lang.toUpperCase()
// })
// console.log(ans);

// let ans = language.map((lang)=>{
//     return lang.length > 5;
// })
// console.log(ans);


// filter : it will return new array with modified length

let ans = language.filter((lang)=>{
    return lang.length > 5;
})
console.log(ans);