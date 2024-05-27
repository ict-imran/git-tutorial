//console.log("Hello world");

//variable function

//const z=function(a,b,c) {return a*b*c}
//let k=z(2,2,3);
//console.log(k);


//Arrow function
//const x = (x, y) => x * y;

//let b=x(5,4);
//console.log(b);


const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  // This will return "John Doe":
  let m = person.fullName();
  console.log(m);