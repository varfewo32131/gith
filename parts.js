// Define a Sea class
class Sea {
    constructor(name, temperature, salinity) {
        this.name = name;
        this.temperature = temperature; // in Celsius
        this.salinity = salinity; // in parts per thousand
        this.marineLife = [];
    }

    // Method to describe the sea
    describe() {
        console.log(`The ${this.name} is a body of water with a temperature of ${this.temperature}°C.`);
        console.log(`It has a salinity level of ${this.salinity} ppt.`);
    }

    // Method to add marine life to the sea
    addMarineLife(animal) {
        this.marineLife.push(animal);
        console.log(`A ${animal} has been added to the ${this.name}.`);
    }

    // Method to list all marine life in the sea
    listMarineLife() {
        console.log(`Marine life in the ${this.name}:`);
        this.marineLife.forEach(animal => {
            console.log(animal);
        });
    }
}

// Create an instance of Sea
const pacificOcean = new Sea('Pacific Ocean', 25, 34);

// Test the Sea class methods
pacificOcean.describe();
pacificOcean.addMarineLife('Dolphin');
pacificOcean.addMarineLife('Whale');
pacificOcean.listMarineLife();
