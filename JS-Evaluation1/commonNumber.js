let a = [2,3,4,7,9];
let b = [1,7,9,13,56,48,80,90];
let commonNumber='' ;
for(let i=0;i<a.length;i++){
    for(let j=0;j<=b.length;j++){
        if(a[i]===b[j]){
            console.log(a[i]);
            commonNumber="commonNumberFound";
        }
    }
}
if(commonNumber == ''){
console.log(" No common number Found Sorry ! ");
}
