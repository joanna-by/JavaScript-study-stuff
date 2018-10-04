var myCar = new Object ();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function(){
    console.log("now driving");
};

myCar.drive();

myCar2 = {
    maxSpeed: 70, 
    driver: "Asia", 
    drive: function(speed, time){
        console.log(speed * time);
    }
};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);
