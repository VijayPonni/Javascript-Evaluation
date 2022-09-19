# Javascript Evaluation -2 #

<br>

* Here we can find the question paper : 

<br>

<img src="images\js-1.png">

<br>

## Question : 1 ##

<br>

### 1. Display prime numbers 1 to 200? ###

<br>

## Solution ##

<br>

### primeNumber.js ###

<br>

```javascript
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
```

<br>

## Question : 2 ##

<br>

### From two sorted arrays, how would you find the common numbers? ###

<br>

## Solution ##

<br>

### commonNumber.js ###

<br>

```javascript
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

```
<br>

## Question : 3 ##

<br>

### Explain about function Anatomy, Anonymous function and Assigning function to a variable with an example? ###

<br>

## Solution ##

<br>

## Function Anatomy ##

<br>

* Function Anatomy means defining the structure of functions . A simple function should have the following things :
  
  * A `function` keyword .

  * Function name 

  * () --> paranthesis .

  * {} --> Curly bracs .

  * return value .

  * Function call() .


### A simple function of adding two numbers ###

<br>

```javascript
function add(a ,b){
    let c = a + b ;
    return c;
}
console.log(add(10,4));
console.log(add(67,5786));
```

<br>

## Explanation of above simple function ##

<br>

* Here as usual `function` is a javascript keyword .

* `add` is the `function name` .

* `( a, b )` Here  `a` and `b` are the `parameters` which are considered to be the data that the function expects as a input .
The parameters may be array , object , string or something that the function expects.

* `{ ... } ` , this curly bracs contain the set of instructions that the function should implement .

* `return` , tis keyword in the fuction defines the value that stores the functions' value .

* If we provide return to some variable the whle function will hold the value and if don't provide the value to return then it will be `undefined`

* function call , `add(10,4)` or any  `add( numx , num y )` will call the function we declared with the name . It will provide the result of the function . The function call can be used many times as we want .

* The numbers we passed inside the function call are `arguments` .


## Anonymous Function ##

<br>

* Anonymous functions are the functions without the function name.

* These anonymous functions can be used in the callback events which means ike setTimeout functions and so on .

* We can use this anonmous functions in multiple ways as below :

<br>

### 1 . Assign with the vaiable ###

<br>

```javascript
let anonymousFunction = function(){ 
    console.log(" I am anonymous function with variable assigment"); 
}
anonymousFunction();
```

<br>

### 2 . Passing Arguments to Anonymous functions ###

<br>

```javascript
let argumentAnonymousFunction = function(a,b){
   let c=a*b;
   console.log(c);
}
argumentAnonymousFunction(1,4);
```
<br>

### 3 . Anonymous function as callback function ###

<br>

```javascript

//Anonyous function as callback function 

 setTimeout( 
    function(){
        console.log("hi");
    }
    , 2000)
```
<br>

### 4 . Anonymous functions as self executing function ###

<br>

* We can invoke the anonymous function immediately after initialization by calling it with empty parenthesis .

<br>

```javascript
// Self executing Anonymous function
(function(){
    console.log(" I am self executing Anonymous function");
})
()
```
<br>

### NOTE : We can only call it immediate call . We cannot call it more than once . ###

<br>

### 5. Arrow functions ###

<br>

* Arrow functioons are anonymous functions with the specific structure like below :

<br>

### Arrow Function Basci Structure ###

<br>

```javascript
() => { function body ... } 
```

<br>

* We can call the aroow functions using the variable assignment as below :

<br>

### anonymousFunction.js ###

<br>

```javascript

//Arrowfunction 

let Arrowfunction = (a)=> {
    let space = ' ';
    return b = "Hello" + space +  a;
}
console.log(Arrowfunction("vijay"));
```
<br>

### Note : Single statement Arrow function does not need curly bracs ###

<br>

### anonymousFunction.js ###

<br>

```javascript
//Arrow function with single statment 

let singleStatementArroeFunction = () => console.log("I am single statement Arrow function . SO i don't want { ... } "); 
singleStatementArroeFunction();
```
<br>

