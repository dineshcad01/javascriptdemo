//to use console check the below line
console.log("Welcome to java script");
console.log(1);
// to print objects in console
console.log({fname:"Dinesh", gender:"Male", DOB:"06/06/1999"});
console.table({fname:"Dinesh", gender:"Male", DOB:"06/06/1999"});
// to print Array in console
console.log([20,25,30,10]);
console.table([20,25,30,10]);
console.log(true);

// print in console with variable declartion

//var a;
//let b;
var a=10;
let b=20;
const c=5;

console.log(a);
console.log(b);
console.log(c);
a=5;
console.log(a);
b=10;
console.log(b);
console.log(c);

a=5.01;
console.log(a);
b="Dinesh";
console.log(b);

var a=100;
console.log(a);
console.log(b);

var a={Name:"Dinesh", Gender:"Male"};
console.log(a);
console.table(a);

 b={Name:"Dinesh", Gender:"Male"};
console.log(a);
console.table(a);

a=[10,25,4,10,5];
console.log(a);
console.table(a);

b=[10,25,4,10,5];
console.log(b);
console.table(b);

// to know what type of values given

a=99
console.log(typeof a);

b=.001
console.log(typeof b);

a="Dinesh";
console.log(a+" : "+typeof a);

b="true";
console.log(b+" : "+ typeof b)

a=[202,105,110];
console.log(typeof a)

b={Name:"Dinesh", Gender:"Male"};
console.log(typeof b)

// type conversation

a=2000;
console.log(typeof a);
a=a.toString();
console.log(typeof a)

a=parseInt(a);
console.log(typeof a);
console.log(a);

a=parseFloat(a);
console.log(typeof a);


