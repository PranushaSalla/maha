var countChar = function (str) {
    var counts = {};
    for (var i = 0, str = str; i < str.length; i++) {
        var s = str[i];
        if (counts[s]) {
            counts[s]++;
        }
        else {
            counts[s] = 1;
        }
    }
    return counts;
};
var str = "Tech at core";
console.log(countChar(str));
