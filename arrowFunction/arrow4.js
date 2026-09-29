const science = (option)=> option.fname + " ur tour is confirm in science stream with budget " + option.per;

const commerce = (option)=> option.fname + " ur tour is confirm in commerce stream with budget " + option.per;

const arts = (option)=> option.fname + " ur tour is confirm in arts stream with budget " + option.per;


const firstName = "pooja";
const per = 78;
let ans ;

if(per > 98)
{
     ans = science({fname:firstName,per:per,size:"1000kb"});
}
else if(per > 70)
{
    ans = commerce({fname:firstName,per:per,size:"1000kb"});
}
else if(per > 50)
{
    ans = arts({fname:firstName,per:per,size:"1000kb"});
}
else{
    console.log("you are not eligible for any stream..");
}
console.log(ans);