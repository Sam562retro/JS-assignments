function pro1(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var output = document.getElementById('output1');
    if(num1 === num2 && num2 === num3){
        output.innerHTML = `all the numbers are equal to ${num1}`;
    }
    else{
        if(num1 < num2){
            if(num3 < num2){
                output.innerHTML = `the largest number is ${num2}`;
            }
            else{
                output.innerHTML = `the largest number is ${num3}`;
            }
        }
        else{
            if(num3 < num1){
                output.innerHTML = `the largest number is ${num1}`;
            }
            else{
                output.innerHTML = `the largest number is ${num3}`;
            }
        }
    }
}

function pro2(){
    var output = document.getElementById('output2');

    var date = new Date();
    var nowDate = date.getDate();

    var userInput = document.getElementById('DOB').value;
    var DOB = new Date(userInput);

    var month_diff = Date.now() - DOB.getTime();
    var age_dt = new Date(month_diff);   
    var year = age_dt.getUTCFullYear();
    var age = year - 1970;

    if(age >= 18 && age <= 44){
        window.location.href='https://selfregistration.cowin.gov.in';
    }
    else if(age < 18){
        output.innerHTML = 'You are too young';
    }
    else{
        output.innerHTML = 'You are too old';
    }
}

function pro3(){
    var C = document.getElementById('C');
    var F = document.getElementById('F');
    if(C.value  === '' && F.value != '' ){
        C.value = (F.value - 32) * 5/9; 
        document.getElementById('output3').innerHTML ='';
    }
    else if(F.value === '' && C.value != ''){
        F.value = (C.value * 9/5) + 32;
        document.getElementById('output3').innerHTML ='';
    }
    else if(F.value != '' && C.value != ''){
        document.getElementById('output3').innerHTML ='Please empty the textbox you want to find the value of';
    }
    else{
        document.getElementById('output3').innerHTML ='Please enter the values';
    }
}


function pro4(){
    var number = document.getElementById('numRange').value;
    if(number > 50 && number < 100){
        document.getElementById('output4').innerHTML = 'The number entered is between 50 and 100';
    }
    else{
        document.getElementById('output4').innerHTML = 'The number is not between 50 and 100';
    }
}

function pro5(){
    var stringEntry = document.getElementById('palinString').value;
    var output = document.getElementById('output5');
    var stringReverse = stringEntry.split("").reverse().join("");
    if(stringEntry === stringReverse){
        output.innerHTML = `the reverse of ${stringEntry} is ${stringReverse} and ${stringEntry} is a palindrome`;
    }
    else{
        output.innerHTML = `the reverse of ${stringEntry} is ${stringReverse} and ${stringEntry} is not a palindrome`;
    }
}


function pro6(){
    var str = document.getElementById('entryHTML').value;
    if ((str===null) || (str===''))
       return false;
    else
        str = str.toString();
    
    document.getElementById('output6').innerHTML =  str.replace(/<[^>]*>/g, '');
}

function pro7(){
    for(i = 20; i <= 30; i++){
        if(i % 2 == 0){
            console.log(`${i} is even`);
        }
        else{
            console.log(`${i} is odd`);
        }
    }
}

function pro8(){
    var array1e = document.getElementById('arrays').value;
    var array2e = document.getElementById('arrays2').value;
    var array1e = document.getElementById('arrays').value;
    var array2e = document.getElementById('arrays2').value;
    
    array1e = array1e.replace('[', '');
    array1e = array1e.replace(']', '');
    array2e = array2e.replace('[', '');
    array2e = array2e.replace(']', '');

    var array1 = array1e.split(',');
    var array2 = array2e.split(',');

    var fullArray = array1.concat(array2);
    var difference = []
    
    fullArray.forEach(element =>{
        if(!difference.includes(element)){
            difference.push(element);
        }
    })
    document.getElementById('output8').innerHTML = `first Array : ${array1} second Array: ${array2} Difference : ${difference}`;
}

function pro9(){
    var string = document.getElementById('vowels').value;
    var y = string.length;
    var a = 0, e = 0, i = 0, o = 0 ,u = 0;
    for(j = 0; j <= y; j++){
        var z = string[j];
        if(z == 'a'|| z == 'A'){
            a = a+1;
        }
        else if(z == 'e' || z == 'E'){
            e = e+1;
        }
        else if(z == 'i' || z == 'I'){
            i = i+1;
        }
        else if(z == 'o' || z == 'O'){
            o = o+1;
        }
        else if(z == 'u' || z == 'U'){
            u = u+1;
        }
    }
    document.getElementById('output9').innerHTML = `A : ${a}, E = ${e}, I = ${i}, O = ${o}, U = ${u}`;
}