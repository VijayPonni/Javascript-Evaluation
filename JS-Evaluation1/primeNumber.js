for(let number=1;number<=200;number++){
let count = 0;
for(let i=1;i<=number;i++){
if(number%i === 0){
count++;
}
}
if(count ===2 ){
console.log(number);
}
}










