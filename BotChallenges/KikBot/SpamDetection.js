function spamDetection(messages, spamSignals) {
    
    var fewer5Words = 0;
    
    function User(userName, message, count) {
        this.userName = userName;
        this.messages = [{}];
    }
    
    var messageUser = [];
    
    var allMessagesArray = [];
    
    var spamSignalsCount = [];
    
    for (var i = 0; i < messages.length; i++){
        
        var actualMessage = messages[i][0];
        var actualUser = messages[i][1];
        
        // PHASE 1
        fewer5Words += actualMessage.split(' ').length < 5 ? 1 : 0;
        
        var newUser = true;
        
        // PHASE 2
        for (var j = 0; j < messageUser.length; j++){
            
            if (messageUser[j].userName == actualUser){
                
                var newMessageUser = true;
                
                for (var k = 0; k < messageUser[j].messages.length; k++){
                    
                    if (messageUser[j].messages[k].message == actualMessage){
                        
                        messageUser[j].messages[k].count += 1;
                        newMessageUser = false;
                        break;
                        
                    }
                    
                }
                
                if (newMessageUser){
                    
                     var seila = {
                        message: actualMessage,
                        count: 1
                    };
                    
                    messageUser[j].messages.push(seila);
                    
                }
                
                newUser = false;
                
                break;
                
            }
            
        }
        
        if (newUser){
            
            var newMessageUser = {
                userName: actualUser,
                messages: [{
                    message: actualMessage, count: 1
                }]
            };
            
            messageUser.push(newMessageUser);
            
        }
        
        // PHASE 3
        
        var newMessageAtAll = true;
        
        for (var j = 0; j < allMessagesArray.length; j++){
            
            if (allMessagesArray[j].message == actualMessage){
                
                newMessageAtAll = false;
                allMessagesArray[j].count += 1;
                break;
                
            }
            
        }
        
        if (newMessageAtAll){
            allMessagesArray.push({
                message: actualMessage,
                count: 1
            });
        }
        
        // PHASE 4

        for (var j = 0; j < spamSignals.length; j++){
            
            if (actualMessage)
            
        }
        
    }
    
    var usersSpammed = "";
    
    var answer = [];
    
    // PHASE 1

    var fraction = reduce(fewer5Words,messages.length);
    
    answer.push(fewer5Words / messages.length > 0.9 ? "failed: " + fraction[0] + "/" + fraction[1] : "passed");
    
    // PHASE 2
    for (var i = 0; i < messageUser.length; i++){
        
        var actualUsername = messageUser[i].userName;
        var totalMessages = messageUser[i].messages.length;
        
        for (var j = 0; j < messageUser[i].messages.length; j++){
            
            if (messageUser[i].messages[j].count > 1 && messageUser[i].messages[j].count/totalMessages > 0.5){
                
                if (usersSpammed == ""){
                    usersSpammed = "failed:";
                }
                
                usersSpammed += " " + actualUsername;
                
            }
            
        }
        
    }
    
    if (usersSpammed == ""){
        usersSpammed = "passed";
    }
          
    answer.push(usersSpammed);
    
    //phase 3
    
    var messagesSpammed = "";
    
    for (var i = 0; i < allMessagesArray.length; i++){
        
        if ((allMessagesArray[i].count / messages.length) > 0.5 && messages.length > 1){
            
            if (messagesSpammed == ""){
                messagesSpammed = "failed:";
            }
            
            messagesSpammed += " " + allMessagesArray[i].message;
            
        }
        
    }
    
    if (messagesSpammed == ""){
        messagesSpammed = "passed";
    }
    
    answer.push(messagesSpammed);
    
    return answer;
    
}

function reduce(numerator,denominator){
    
  var gcd = function gcd(a,b){
      
    return b ? gcd(b, a%b) : a;
      
  };
    
  gcd = gcd(numerator,denominator);
    
  return [numerator/gcd, denominator/gcd];
    
}
