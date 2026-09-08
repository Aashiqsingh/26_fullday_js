let isActive = true;
let isMarried = true;
let age = 29;
let isChild = false;


if(isActive)
{
    console.log("You are active");
    if(age > 22)
    {
        console.log("You are an adult");
        if(isMarried == true)
        {
            console.log("You are married");
            if(isChild)
            {
                console.log("You have a child");
            }
            else{
                console.log("You don't have a child");
            }
        }
        else{
            console.log("You are not married");
        }
    }
    else{
        console.log("You are a teenager");
    }
}
else{
    console.log("You are not active");
}