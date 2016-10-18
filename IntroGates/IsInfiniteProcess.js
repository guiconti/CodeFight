function isInfiniteProcess(a, b) {
    
    return b >= a && (b - a) % 2 != 1 ? false : true;
    
};
