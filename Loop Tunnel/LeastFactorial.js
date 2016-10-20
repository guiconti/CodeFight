function leastFactorial(n) {

    var k = 1;
    var factorial = 1;
    
    while (factorial < n){
        
        k++;
        factorial *= k;
        
    }
    
    return factorial;
    
};
