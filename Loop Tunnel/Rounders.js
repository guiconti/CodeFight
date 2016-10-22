function rounders(value) {

    var valueString = value.toString().split('');
    
    for (var i = valueString.length - 1; i > 0; i--){
        
        if (parseInt(valueString[i]) >= 5 && i != 0){
            
            valueString[i - 1] = parseInt(valueString[i - 1]) + 1
            
        }
        
        valueString[i] = "0";
        
    }
    
    return parseInt(parseInt(valueString.join('')));
    
};
