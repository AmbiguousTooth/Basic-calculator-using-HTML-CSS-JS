function calculate(){
    const resul = document.getElementById('result');
    const operation = document.getElementById('sign');
    
    resul.value = "";

    const firstNum = document.getElementById('First');
    const secondNum = document.getElementById('Second');
    //console.log(firstNum, secondNum);
    
    if(operation.value == ""){
        alert('Enter a valid opeeration')
    }
    else{
        if(firstNum.value == "" || secondNum.value == ""){
            alert("Enter both numbers!")
        }
        else{
            if(operation.value == "+")
                resul.value = parseInt(firstNum.value) + parseInt(secondNum.value);
            else if(operation.value == "-")
                resul.value = parseInt(firstNum.value) - parseInt(secondNum.value);
            else if(operation.value == "*")
                resul.value = parseInt(firstNum.value) * parseInt(secondNum.value);
            else if(operation.value == "/")
                resul.value = parseInt(firstNum.value) / parseInt(secondNum.value);

        
        }    
    }
    


}