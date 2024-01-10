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

let v1=15;
V1=15;
// comparision operator
console.log(V1==20);
console.log(V1==="15",typeof V1);
console.log(V1!=15);
console.log(V1!=="15" ,typeof V1);

//RELATIONAL OPERATOR

console.log(v1>1);
console.log(v1<1);
console.log(v1<=1);
console.log(v1>=1);

//logical operator
v1="s";
console.log(7==5 || 7<2 || 7>5);
console.log(v1=="s");
console.log(!(v1=="s"));

//ternary or conditional operator
console.log(v1);
var output=v1=="s"? "v1 has value" : 
"v1 does not have value";
console.log(output);
// conditional chains with ternary
/*
m=34; 
//35 grade c 60 grade b 80 grade a 90 grade Distintion
var mark=(35<=m && m<60) ? "grade c" :
(60<=m && m<80) ? "grade B" :
(80<=m && m<90) ? "grade A" :
(90<=m && m<100) ? "grade Distintion" :
"Fail" ;
console.log(mark);
*/
function findgrade(){
    m=10
//35 grade c 60 grade b 80 grade a 90 grade Distintion
var mark=(35<=m && m<60) ? "grade c" :
(60<=m && m<80) ? "grade B" :
(80<=m && m<90) ? "grade A" :
(90<=m && m<100) ? "grade Distintion" :
"Fail" ;
console.log(mark);

}
findgrade();


function findgrade(m,d){
    var mark=(35<=m && m<60) ? "grade c" :
    (60<=m && m<80) ? "grade B" :
    (80<=m && m<90) ? "grade A" :
    (90<=m && m<100) ? "grade Distintion" :
    "Fail" ;
    console.log(mark,d);

}
var findgrade2=(m,e)=>{
    var mark=(35<=m && m<60) ? "grade c" :
    (60<=m && m<80) ? "grade B" :
    (80<=m && m<90) ? "grade A" :
    (90<=m && m<100) ? "grade Distintion" :
    "Fail" ;
    console.log(mark,e);
}
console.log(findgrade2(45,"eena"));

function checkgrade(){

    console.log("welcome");
    console.log("Trying");
}

var checkgrade1=(a,b)=>{
    // console.log(a+b);
 return a+b;
 };
console.clear();

//to store output in variable to print in console
var printmsg =checkgrade1(1,2);
console.log(printmsg);

// if else condition
function gradeChecking(m){
    if(35>m && m!=null)
    {
    console.log("no grade");
    console.log("Fail");
    }
    else{
        console.log("Pass");
        console.log("Other Grades");
    
    }
    }

    
    gradeChecking(45);

    console.clear();


    

    function checkingwithswitch(a){
        //console.log(a)

        
        switch(a){
            case 'Dinesh':
            console.log("Dinesh clear the exam",1);

            case 'Nancy':
            console.log("cleared the exam", typeof a);

            case 'Anand':
            console.log("Anand clear the exam");

            default:
             console.log('Fail')   
   }
    }

    checkingwithswitch("anand");




   

    // switch conditional statement

    function checkingwithswitch(a)
    {
        console.log(a, typeof a);

        var a=Number(a);
        console.log(a, typeof a);
        switch(a){

            case 1:
                console.log(1, typeof a);
                
            case 2:
                console.log(2, typeof a);
             
            case 3:
                console.log("Case 3", typeof a);    

            default:
                console.log("No value");    
        }

    }
    checkingwithswitch(prompt("Enter Value"));


