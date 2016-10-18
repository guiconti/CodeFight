function lateRide(n) {

    hour = parseInt(n/60);
    minutes = n%60;
    
    return (parseInt(hour/10) + hour%10) + (parseInt(minutes/10) + minutes%10);
    
};
