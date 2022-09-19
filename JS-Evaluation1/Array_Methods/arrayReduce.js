// With accumulator initila value
let originalArray = [1,2,3,4,5];    
let accumulator = 20;
let reducedArray = originalArray.reduce(
(previousValue,currentValue)=>{
    return previousValue*currentValue;
},
accumulator   // Passing accumulator value as initil value 
);

console.log(reducedArray);


// Without using initial value 

let words = ["I" , "am" , "vijay" ];
let sentence = words.reduce(
    (previousValue,currentVlaue) => {
        return previousValue + " " + currentVlaue ;
    }
);

console.log(sentence);