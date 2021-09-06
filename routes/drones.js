const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");
router.get("/drones", async (req, res, next) => {
	// Iteration #2: List the drones
	const drones = await Drone.find();
	// console.log(drones);
	res.render("drones/list", { drones });
});

router.get("/drones/create", (req, res, next) => {
	// Iteration #3: Add a new drone
	res.render("drones/create-form");
});

router.post("/drones/create", async (req, res, next) => {
	// Iteration #3: Add a new drone
	const { name, propellers, maxSpeed } = req.body;
	await Drone.create({
		name,
		propellers,
		maxSpeed,
	});
	res.redirect("/drones");
});

router.get("/drones/:id/edit", async (req, res, next) => {
	// Iteration #4: Update the drone
	const drones = await Drone.findById(req.params.id);
	res.render("drones/update-form", drones);
});

router.post("/drones/:id/edit", async (req, res, next) => {
	// Iteration #4: Update the drone
	const { name, propellers, maxSpeed } = req.body;
	await Drone.findByIdAndUpdate(req.params.id, {
		name,
		propellers,
		maxSpeed,
	});
	res.redirect("/drones");
});

router.post("/drones/:id/delete", async (req, res, next) => {
	// Iteration #5: Delete the drone
	await Drone.findByIdAndDelete(req.params.id);
	res.redirect("/drones");
});

module.exports = router;
