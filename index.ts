// let a = 5;

let num1 : number = 5;
let num2 : number = 6;

let Name : string = "Rajat";

console.log(Name);

function sum(a : number,b : number):number{
    return a+b;
}

console.log(sum(12,num2));

let currentAddress : [string,string,number];

currentAddress=['Noida','Uttar Pradesh',201301];

let permanentAddress : [city:string,state:string,pin_code:number];

permanentAddress = ['Ballia','U.P.',277503];
console.log(permanentAddress);

console.log(currentAddress);

function add(f:string,l?:string){
    return l ? f+' '+l : f;
}

console.log(add('Rajat','Gupta'));

// interface

interface Person{
    id:number;
    name:string;
    age?:number;
}

let p1,p2: Person;
p1 = { id:1,name:'Rajat' }
p2 = { id:2,name:'Bhupendra Jogi',age:38 }

console.log(p1,p2);

interface Student{
    rollNo:number;
    name:string;
    age:number;
}

//  Union

let p3 : Person | Student;
let p4 : Person | Student;
let p5 : Person | Student;

p3 = {name:"person 3",age:23,id:4}
p4 = {name:"person 4",age:18,rollNo:21}
p5 = {name:"person 5",age:20,rollNo:21,id:321272}

console.log(p3,p4,p5);


// Intersection

let p6 : Person & Student;

//    p6 = p5; // not assignable

p6 = {name:"person 6",age:13,rollNo:24,id:124421}

console.log(p6);

//  Type alias

type Count = string | number;

let abc,xyz : Count;
xyz = 12345;
abc = "something";

console.log(abc,xyz);

// never

type Never = string & number;

let nnn : Never;