function count(s, c) {
    var res = 0;
    for (var i = 0; i < s.length; i++) {
        // checking character in string
        if (s.charAt(i) == c)
            res++;
    }
    return res;
}
// Driver method  
var str = "Tech at core";
var c = 'Tech at core';
console.log(count(str, c));
