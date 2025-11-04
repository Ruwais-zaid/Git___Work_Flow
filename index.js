//Q 1
console.log("Value of age is ",age)
var age=20
console.log("Value og age is",age)
//Hoisted :- Javascript have Global excution Context
//Q2 
//age =100
//console.log("Value of age is :" ,age)
//let age=100
//ans error because let is declared before use let have blocked scope

//Q3
myfun();
var myfun = function(){
    console.log("First")
}
myfun();
function myfun(){
    console.log("Second")
}
function myfunc(){
    console.log("third")
}
function myfunc(){
    console.log("fourth")
}
myfun();