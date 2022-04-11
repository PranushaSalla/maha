let run = function()
{
    for(let i=0,count=0;count<100;i++)
    {
        if(isPrimeNumber(i))
        {
            let countPadded = (++count+"");
            console.log(i);
        }
    }
}
let isPrimeNumber = function(value)
{
    let result = true;
    let i;
    for(i=2;i<value;i++)
    {
        if(value%i==0)
        {
            result = false;
            break;
        }
    }
    if(value<=1)
    result = false;
    return result;
}




