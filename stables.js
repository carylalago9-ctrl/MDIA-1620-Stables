// let horseName = "Burger";
// let horseAge = 6;
// let isInside = true;
// let monthlyCost = 150.5;
// let lateFee = monthlyCost * 0.6;

// let visitorMessage = "Welcome to the stable! Come see " + horseName + "!";
// let latePaymentMessage = "Your late fee is $" + (monthlyCost + lateFee) + ".";

// let horses = [
//     {
//         name: "Fries",
//         nickname: "Fry",
//         age: 4,
//         favoriteTreat: "Carrots",
//         monthlyRent: 300,
//         inside: true,
//         hungry: false,
//         color: "gold",
//         topSpeed: 45,
//     },
//     {
//         name: "Nuggets",
//         nickname: "Nug",
//         age: 5,
//         favoriteTreat: "Apples",
//         monthlyRent: 250,
//         inside: true,
//         hungry: true,
//         color: "brown",
//         topSpeed: 50,
//     },
//     {
//         name: "Soda",
//         nickname: "Pop",
//         age: 3,
//         favoriteTreat: "Sugar cubes",
//         monthlyRent: 200,
//         inside: false,
//         hungry: true,
//         color: "black",
//         topSpeed: 40,
//     },
// ];

// let newHorse = {
//     name: "Toy",
//     nickname: "Tee",
//     age: 2,
//     favoriteTreat: "Candy",
//     monthlyRent: 150,
//     inside: true,
//     hungry: false,
//     color: "red",
//     topSpeed: 35,
// };

// horses.push(newHorse);
// horses[0].hungry = true;
// horses[1].hungry = false;
// horses[2].hungry = true;
// horses[3].hungry = false;

// //LAB 2
// //------------------------- Growing our business (Lab #2, Week 6) -------------------------//

// let stallCount = 6;

// function logAvailableStalls(stallCount, horsesInStable) {
//     let occupiedStalls = horses.length;
//     let availableStalls = stallCount - occupiedStalls;
//     console.log("Available stalls: " + availableStalls);
// }

// function logLateFee(horse, monthlyCost, lateFee) {
//     let lateFee = horse.monthlyRent * 0.6;
//     console.log(horse.name + "'s late fee is $" + lateFee);
// }

// function getHorseNickname(horse) {
//     return horse.nickname;
// }

// logAvailableStalls(stallCount, horses);
// logLateFee(horses[1], monthlyCost, lateFee);
// console.log(getHorseNickname(horses[2]));
// // Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// // the return value outside of the function.

// //------------------------- End -------------------------//

// initialize a variable called "horses" that will store the horses in your stable.
let horses = [];
// create a variable and use it to store a message that welcomes visitor1s to your stable.
let welcomeMessage = "Welcome to the stable!!!";
// create a variable and use it to store the cost of a late payment fee.
let latePaymentFee = 67;
// create a variable and use it to store the number of available stalls in your stable.
let availableStalls = 9;
//------------------------- First day -------------------------//

// using a constructor, add at least 3 horses to your stables.
let Horse = function (
    name,
    nickname,
    favTreat,
    age,
    monthlyRent,
    location,
    isHungry,
    topSpeed
) {
    this.name = name;
    this.nickname = nickname;
    this.favTreat = favTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.location = location;
    this.isHungry = isHungry;
    this.topSpeed = topSpeed;

    this.introduction = function () {
        let message =
            "This is my horse, " +
            this.name +
            " he is " +
            this.age +
            " years old. His favorite treat is " +
            this.favTreat +
            "!";
        console.log(message);
    };

    this.printTopSpeed = function () {
        console.log(this.name + "'s top speed is " + this.topSpeed + " km/h!");
    };
};

// store the horses you've just created in your "horses" `variable.

let horse1 = new Horse(
    "Burger",
    "Pat",
    "Pickles",
    6,
    150.5,
    "inside",
    true,
    55
);

let horse2 = new Horse("Fries", "Fry", "Carrots", 4, 300, "inside", false, 45);

let horse3 = new Horse(
    "Soda",
    "Pop",
    "Sugar cubes",
    5,
    200,
    "outside",
    true,
    40
);

