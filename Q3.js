        // Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and immediately displays the result.


        var squareOfaNumber = (function(num){

            let result = num * num;

        return result;

        })(5);


        const iife = squareOfaNumber;
        
        console.log(iife);

        
        // OUTPUT:

        // 25