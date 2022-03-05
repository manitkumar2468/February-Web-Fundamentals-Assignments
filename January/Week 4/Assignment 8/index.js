str = prompt("Enter a string")

str = str.toUpperCase()

len = str.length

counter = 0;

for (i=0; i< len; i++){
    if(str[i] == "A" || str[i] == "E" ||str[i] == "I" ||str[i] == "O" ||str[i] == "U"){
        counter = counter + 1;
    }
}

alert("Total vowel in your string is = " + counter);



