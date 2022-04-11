var givenStr = "Hello world !!";
var ch = 'l';
var count = 0;
var char = "tech at core";
for (var i = 0; i < givenStr.length; i++) {
    if (givenStr.charAt(i) == ch) {
        count++;
    }
}
console.log("Total occurrence : ".concat(count));
console.log('Total occurrence : ${char}');
