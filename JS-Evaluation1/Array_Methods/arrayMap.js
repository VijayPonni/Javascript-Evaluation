let namesWithLowercase = ["vijay" , "ajith" , "surya" , "karthi"];
let nameWithUppercase = namesWithLowercase.map( 
    names => {                     // Parameter each element of array like 'vijay', 'ajith' , etc
     names = names.toUpperCase();  // Modifing with our requirement and storing 
    return names;                  // returning Modified Array .
} );
console.log(nameWithUppercase);  // Modified array
console.log(namesWithLowercase); // Original Array