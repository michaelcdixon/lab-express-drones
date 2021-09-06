// Iteration #1
// ℹ️ Connects to the database
require("../db");
const Drone = require("../models/Drone.model");

const drone = [
	{ name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
	{ name: "Racer 57", propellers: 4, maxSpeed: 20 },
	{ name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

Drone.insertMany(drone).then((dronesFromMongoDB) => {
	console.log(`drones created - ${dronesFromMongoDB.length}`);
});
