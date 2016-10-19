function rangeBitCount(a, b) {

    var oneCounter = 0;
    
    for (;a <= b; a++){
        
        oneCounter += (a >>> 0).toString(2).split('1').length - 1;
        
    }
    
    return oneCounter;

};
