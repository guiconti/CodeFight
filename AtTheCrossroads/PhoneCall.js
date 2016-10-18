function phoneCall(min1, min2_10, min11, s) {

    minutes = 0;
    
    if (s >= min1) {
        
        minutes ++;
        
        s -= min1;
        
        console.log(minutes + " e " + s);
        
        count = 9;
        
        while (s - min2_10 >= 0 && count > 0) {
            
            minutes++;
            
            s -= min2_10;
            count--;
            
        }
        
        while (s - min11 >= 0 && count == 0){
            
            minutes++;
            
            s -= min11;
            
            console.log(minutes + " e " + s);
            
        }
        
    }
    
    return minutes;
    
};
