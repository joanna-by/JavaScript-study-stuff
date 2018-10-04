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
    drive: function(){console.log("now driving again");}
};

console.log(myCar2.maxSpeed);
myCar2.drive();
