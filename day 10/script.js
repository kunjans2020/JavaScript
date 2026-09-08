// object -> A collection of related properties (key-value pairs), and those values can inclued functions.

// Example of an object

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2025,

    start: function () {
        console.log("Car started");
    }
};

console.log(car.brand); // Toyota
car.start();            // Car started