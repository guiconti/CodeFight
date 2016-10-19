function arrayPacking(a) {

    var binaryString = 0;
    
    for (var i = a.length -1; i >= 0; i--){
        
        var actualNumber = (a[i] >>> 0).toString(2);
        
        actualNumber = "0".repeat(8 - actualNumber.length) + actualNumber;
        
        binaryString += actualNumber;
        
    }
    
    return(parseInt(binaryString,2));
    
};
