//ARROW FUNCTIONS!!
    //only work as anonymous function EXPRESSIONS
        // arr.map(function(x){  //this is a function expression
        //     return x * 2;
        // }) //becomes...
        // arr.map(x => x * 2);
    //MUST put parentheses around parameters if there are 0 or 2+ parameters.
    //return statement is implied if you leave out curly braces
    //arrow fxns do not make their own 'this'


function cheat(){
    //this is a function DECLARATION
}

// const add = function(x,y) {
//     return x + y; //this is a function EXPRESSION -- arrow functions ONLY WORK ON EXPRESSIONS
// };

const add = (x,y) => {
    return x + y;
}; 

    //ideal for shortening callbacks
[1,2,3].forEach((n, idx) => {
    console.log(n, idx);
});

//using a regular function expression: 
[2, 3, 6, 7, 88, 123].reduce(function(max, curNum){
    return Math.max(max, curNum)
});
//using an arrow function expression:
[2, 3, 6, 7, 88, 123].reduce((max, curNum) => {
    return Math.max(max, curNum)
});

// *************************
// ARROW FUNCTION SHORTCUTS
// *************************

//with parentheses around SINGLE parameter
[1,2,3,4,5].forEach((n) => {
    console.log(n * 10);
})
//without parentheses ONLY around SINGLE parametor
// [1,2,3,4,5].forEach( n => { //this should work...but didn't for me? 
//     console.log(n * 10);
// });

//ARROW FUNCTION WITH NO PARAMETERS AT ALL
const greet = () => {
    console.log('hello!!!')
}

//arrow function with IMPLICIT RETURN
    //only works if there is a SINGLE EXPRESSION in the function body.
        //this one, calling odd numbers 'odd' and even numbers 'even', won't work because there are multiple expressions in the fxn body.
        [1,2,3,4,5,6].map((n) => {
            if(n % 2 === 0){
                return 'even'; //one expression
            }
                return 'odd'; //two expression
        })  
            //same thing different way, with ternary operator.
        // [1,2,3,4,5,6].map((n) => (n % 2 === 0 ? 'even' : 'odd'));
        


    //here's one finding even numbers in array.
const evenNums = [1,2,3,4,5,6].filter((num) => num % 2 === 0); //[2,4,6]
    //here's one doubling a number.
const double = (n) => n * 2;
    //same as this...
const dubble = function(n){
    return n * 2;
}


const dailyRainTotals = [ [1.2, 0.35, 2.1], [1.0, 7.5, 0.5], [1.2, 0.6, 1.8,] ];  // Goal : Return sum for each subarray [3.65, 9.0, 3.6]
dailyRainTotals.map((hourlyRainTotals) => {
    return hourlyRainTotals.reduce((sum, inchesOfRain) =>{
        return sum + inchesOfRain;
    })
})
    //rewrite with implicit returns:
dailyRainTotals.map((hourlyRainTotals) => hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain)
)   //THIS WORKS BECAUSE THE RETURN (reduce fxn) is a single expression


//arrow function GOTCHAS!!!!!!!!!!
    
    //1. IF YOU WANT TO RETURN AN OBJECT, MAKE SURE IT'S WRAPPED IN () OR ON MORE THAN ONE LINE!

    //want this:
    // {
    //     double: 10,
    //     square: 25 
    // }
        //with explicit return: 
    const makeMath = (num) => {
        return {
            square: num*num, 
            double: num * 2
        };
    };
        //with implicit return:
    // const doMath = (num) => 
    //     {
    //         square : num*num, 
    //         double : num * 2
    //     };  //THIS DOESN'T WORK! GOTCHA!!

        //Here's how to do it correctly:
    const doMath = (num) => 
        ({
            square : num*num, 
            double : num * 2
        });

    
    //2. ARROW FUNCTIONS & this
        //arrow fxns do not have their own 'this' context. if your function uses keyword this, be wary!
        //You should not use arrow functions:
            //in an object method
            //when you need your own keyword 'this'
    
    const cat = {
        name: "Bubs",
        meow: function(){
            return `${this.name} says MEOW!`;  //THIS refers to the object (cat)
        }
    } //cat.meow() --> 'Bubs says MEOW!'

    const badCat = {
        name: "Bubs",
        meow: () => {
            return `${this.name} says MEOW!`;  
        }
    } //cat.meow() --> ' says MEOW!'  --> this is because 'this' doesn't return in arrow functions




