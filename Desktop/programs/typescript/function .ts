function isPrime(n)
{
    if(n==1||n==0) return false;
    for(let i=2;i<n;i++)
    {
        if(n%i==0) return false;
    }
    return true;
}
let N= 100;
for(let i=1;i<=N;i++)
{
    if(isPrime(i))
    {
        console.log(i);
    }
}