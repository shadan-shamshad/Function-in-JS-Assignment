//Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using recursion. Test the function with different inputs.


        function recursionFactorial(num){
            
            if( num < 0){
            
                throw new Error("num must not be negative");

            }
            if( num === 0 || num === 1){

                return 1;

            }else{

                return num * recursionFactorial(num-1);
            }
        
        }

        const fact = recursionFactorial(6);
        console.log("Factorial of a non-negative integer using recursion is ", fact )

        // OUTPUT:
        // recursionFactorial(6);
        // Factorial of a non-negative integer using recursion is  720

         // OUTPUT:
        // recursionFactorial(-1);
        //   throw new Error("num must not be negative");
        

