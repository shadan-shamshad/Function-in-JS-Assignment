
    // Objective: Create a JavaScript function calculateFactorial(num) that returns the factorial of a given positive integer num. The factorial of a number is the product of all positive integers less than or equal to that number. Example: Input: calculateFactorial(5) Output: 120 (as 5! = 5 × 4 × 3 × 2 × 1 = 120)

            let num = 5;

                function calculateFactorial(num){

                    let factorial = 1;

                        if(num === 0){

                            return 1;

                        }else {

                                for(let i = 1; i <= num; i++){

                                    factorial *= i;
                                }

                    console.log(factorial)

                        }
                    
                }
                
                calculateFactorial(num)
                
                // OUTPUT:
                // 120







