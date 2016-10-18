function killKthBit(n, k) {

  return (n >>> 0).toString(2).substring((n >>> 0).toString(2).length - k, (n >>> 0).toString(2).length - k + 1) == 1 ? parseInt((n >>> 0).toString(2).substring(0, (n >>> 0).toString(2).length - k) + "0" + (n >>> 0).toString(2).substring((n >>> 0).toString(2).length - k + 1, (n >>> 0).toString(2).length),2): n;
  
};