## Assigning Functions with variable ##

<br>

### assingningFunctionsWithVariable.js ###

<br>

```javascript
let Assignment = function print(){
    console.log("Hi i am assigning function with variable ");
}
Assignment();
```
<br>

## Question : 3 ##

<br>

### Show an example ofSafegrounding function parameters? ###

<br>

## Solution ##

<br>

## Sagegrounding ##

<br> 

* Safeguarding function parameter allows us to ensure the type parameter of a function we pass with help of the `typyof` directive .

* `typeof` dirctive is a built-in javascript keyword that allows us check the parameter type before calling the function as below :

* If type matches with the parameter type then , it executes the function and provide result.

* If does not match with the type , the `typeof` parameter safeguarding will `Not show error` .

## NOTE : If we don't safeguard with typeof , it will show error if we pass wrong type parameter ##

<br>

## Example : Without safeGuard ##

<br>

### withoutSafeguard.js ###

<br>

```javascript
let stringParameter = "vijay"

function withoutSafeguard(parameterOftypeFunction){    // Expects function as a parameter.
   console.log(parameterOftypeFunction());
}



withoutSafeguard(stringParameter);   // But passes string as a argument
```
<br>


* It will throw error as below ( Type error ) :

<br>

```javascript
C:\Users\Administrator\OneDrive\Documents\Javascript-Evaluation\JS-Evaluation1\withoutSafeguard..js:4
   console.log(parameterOftypeFunction());
               ^

TypeError: parameterOftypeFunction is not a function
```


<br>

## Example : Wiht SageGuard (Using typeof ) ##

<br>

```javascript
let stringParameter = "vijay"

function withoutSafeguard(parameterOftypeFunction){    // Expects function as a parameter.
   if(typeof parameterOftypeFunction == "function"){   // Checking before calling the function parameter with typeof                     
    console.log(parameterOftypeFunction());
   }
}



withoutSafeguard(stringParameter);   // But passes string as an argument
```
<br>

* It will not show error .

<br>

## Question : 5 ##

<br>

###  Explain `this` keyword with an example? ###

<br>

## Solution ##

<br>

* The javascript `this` references is changeable with the place where we use it .

* The this keyword may be used with some property , method or something . It will points reference to it according to where it is used .

<br>

## 1. `this` inside the metod  ##

<br>

* If we use this inside the `object method` , it will ponts to the Object .

<br>

### thisInMethod.js ###

<br>

```javascript
let Objcet = {
    Name : "vijay",
    age : 21,
    nameWithAge : function method(){ 
        return this.Name + " " + this.age  // Here this refers to the `Object` , We can access the properties inside this Object
    }
}
console.log(Objcet.nameWithAge());


```
<br>

## 2. `this` as global Object ##

<br>

* If we use this kwyword alone that means as global scope , it refers to the `window Object` .

* We can access the all properties , functions , Objects in the paricular window Objet using this.

* If we console the `this` in global , it will return empty `Object` . 

<br>

### thisAsGlobal.js ###

<br>

```javascript
console.log(this);   // this returns the empty Object 
```
<br>

### Output : ###

<br>

```javascript
{}
```
<br>

## Questio:6 ## 

<br>

### How ‘this’ inside the function and class? ###

<br>

## Solution ##

<br>

## this inside Function without strict ##

<br>


* The `this` keyword inside the function , will refer to the Window Oblect .

* The window Object points to the browser window which considers the variables as properties and functions as methods .

* So it works as same as inside the method that means give access to use the properties of window Object .

<br>

```javascript
function func(){
return this;
}
console.log(func());
```
<br>

### Output : ###

<br>

```javascript
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  }
}
```
<br>

## `this` inside function with strict mode ##

<br>

* If we use strict mode , the this keyword inside the function will provide the `undefined` value .

<br>

### thisInFunction.js ###

<br>

```javascript
"use strict";
function func(){
return this;
}
console.log(func());
```
<br>

