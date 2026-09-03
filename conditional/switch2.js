let isMarried = true;
let isChild = true;
let age = 22;


switch(isMarried){
    case true:
        console.log("You are married");
        switch(isChild){
            case true:
                console.log("You have a child");
                switch(age>18){
                    case true: console.log("You are an adult");
                    break;
                    case false: console.log("You are a teenager");
                    break;

                }
                break;
            case false: console.log("You Have'nt a child");
            break;
        }
        break;
    case false:
        console.log("You are not married");
}