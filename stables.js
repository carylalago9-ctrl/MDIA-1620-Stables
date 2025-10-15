let horseName = "Burger";
let horseAge = 6;
let isInside = true;
let monthlyCost = 150.5;
let lateFee = monthlyCost * 0.6;

let visitorMessage = "Welcome to the stable! Come see " + horseName + "!";
let latePaymentMessage = "Your late fee is $" + (monthlyCost + lateFee) + ".";

let horses = [
    {
        name: "Fries",
        nickname: "Fry",
        age: 4,
        favoriteTreat: "Carrots",
        monthlyRent: 300,
        inside: true,
        hungry: false,
        color: "gold",
        topSpeed: 45,
    },
    {
        name: "Nuggets",
        nickname: "Nug",
        age: 5,
        favoriteTreat: "Apples",
        monthlyRent: 250,
        inside: true,
        hungry: true,
        color: "brown",
        topSpeed: 50,
    },
    {
        name: "Soda",
        nickname: "Pop",
        age: 3,
        favoriteTreat: "Sugar cubes",
        monthlyRent: 200,
        inside: false,
        hungry: true,
        color: "black",
        topSpeed: 40,
    },
];

let newHorse = {
    name: "Toy",
    nickname: "Tee",
    age: 2,
    favoriteTreat: "Candy",
    monthlyRent: 150,
    inside: true,
    hungry: false,
    color: "red",
    topSpeed: 35,
};

horses.push(newHorse);
horses[0].hungry = true;
horses[1].hungry = false;
horses[2].hungry = true;
horses[3].hungry = false;

//LAB 2
//------------------------- Growing our business (Lab #2, Week 6) -------------------------//

let stallCount = 6;

function logAvailableStalls(stallCount, horsesInStable) {
    let occupiedStalls = horses.length;
    let availableStalls = stallCount - occupiedStalls;
    console.log("Available stalls: " + availableStalls);
}

function logLateFee(horse, monthlyCost, lateFee) {
    let lateFee = horse.monthlyRent * 0.6;
    console.log(horse.name + "'s late fee is $" + lateFee);
}

function getHorseNickname(horse) {
    return horse.nickname;
}

logAvailableStalls(stallCount, horses);
logLateFee(horses[1], monthlyCost, lateFee);
console.log(getHorseNickname(horses[2]));
// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.
