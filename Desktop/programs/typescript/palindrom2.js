function check_palindrome(str) {
    var j = str.length - 1;
    for (var i = 0; i < j / 2; i++) {
        var x = str[i]; //forward character
        var y = str[j - i]; //backward character
        if (x != y) {
            return false; // return false if string not match
        }
    }
    return true; // return true if string is palindrome
}
function is_palindrome(str) {
    var ans = check_palindrome(str); // variable that is true ig string is palindrome
    if (ans == true) //condition checking ans is true or not
     {
        console.log("passed string is palindrome ");
    }
    else {
        console.log("passed string not a palindrome");
    }
}
// test variable
var test = "racecar";
is_palindrome(test);
