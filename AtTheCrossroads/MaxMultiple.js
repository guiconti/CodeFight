function maxMultiple(divisor, bound) {

    answer = 0;
    
    while (bound > 0){
        
        if (bound%divisor == 0) {
            
            answer = bound;
            break;
            
        }
        bound--;
        
    }
    
    return answer;
    
};
