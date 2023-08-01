 //Return an array of fibonacci numbers starting from 0.


function fibonacciGenerator (n) {    
    //  Array with preset values 
    const answr = [0, 1];

    if (n === 1) {
        return [0];  
    } else if (n === 2) {
        return answr; 
    } else { 
        // Continues to add to array until it reaches n length
        while (answr.length < n) {
          // Retrieves the last indices of array in order to add next num
          answr.push(answr[answr.length - 2] + answr[answr.length - 1]);   
        }
        return answr
    }
    
}

