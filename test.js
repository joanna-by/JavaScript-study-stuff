var Car = function(maxSpeed,driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed,time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    }
};

var myCar = new Car (70, "Tom");
var myCar2 = new Car (90, "Jim");
var myCar3 = new Car (120, "James");
var myCar4 = new Car (15, "Billy");

myCar.drive(30, 5);
myCar3.logDriver();