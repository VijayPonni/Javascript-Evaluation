function findMissingNumber(a){
console.log("Missing NUmber:");
let length = a.length;
for(let i=0;i<length;i++){
    let diff = a[i+1] - a[i];
    if(diff>1){
        for(let j=1;j<diff;j++){
        console.log(a[i]+j)
        }
    }
  }
}
findMissingNumber([1,2,3,5,6]);
findMissingNumber([1,6]);


