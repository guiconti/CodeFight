function lineUp(commands) {

    var commandsArray = commands.split('');
    
    var sameDirection = true;
    
    var count = 0;
    
    for (var i = 0; i < commandsArray.length; i++){
        
        if (commandsArray[i] == 'L' || commandsArray[i] == 'R'){
            sameDirection = !sameDirection;
        }
        
        count += sameDirection ? 1 : 0;
        
    }
    
    return count;
    
};
