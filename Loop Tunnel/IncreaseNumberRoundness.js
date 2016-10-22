function increaseNumberRoundness(n) {

    var numberAsString = n.toString();
    
    var firstIndexOfZero = numberAsString.indexOf("0");
    
    var lookString = numberAsString.substring(firstIndexOfZero + 1, numberAsString.length).split('0').join('');
    
    if (lookString == "" || firstIndexOfZero == -1){
        
        return false;
        
    } else {
                 
        var reg = new RegExp(/^[1-9]*$/gm);
        
        return reg.test(lookString);
        
    }
    
};
