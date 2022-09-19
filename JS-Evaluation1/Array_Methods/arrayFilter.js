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

