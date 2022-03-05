var N = prompt("Length of number");

arr = [];

for(i=1; i<=N; i++){
    a = prompt("Enter your number" + i);
    a = parseInt(a);
    arr.push(a);
}

max = arr[0];

for(i=1 ; i<N ; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}

alert("Maximum number is = " + max);