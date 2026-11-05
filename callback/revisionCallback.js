const mp3Handler = (file)=>{
    console.log(file.fname + " Handle with mp3 handler..");
    
}

const mp4Handler = (file)=>{
    console.log(file.fname + " Handle with mp4 handler..");

}

const pdfHandler = (file)=>{
    console.log(file.fname + " Handle with Pdf handler..");

}

const Handler = (option)=>{
    option.cb({fname:option.fname});
}

let fileName = "test.pdf";

if(fileName.endsWith(".pdf"))
{
    Handler({
        fname:fileName,
        size:"1000kb",
        cb:pdfHandler
    })
}
else if(fileName.endsWith(".mp3"))
{
    Handler({fname:fileName,size:"2000kb",cb:mp3Handler})
}
else if(fileName.endsWith(".mp4")){
    Handler({fname:fileName,size:"3000kb",cb:mp4Handler})
}
else{
    console.log("Not supported...");
    
}