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


const Handler = (fname,cb)=>{
    let x = cb({fname:fname,size:"1000kb"});
    console.log(x);
}


let fileName = "test.gif";

if(fileName.endsWith(".png"))
{
    Handler(fileName,pngHandler);
}
else if(fileName.endsWith(".jpg"))
{
    Handler(fileName,jpgHandler);
}
else if(fileName.endsWith(".gif"))
{
    Handler(fileName,gifHandler);
}
else if(fileName.endsWith(".pdf"))
{
    Handler(fileName,pdfHandler);
}
else{
    console.log("file type not supported..");
}
console.log();
