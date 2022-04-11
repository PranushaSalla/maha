var sentence = "Tech at core";
sentence = sentence.toLowerCase();
var noOfCountsOfEachCharacter = {};
var getCharacter, counter, actualLength, noOfCount;
for (counter = 0, actualLength = sentence.length; counter <
    actualLength; ++counter) {
    getCharacter = sentence.charAt(counter);
    noOfCount = noOfCountsOfEachCharacter[getCharacter];
    noOfCountsOfEachCharacter[getCharacter] = noOfCount ? noOfCount + 1 : 1;
}
for (getCharacter in noOfCountsOfEachCharacter) {
    if (getCharacter != ' ')
        console.log("Character=" + getCharacter + " Occurrences=" +
            noOfCountsOfEachCharacter[getCharacter]);
}
