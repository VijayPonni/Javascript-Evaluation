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






