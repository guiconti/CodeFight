function knapsackLight(value1, weight1, value2, weight2, maxW) {

    if (weight1 + weight2 <= maxW){

        answer = value1 + value2;

    } else if(weight1 <= maxW){

        if (value1 >= value2 || weight2 > maxW){

            answer = value1;

        } else if (weight2 <= maxW){

            answer = value2;

        }
        
    } else if (weight2 <= maxW){

        answer = value2;

    } else {

        answer = 0;

    }
    
    return answer;
    
};