horses.push(horse1);
horses.push(horse2);
horses.push(horse3);

// initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

horses[0].isHungry = true;
horses[1].isHungry = false;
horses[2].isHungry = true;

//------------------------- Growing business -------------------------//

// we've addded some horses ! Re-assign the variable that contains the number of available stalls.
// use the math operator to determine how amny stables you should have left,
//  given the number of horses you've added.

//express the following in code: if the variable that contains your remaining stalls is less that 2,
// log out "We need to build more stalls.", otherwise log out "We have [number of stalls] stalls available!"

availableStalls = availableStalls - horses.length;

if (availableStalls < 2) {
    console.log("We need to build more stalls.");
} else {
    console.log("We have " + availableStalls + " stalls available!");
}

function lateRentCost(horse, latePaymentFee) {
    let total = horse.monthlyRent + latePaymentFee;
    console.log("Your payment is late! You owe $" + total + "!");
}

//create a function that logs out how much will an individial horse will owe if rent is
// paid late. Invoke that function.

lateRentCost(horse1, latePaymentFee);

// add loop that checks to find out if a certain horse likes a treat. if the horse does not like
//the treat, log out their disatisfaction and check the next horse. exit the loop when you find
// the horse that likes the treat.

for (let i = 0; i < horses.length; i++) {
    if (horses[i].favTreat !== "Carrots") {
        console.log(" This horse does not like it!");
    } else {
        console.log("Period they fuh wid it heavyyyy!");
        break;
    }
}

//create and invoke a function that returns (not logs) the nickname of a choosen horse. Log out
// the return value outside of the function.

function getHorseNickname(horse) {
    return horse.nickname;
}

let coolNickname = getHorseNickname(horse2);
console.log(coolNickname);

//------------------------- Day to day operations -------------------------//

//create and invoke a function references one of your unique horse properties. it should
// contain a conditional or a loop.

function checkIfHungry(horse) {
    if (horse.isHungry) {
        console.log(horse.name + " is hungry!");
    } else {
        console.log(horse.name + " is not hungry.");
    }
}

checkIfHungry(horses[0]);
// morning! create and invoke a function that moves all your horses outside. it should
// log out statement indicating the horses have been moved to spend time in the sun.

function getOutHorses(stable) {
    for (let i = 0; i < stable.length; i++) {
        if (stable[i].location === true) {
            console.log("Go outside!");
            stable[i].location = false;
        }
    }
}

getOutHorses(horses);

//initialize a method on your horses that moves them inside if they are outside,
//and vice versa.
//this loop inserts the function changeLocation into each horse in the stable

for (i = 0; i < horses.length; i++) {
    horses[i].changeLocation = function () {
        //take the current boolean and make it opposite
        //false will turn true
        //true will turn false
        this.location = !this.location;
    };
}
console.log(horses[0].location);

horse1.changeLocation();
console.log(horses[0].location);

// food! create and invoke a function that feeds your horses. if the horse is outside, it
//should call them in, and then all horses should be fed a treat. log the activity of the horses

function feedHorses(horses) {
    for (let i = 0; i < horses.length; i++) {
        //check if the horse is outside
        if (horses[i].location === false) {
            //if horse is outside, it will change their location to inside
            horses[i].changeLocation();
        }
        console.log(horses[i].name + " come inside dinner is ready!");
    }
}

feedHorses(horses);

//bedtime! update the function that lets your horses outside so that it also calls them
// in if it is getting dark. only the horses that moved should log out a message. invoke the function.

function changeHorsesLocation(horses, isGettingDark) {
    for (let i = 0; i < horses.length; i++) {
        //check if it is getting dark
        if (horses[i].location === false && isGettingDark === false) {
            console.log("its not bedtime yet!");
            horses[i].location = false;
        }

        if (horses[i].location === false && isGettingDark === true) {
            horses[i].changeLocation();
            console.log(horses[i].name + " come inside, it's getting dark!");
        }
    }
}

changeHorsesLocation(horses, true);
//if it is getting dark, move the horse inside