### Output : ###

<br>

```javascript
undefined
```

<br>

## `this` in class ##

<br>

* Class is used to create instance of Object .

* We should use the `this` keyword  inside the `constructor` , `method` of the class .

* This , `this` keyword in the constructor refers to the instance variable we pass while craeting instace Object with new keyword .

* And the same `this` keyword inside the `method` refers to the class and we can access the properties of the class as we used in method .

<br>

### thisInClass.js ###

<br>

```javascript
class details {
  name = "vijay";
  age=57;
  like="apple";
  dislike="orange";
  constructor(like,dislike){
    this.like=like;
    this.dislike=dislike;
  }
  method(){
    return this.name;
  }

};

let variable = new details("Apple", "Orange");
console.log(variable);
console.log(variable.method());


```
<br>

### Output : ###

<br>

```javascript
details { name: 'vijay', age: 57, like: 'Apple', dislike: 'Orange' }
vijay
```
<br>

## Question : 7 ##

<br>

### Difference between map, reduce and filter methods? With an example ###

<br>

## Solution ##

## Array.map() Method ##

<br>

* Array.map() method allows us to modify an array without changing the original array .

<br>

### Example : Changing all elements in an array to uppercase using map ###

### arrayMap.js ###

<br>

```javascript
let namesWithLowercase = ["vijay" , "ajith" , "surya" , "karthi"];
let nameWithUppercase = namesWithLowercase.map( 
    names => {                     // Parameter each element of array like 'vijay', 'ajith' , etc
     names = names.toUpperCase();  // Modifing with our requirement and storing 
    return names;                  // returning Modified Array .
} );
console.log(nameWithUppercase);  // Modified array
console.log(namesWithLowercase); // Original Array
```
<br>

### Output : ###

<br>

```javascript
[ 'VIJAY', 'AJITH', 'SURYA', 'KARTHI' ]
[ 'vijay', 'ajith', 'surya', 'karthi' ]
```
<br>

## Array.reduce() method ##

<br>

* Array.reduce() method is used to reduce the array elements into a single element .

* This method is basically takes an accumulator and 3 parameters as follows  :

  * Accumulator : It is the initial value that we may pass or we may not pass according to our wish .
                  If we pass accumulator value , it will be taken as initial value before the array index 0 .

  * parameter1 : It will take the first index element and continue with iteration by changing it's value
                 
  * parameter2 : It will take the current value which is being iterating .

  * index : It return the current index value of the current element which is iterating .

<br>

### arrayreduce.js ###

```javascript
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
```
<br>

### Output : ###

<br>

```javascript
2400
I am vijay
```
<br>

## array.filter() ##

<br>

* Array.filter() method helps us to filter some elements in the array .

* This method will only return the elements that passes the condition we pass to the method .

<br>

### arrayFilter.js ###

<br>

```javascript
let withoutFilter = [ "Vijay" , "ajith" , 10 , 18 ];
let nameFilter = withoutFilter.filter(
    element => {
        return (typeof(element)==="string")
    }
)
let numberFilter = withoutFilter.filter(
    element => {
        return (typeof(element)==="number")
    }
)
console.log(nameFilter);
console.log(numberFilter);

```

<br>

## Questioon : 8 ##

<br>

### Count Total number of zeros from 1 up to 50 ###

<br>

## Solution ##

<br>

### countOfZero.js ###

```javascript
let countOfZero = 0;
for(let i = 1 ;  i <=50; i++){
    if(i%10===0){
        countOfZero+=1;
    }
}
console.log(countOfZero);

```
<br>

## Question : 9 ##

<br>

### The following array of numbers show the missing number? ([1,2,3,5,6]) ###

<br>

## Solution ##

<br>

```javascript
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



```
<br>

### Output : ###

<br>

```javascript
Missing NUmber:
4
Missing NUmber:
2
3
4
5
```
<br>

## Question : 10 ##

<br>

### Write a program for calculating age using Date of birth? (1990) ###

## Solution ##

<br>











