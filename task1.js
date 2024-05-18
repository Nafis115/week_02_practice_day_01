
let num=prompt("Enter your number")
if(num<0){
    console.log("Your failed")

}else if(num>=0 && num<40){
    console.log("Your result is c grade")
}else if(num>=40&&num<60){
console.log("Your result is B")
}else if(num>=60 && num<70){
    console.log("Your result is A-")
}else if(num>=70 && num<80){
    console.log("Your result is A")
}else if(num>=80 && num<=100){
    console.log("your result is A+")
}else{
    console.log("invalid input");
}