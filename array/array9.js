let languages = ["hindi","english","spanish","french","german","russian","portuguese","chinese","japanese","arabic"];

// languages.length;  propert

// for(let i=0;i<languages.length;i++)
// {
//     console.log(languages[i]);
// }

// languages.forEach((lang)=>{
//     // console.log(lang);
//     if(lang.length < 6 )
//     {
//         console.log(lang);
        
//     }
// })

// some : return boolean
// let ans = languages.some((lang)=>{
//     return lang.length < 5;
// })
// console.log(ans);

// map: it will return new array with same length

// let newLang = languages.map((lang)=>{
//     return lang.toUpperCase()
// })
// console.log(newLang);


// let newLang = languages.map((lang)=>{
//     return lang.length<6;
// })
// console.log(newLang);

// filter : it will return new array with modified data

// let newLang = languages.filter((lang)=>{
//     return lang.length < 7;
// })
// console.log(newLang);

let newLang = languages.filter((lang)=>{
    return lang!="english";
})
console.log(newLang);