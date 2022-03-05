var a=prompt("Enter number 1");
var b=prompt("Enter number 2");
var c=prompt("Enter number 3");

a= parseInt(a);
b= parseInt(b);
c= parseInt(c);

if(a<=b && a<=c){
    alert(" 1st number is minimum = " + a);
    console.log(a);
}

else if(b<=a && b<=c){
    alert(" 2nd number is minimum = " + b);
    console.log(b);
}

else{
    alert(" 3rd number is minimum = " + c);
    console.log(c);
}