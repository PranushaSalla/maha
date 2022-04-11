var string = 1221;
var msg;
function fun(string) {
    var len = string.length;
    for (var i = 0; i < len / 2; i++) {
        if (string[i] != string[len - 1 - i]) {
            msg = "Its not a Palindrome";
        }
        else {
            msg = "Its a Palindrome";
        }
    }
    return msg;
}
//var string1 = string.prompt('Enter a string:');
//const value=fun(string);
console.log(fun(string));
