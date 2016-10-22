function candles(candles, makeNew) {

    var actualCandles = candles;
    
    while (actualCandles >= makeNew) {
        
        var leftovers = actualCandles%makeNew;
        
        var actualCandles = parseInt(actualCandles / makeNew) + leftovers;
        
        candles += actualCandles - leftovers;
        
    }
    
    return candles;
    
};
