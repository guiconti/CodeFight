function appleBoxes(k) {

    var yellowApples = 0;
    var redApples = 0;
    
    for (var i = 1; i <= k; i++){
        
        if (i % 2 != 0){
            
            yellowApples += i * i;
            
        } else {
            
            redApples += i * i;
            
        }
        
    }
    
    return redApples - yellowApples;
    
};
