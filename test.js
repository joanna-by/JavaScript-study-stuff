console.log(this);

myCar2 = {

    maxSpeed: 70, 
    driver: "Asia", 
    drive: function(speed, time){
        console.log(speed * time);
    },
    test: function(){
        console.log(this);
    }
};

var myCar3 = {

    maxSpeed: 45,
    driver: "Tom",
    drive: function(speed, time){
        console.log(speed * time);
    },
    test: function(){
        console.log(this);
    }
};

myCar2.test();
myCar3.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);
