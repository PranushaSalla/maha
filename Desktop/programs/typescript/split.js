var str = "tech@core@dev";
function bhanu(str, sp) {
    var temp = "";
    var bhanuArray = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] != sp) {
            temp += str[i];
            if (str[i + 1] == sp || i == str.length - 1) {
                bhanuArray.push(temp);
                temp = "";
            }
        }
    }
    return bhanuArray;
}
console.log(bhanu(str, "@"));