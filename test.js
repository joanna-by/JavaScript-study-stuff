var birthday = new Date(1986, 11, 1, 0, 35, 15);
var birthday2 = new Date(1986, 11, 1, 0, 35, 15);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if(birthday.getTime() == birthday2.getTime()){

    console.log("birthdays are equal");
} else{

    console.log("birthdays are not equal");

}