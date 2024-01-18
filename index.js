// let a = 5;
var num1 = 5;
var num2 = 6;
var Name = "Rajat";
console.log(Name);
function sum(a, b) {
    return a + b;
}
console.log(sum(12, num2));
var currentAddress;
currentAddress = ['Noida', 'Uttar Pradesh', 201301];
var permanentAddress;
permanentAddress = ['Ballia', 'U.P.', 277503];
console.log(permanentAddress);
console.log(currentAddress);
function add(f, l) {
    return l ? f + ' ' + l : f;
}
console.log(add('Rajat', 'Gupta'));
var p1, p2;
p1 = { id: 1, name: 'Rajat' };
p2 = { id: 2, name: 'Bhupendra Jogi', age: 38 };
console.log(p1, p2);
//  Union
var p3;
var p4;
var p5;
p3 = { name: "person 3", age: 23, id: 4 };
p4 = { name: "person 4", age: 18, rollNo: 21 };
p5 = { name: "person 5", age: 20, rollNo: 21, id: 321272 };
console.log(p3, p4, p5);
// Intersection
var p6;
//    p6 = p5; // not assignable
p6 = { name: "person 6", age: 13, rollNo: 24, id: 124421 };
console.log(p6);
var abc, xyz;
xyz = 12345;
abc = "something";
console.log(abc, xyz);
