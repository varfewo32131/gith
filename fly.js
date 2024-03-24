// Define a bird object
const bird = {
    species: 'Sparrow',
    color: 'Brown',
    location: 'Backyard',
    wingspan: 15, // in centimeters
    isFlying: false,

    // Method to make the bird fly
    fly: function() {
        if (!this.isFlying) {
            this.isFlying = true;
            console.log(`${this.species} is flying.`);
        } else {
            console.log(`${this.species} is already flying.`);
        }
    },

    // Method to make the bird land
    land: function() {
        if (this.isFlying) {
            this.isFlying = false;
            console.log(`${this.species} has landed.`);
        } else {
            console.log(`${this.species} is already on the ground.`);
        }
    },

    // Method to chirp
    chirp: function() {
        console.log(`${this.species} is chirping.`);
    }
};

// Test the bird object
bird.fly();
bird.chirp();
bird.land();
