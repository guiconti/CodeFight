function magicalWell(a, b, n) {

    var answer = 0;
    
    while (n > 0){
        
        answer += a * b;
        
        a++;
        b++;
        n--;
        
    }
    
    return answer;
    
};
