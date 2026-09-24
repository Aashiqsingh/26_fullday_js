function isPallindrome(num)
{
    let rev = 0;
    while(num!=0)
    {
        let rem = num%10;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
    return rev;
}

let num = 1331;
let ans = isPallindrome(num);
console.log(ans == num ? "Pallindrom" : "Not pallindrome");
