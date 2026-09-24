function isPrime(num)
{
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
        {
            return false;
        }
    }
    return true;
}


// let ans = isPrime(17);
// console.log(ans == true ? "Prime" : "Not Prime");


// let ans = isPrime(17) == true ? "Prime" : "Not Prime"
let ans = isPrime(20) ? "Prime" : "Not Prime"

console.log(ans);