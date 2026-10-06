const pngHandler = (file)=>{
    return file.fname + " handle with pngHandler.." 
}

const jpgHandler = (file)=>{
    return file.fname + " handle with jpgHandler.."  
}

const gifHandler = (file)=>{
    return file.fname + " handle with gifHandler.." 
}

const pdfHandler = (file)=>{
    return file.fname + " handle with pdfHandler.."  
}


// const Handler = (fname,cb)=>{
//     let x = cb({fname:fname,size:"1000kb"});
//     // console.log(x);

//     return x;
// }

// const Handler = (fname,cb)=>{
//     return cb({fname:fname,size:"1000kb"});
//     // console.log(x);
// }


const Handler = (fname,cb)=> cb({fname:fname,size:"1000kb"});
    



let fileName = "test.png";

if(fileName.endsWith(".png"))
{
    ans = Handler(fileName,pngHandler);
}
else if(fileName.endsWith(".jpg"))
{
    ans = Handler(fileName,jpgHandler);
}
else if(fileName.endsWith(".gif"))
{
    ans = Handler(fileName,gifHandler);
}
else if(fileName.endsWith(".pdf"))
{
    ans = Handler(fileName,pdfHandler);
}
else{
    console.log("file type not supported..");
}
console.log(ans);
