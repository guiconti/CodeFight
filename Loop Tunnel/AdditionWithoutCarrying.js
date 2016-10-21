function additionWithoutCarrying(param1, param2) {

    var answer = "";
    
    var firstNumber = param1.toString().split('').reverse();
    var secondNumber = param2.toString().split('').reverse();
    
    var length = firstNumber.length >= secondNumber.length ? firstNumber.length : secondNumber.length;
    
    for (var i = 0; i < length; i++){
        
        var auxFirstNumber = firstNumber.length > i ? parseInt(firstNumber[i]) : 0;
        
        var auxSecondNumber = secondNumber.length > i ? parseInt(secondNumber[i]) : 0;
        
        answer = ((auxFirstNumber + auxSecondNumber)%10).toString() + answer;
        
    }
    
    return parseInt(answer);
    
};
