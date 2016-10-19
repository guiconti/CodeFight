function mirrorBits(a) {

    return parseInt((a >>> 0).toString(2).split("").reverse().join(""),2);
    
};
