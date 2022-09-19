let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDate = new Date().getDate();

function findAge(date,month,year){

if( year<=0 || year>currentYear ||  month < 1 || month>12  || date < 1 || date>31){
console.log("sorry invalid data");
}

else{
    let ageOfYear = currentYear-year;
    let ageOfMonth = currentMonth - month;
    let ageOfDate = currentDate - date;

if(ageOfMonth<0 || ageOfDate<0 ){
        ageOfYear=0;
        ageOfMonth = 12 + ageOfMonth;
    }
console.log("You'r age is " , ageOfYear , " Years" , ageOfMonth ," Months and " , ageOfDate  , "days ! ")
}


}
findAge(31,12,2021);
// findAge(21,06,1999);
// findAge(19,09,2022);
// findAge(21,06,2025);

