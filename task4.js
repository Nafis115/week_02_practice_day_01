var year=prompt("enter your year");
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log("The is leap year");
}else{
    console.log("The is not leap year");
}