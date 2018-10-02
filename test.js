var myString = 'I\'m a "fun" ninja string';

if(myString.indexOf("ninja") === -1){

    console.log("the word ninja is not in a string");

} else {

    console.log("the word ninja starts at the position "+ myString.indexOf("ninja"));
}