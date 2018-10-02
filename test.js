function getAverage (a,b,c,d,e,f) {

    var average = (a + b + c + d + e +f) / 6;
    console.log(average);
    return average;

}

var myResult = getAverage(7,8,13,23,24,5);
console.log("the average is " + myResult);