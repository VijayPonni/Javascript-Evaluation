// Anonymous Function with variable assignment
let anonymousFunction = function(){ 
    console.log(" I am anonymous function with variable assigment"); 
}
anonymousFunction();

// Passing argument to the Anonymous Function 

let argumentAnonymousFunction = function(a,b){
   let c=a*b;
   console.log(c);
}
argumentAnonymousFunction(1,4);


//Anonyous function as callback function 

//  setTimeout( 
//     function(){
//         console.log("hi");
//     }
//     , 2000)


// Self executing Anonymous function
(function(){
    console.log(" I am self executing Anonymous function");
})
()

//Arrowfunction 

let Arrowfunction = (a)=> {
    let space = ' ';
    return b = "Hello" + space +  a;
}
console.log(Arrowfunction("vijay"));


//Arrow function with single statment 

let singleStatementArroeFunction = () => console.log("I am single statement Arrow function . SO i don't want { ... } "); 
singleStatementArroeFunction();

