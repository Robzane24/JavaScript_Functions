console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    for(let i = 0; i < count; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you are 16.`;

    if (age > aboveSixteen){
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}
checkAge("Rob", 15)

// Exercise 3 Section
console.log("EXERCISE 3: \n==========\n");

function checkQuadrant(x, y){
if (x > 0 && y > 0){
    return "Quadrant 1";
    } else if ( x < 0 && y > 0){
    return "Quadrant 2";
    } else if (x < 0 && y < 0){
    return "Quadrant 3";
    } else if (x > 0 && y < 0){
    return "Quadrant 4";
    } else if (x == 0 && y != 0){
    return "X Axis";
    } else if (x != 0 && y == 0){
    return "Y Axis";
    } else {
        return "Origin";
    }
}

// Exercise 4 Section 
console.log("EXERCISE 4: \n==========\n");

// function isATriangle(a, b , c){
//     if(a + b > c || a + c > b || b + c > a){
//         console.log("It is a valid Triangle");
//     }
// }

function checkTriangle(a, b, c){
let isValid = false;
if(a + b > c && a + c > b && b + c > a){
    isValid = true;
    console.log("It is a valid Triangle");
}
if(isValid == true){
    if (a == b && b == c){
        console.log("It is an Equalateral Triangle");
    } else if (a == b || b == c || a == c){
        console.log("It is an Isosceles Triangle");
    } else {
        console.log("It is a Scalene Triangle");
    }
} else {
    console.log("Invalid Triangle");
}
}
 checkTriangle(1, 2, 2)
 checkTriangle(2, 2, 2)
 checkTriangle(1, 2, 3)
 checkTriangle(1, 1, 2)