function isPrimeNumber(num)
 {
    if (num < 2) { return false; }
 }
var arr = [];
var x = 0;
while (arr.length < 100) {
    if (isPrimeNumber(x)) { arr.push(x); }
    x++;
}

console.log(arr);
console.log(arr.length);