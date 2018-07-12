var first=document.getElementById("first-number");
var second=document.getElementById("second-number");
var sum=document.getElementById("sum");
first.addEventListener("input",add);
second.addEventListener("input",add);
function add(){
    var one= parseFloat(first.value);  
    var two=parseFloat(second.value);
    sum.innerHTML="Sum is : "+(one+two);
};

var first=document.getElementById("first-number");
var second=document.getElementById("second-number");
var subt=document.getElementById("subt");
first.addEventListener("input",sub);
second.addEventListener("input",sub);
function sub(){
    var one= parseFloat(first.value);  
    var two=parseFloat(second.value);
    subt.innerHTML="Difference is :"+(one-two);
};


var first=document.getElementById("first-number");
var second=document.getElementById("second-number");
var multy=document.getElementById("multy");
first.addEventListener("input",mul);
second.addEventListener("input",mul);
function mul(){
    var one= parseFloat(first.value);  
    var two=parseFloat(second.value);
    multy.innerHTML="Product is :"+(one*two);
};

var first=document.getElementById("first-number");
var second=document.getElementById("second-number");
var divd=document.getElementById("divd");
first.addEventListener("input",div);
second.addEventListener("input",div);
function div(){
    var one=parseFloat(first.value);
    var two=parseFloat(second.value);
    divd.innerHTML="Result is :  " +(one/two);
};