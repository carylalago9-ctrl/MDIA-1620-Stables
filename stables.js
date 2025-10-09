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
    },
    {
        name: "Nuggets",
        nickname: "Nug",
        age: 5,
        favoriteTreat: "Apples",
        monthlyRent: 250,
        inside: true,
        hungry: true,
    },
    {
        name: "Soda",
        nickname: "Pop",
        age: 3,
        favoriteTreat: "Sugar cubes",
        monthlyRent: 200,
        inside: false,
        hungry: true,
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
};

horses.push(newHorse);
horses[0].hungry = true;
horses[1].hungry = false;
horses[2].hungry = true;
horses[3].hungry = false;

let game = "test";
