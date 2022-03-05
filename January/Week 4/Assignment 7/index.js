num1 = prompt("Please enter how many term you want ot print in fibonacci series");
num1 = parseInt(num1);

var a=0, b=1, next=0;
var string1= "";

if(num1<1){
    console.log("Please enter number greater than ZERO");
}

else{
    string1 = ("0" + " ")   

    for(i=1; i< num1; i++){
        string1= (string1 + b + " ");
	next = a + b;
	a = b;
	b = next;
	
    }
    console.log(string1);
}