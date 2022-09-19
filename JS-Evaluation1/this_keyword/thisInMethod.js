let Objcet = {
    Name : "vijay",
    age : 21,
    nameWithAge : function method(){ 
         return this.Name + " " + this.age  // Here this refers to the `Object` , We can access the properties inside this Object
    }
}
console.log(Objcet.nameWithAge());

