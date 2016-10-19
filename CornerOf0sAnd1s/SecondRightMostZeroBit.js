function secondRightmostZeroBit(n) {
    return Math.pow(2, (n >>> 0).toString(2).length - (n >>> 0).toString(2).lastIndexOf('0', (n >>> 0).toString(2).lastIndexOf('0') - 1) - 1);
};
