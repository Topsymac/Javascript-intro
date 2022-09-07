//Programatically count the number of characters in 'Internationalisation' and log the output to console.
/*function wordCount() {
    const str = 'Internalisation';
    console.log(str.length);
}
wordCount();*/

//Convert the following string to an array 'The quick brown fox jumps over a lazy dog' and log it console.
/*function wordarray() {
    let str1 = 'The quick brown fox jumps over a lazy dog';
    const split_string = str1.split(" ");
    console.log(split_string)
}
wordarray();*/


//Validate the length of a password input from your user using the prompt method then log only passwords longer than 8 characters. If password is shorter, alert with an error message of your choice.
/*function login() {

    let password = prompt('Enter your password');

    if (password.length >= 8) {
        alert('Congratulations, you are logged in')
            //console.log(length_password.length + ' password valid')
    } else if (password.length < 8) {
        alert('error')
            //console.log(length_password.length + ' password invalid')
    }
}

login();*/


//Create a person object with name, age, is_married, salary as properties then lo
/*function aboutme() {
    const myself = {
        name: 'Yetunde',
        age: '22',
        is_married: 'Yes',
        mysalary: '$10,000',
    };
    console.log(myself)
        //console.log(myself.name)
}

aboutme()*/

//let number = 0
//while (100 >= number) {
//   console.log("Even Number " + number);
//    number = number + 2;
//}


//function number() {
//    let oddNumbers = 1;
//    while (oddNumbers < 100) {
//        console.log("Odd Number " + oddNumbers);
//        oddNumbers = oddNumbers + 2;
//  }
//}
//number();

//let numb = 20;
//do {
//  console.log(num);
//num++;
//while (19 > num);
//}

//Assignment 
//let countdown = 100;
//while (countdown > 0) {
//    countdown--;
//   console.log(countdown);
//}
//Tutorial

//function game() {
//    let gaming = prompt('Enter a number');

//    let $random = console.log(Math.floor(Math.random() * 10));

//    if (gaming == $random) {
//       return;
//     alert('Congratulations!!! You won')
//   } else if (gaming !== $random) {
//      alert('Game Over')
//   }
//}
//game();

/*function login() {

    let password = prompt('Enter your password');

    if (password.length >= 8) {
        alert('Congratulations, you are logged in')
            //console.log(length_password.length + ' password valid')
    } else if (password.length < 8) {
        alert('error')
            //console.log(length_password.length + ' password invalid')
    }
}
login();*/

//Assignment
//function game() {
//    let attempts = 3;
///    let $random = (Math.floor(Math.random() * 10));

//    while (attempts > 0) {
//        let gaming = prompt('Enter a number');
//       if (gaming === $random) {
//            alert('Congratulations!!! You won');
//            break;
//        } else {
//            alert('Failed! Try again');
//            attempts--;
//        }
//        if (attempts === 0) {
//            alert('Game Over');
//        }
//    }
//}
//game();

//let weathers = ['rainy', 'stormy', 'sunny'];
//let weather = prompt('Enter the weather');

//switch (weather) {
//    case 'rainy':
//alert("Don't go out");
//break;
//case 'stormy':
//   console.log("Brace yourself and turn off the TV");
//   break;
//case 'sunny':
//   alert("it's a nice weather today!");
//   break;
//default:
//    console.log("I don't know what today will bring");
//   break;
//   }

/*function game() {
    let randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    let userInput = prompt('You must enter a number');

    for (let i = 1; i < 3; i++) {
        if (Number(userInput) === randomNumber) {
            alert('You guessed right');
            break;
        } else {
            userInput = prompt('Try again');
            if (i === 2) {
                alert('Game over');
                break;
            }
        }
    }
}
game();*/


//function game() {
//    let attempts = 3;
///    let $random = (Math.floor(Math.random() * 10));

//    while (attempts > 0) {
//        let gaming = prompt('Enter a number');
//       if (gaming === $random) {
//            alert('Congratulations!!! You won');
//            break;
//        } else {
//            alert('Failed! Try again');
//            attempts--;
//        }
//        if (attempts === 0) {
//            alert('Game Over');
//        }
//    }




// function game() {
//     let tries = 0; // tries =4 this is how we track how many times the user has tried
//     let $random = (Math.floor(Math.random() * 10)); // this is  how we generate random numbers 
//     let $random1 = (Math.floor(Math.random() * 10));
//     let $random2 = (Math.floor(Math.random() * 10));
//     let hasWon = false; //This is how we know if the user has won
//     let correctTries = 0; // correctTries = 2
//     let correctArray = [] // This is the array to track already inputted numbers
//     let userInput;

