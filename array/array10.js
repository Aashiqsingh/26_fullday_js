let languages = ["hindi","english","spanish","french","german","russian","portuguese","chinese","japanese","arabic"];


// function deleteLang(langName)
// {
//     languages = languages.filter((lang)=>{
//         return lang!=langName;
//     })
//     console.log(languages);
// }

// deleteLang("spanish");


// function deleteLang(langName)
// {
//     languages = languages.filter((lang)=>{
//         return lang!=langName;
//     })
//     return languages;
// }

// let deleteName = "french";
// let ans = deleteLang(deleteName);
// console.log(ans);

// function deleteLang(langName)
// {
//     return languages.filter((lang)=>{
//         return lang!=langName;
//     })
    
// }

// let deleteName = "french";
// let ans = deleteLang(deleteName);
// console.log(ans);


// const deleteLang = (langName)=>{

//     return languages.filter((lang)=>{
//         return lang!=langName;
//     })
    
// }

// let deleteName = "chinese";
// let ans = deleteLang(deleteName);
// console.log(ans);


// const deleteLang = (langName)=>{

//     return languages.filter((lang)=> lang!=langName)
    
// }

// let deleteName = "german";
// let ans = deleteLang(deleteName);
// console.log(ans);


const deleteLang = (langName)=> languages.filter((lang)=> lang!=langName)
    


let deleteName = "russian";
let ans = deleteLang(deleteName);
console.log(ans);