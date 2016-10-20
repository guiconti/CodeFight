function countSumOfTwoRepresentations2(n, l, r) {
    
    var count = 0;

    // O Loop poderia ser cortado na metade
    for (var a = l; a <= r;a++){
        
        if (n - a <= r && n - a >= l){
            count ++;
        }
        
    }
    
    return Math.round(count/2);
    
};
