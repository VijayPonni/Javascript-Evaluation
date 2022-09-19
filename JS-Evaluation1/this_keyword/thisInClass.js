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
