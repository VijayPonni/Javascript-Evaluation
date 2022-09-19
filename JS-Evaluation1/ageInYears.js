let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDate = new Date().getDate();

function findAge(date,month,year){

if( year<=0 || year>currentYear ||  month < 1 || month>12  || date < 1 || date>31){
console.log("sorry invalid data");
}
else{
    let ageOfYear = currentYear-year;

console.log("You are " , ageOfYear , " Years Old ! ")
}


}
findAge(31,12,2021);
// findAge(21,06,1999);
findAge(19,09,2022);
findAge(21,06,2025);

