function printValue(digit) {
    switch (digit) { // Switch block to check for each digit c
        case "0": // For digit 0
            console.log("Zero ");
            break;
        case "1": // For digit 1
            console.log("One ");
            break;
        case "2": // For digit 2
            console.log("Two ");
            break;
        case "3": // For digit 3
            console.log("Three ");
            break;
        case "4": // For digit 4
            console.log("Four ");
            break;
        // For digit 5
        case "5":
            console.log("Five ");
            break;
    }
}
function printWord(N) {
    var i, length = N.length;
    // Finding each digit of the number
    for (i = 0; i < length; i++) {
        // Print the digit in words
        printValue(N[i]);
    }
}
// Driver code
var N = "101";
printWord(N);