//     console.log($random, $random1, $random2); // This is to show the random numbers in the console



//     while (hasWon === false) {
//         userInput = prompt("Enter your input and let's see!");
//         //Validate the user input
//         if (userInput < 0 || userInput > 9) {
//             alert('Invalid Entry! Please enter a number between  0 and 9'); // This is to track that only whole numbers between 0 and 9 are inputted
//         } else if (correctArray.includes(userInput)) {
//             alert("you already chose that number") // New Trial 
//         } else {
//             correctArray.push(userInput); // New Trial
//             console.log(correctArray); // New Trial
//             tries += 1; // This is to count number of trials
//             if (
//                 Number(userInput) === $random ||
//                 Number(userInput) === $random1 ||
//                 Number(userInput) === $random2
//             ) {
//                 // correctArray.includes(userInput)
//                 alert('Keep it up! You got it right!'); // this is to track when the user gets a correct guess
//                 correctTries += 1; //This is to count number of correct trials 

//                 if (correctTries === 2) {
//                     hasWon = true; // This is to end the loop 
//                     alert('Congratulations, you just won the lottery!')
//                 }
//             } else {
//                 alert('Oops! You need to try again!') // This is to alert a wrong entry 
//                 if (tries === 4) {
//                     alert('Game over, try again next time!'); // This is to end the loop 
//                     break;
//                 }
//             }
//             // if (Number(userInput) === correctArray) { //New Trial
//             //     alert('You have entered this number before');
//             //     tries += 1;

//             // } // New Trial 


//         }
//     }



// }

// game();

// let dimension = 8;
// let pattern = '';

// function hashtag() {
//     // A vertical loop
//     for (
//         let horizontalCount = 0; horizontalCount < dimension; horizontalCount++
//     ) {
//         // Inner loop
//         for (let verticalCount = 0; verticalCount < dimension; verticalCount++) {
//             if ((horizontalCount + verticalCount) % 2 === 0) {
//                 pattern += ' ';
//             } else {
//                 pattern += '#';
//             }
//         }
//         pattern += '\n';
//     }
//     // A horizontal loop
//     console.log(pattern);
// }
// hashtag();

// let person = {
//     name: 'Macaulay Temitope',
//     age: 24,
//     wages: 100,
//     tax: 0.3,
//     tribe: 'Yoruba',
//     getNetWages: function() {
//         return this.wages - this.wages * this.tax;
//     },
//     getIsMarries: function() {
//         if (this.age > 30) {
//             return true;
//         }
//     },
//     getTribe: function() {
//         alert(this.tribe);
//     }

// }
// console.log(person.getTribe);

// // Higher-Order Array Methods
// // find, some, map, filter, reduce, forEach, findIndex, reverse, every, sort
// const myArray = [
//     { name: 'Jane', age: 20, educated: true, income: 200 },
//     { name: 'John', age: 17, educated: false, income: 100 },
//     { name: 'Jude', age: 50, educated: false, income: 300 },
//     { name: 'Samson', age: 20, educated: false, income: 250 },
//     { name: 'Jabez', age: 60, educated: true, income: 400 },
//     { name: 'Noah', age: 80, educated: false, income: 500 },
// ];

// // Find - returns the first element that satisfies the condition
// console.log(myArray.find((person) => person.age >= 30 && person.educated));
// // Some - returns true if at least one element satisfies the condition
// console.log(myArray.some((person) => person.age === 17));
// // Map - returns a new array with the result of the function applied to each element
// console.log(
//     myArray.map((person) => {
//         // must return a value that fills the new array
//         return {
//             name: person.name,
//             age: person.age + 1,
//             educated: person.educated,
//             married: person.age > 30,
//         };
//     }),
// );

// // Filter - returns a new array with all the elements that satisfy the condition
// console.log(myArray.filter((personToRemove) => personToRemove.age > 30));

// // Reduce - returns a single value
// console.log(
//     myArray.reduce(
//         (totalIncome, currentPerson) => totalIncome + currentPerson.income,
//         0,
//     ),
// );

// // ForEach - executes a function for each element
// console.log(
//     myArray.forEach((person) => {
//         console.log(person.name);
//     }),
// );

// // FindIndex - returns the index of the first element that satisfies the condition
// console.log(myArray.findIndex((person) => person.age === 20));

// // Reverse - reverses the order of the elements
// console.log(myArray.reverse());

// // Every - returns true if all the elements satisfy the condition
// console.log(myArray.every((person) => typeof person.educated === 'boolean'));

// // Sort - returns a new array with the elements sorted
// console.log(myArray.sort((c, d) => {
//     console.log(c.age - d.age);
//     return c.age - d.age;
// }))