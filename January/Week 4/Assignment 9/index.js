num1 = prompt("Enter a number");
num1 = parseInt(num1);

if(isNaN(num1)){
    alert("Enter valid number")
}
else {

    counter = 0;

    for(i=1 ; i<=num1; i++){
        if(num1 %i ==0){
            counter = counter +1;
        }

    }

    if(counter>2){
        alert("Number is not prime");
    }

    else{
     alert("Number is prime");
    }
}