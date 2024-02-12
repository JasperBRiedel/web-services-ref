import { Router } from "express";
import auth from "../middleware/auth.js";
import * as Animals from "../models/animals.js"

// TODO: Implement input validation

const animalController = Router()

animalController.get("/animals", async (req, res) => {
    const animals = await Animals.getAll()

    res.status(200).json({
        status: 200,
        message: "Get all animals",
        animals: animals,
    })
})

animalController.get("/animals/:id", (req, res) => {
    const animalID = req.params.id

    Animals.getByID(animalID).then(animal => {
        res.status(200).json({
            status: 200,
            message: "Get animal by ID",
            animal: animal
        })
    }).catch(error => {
        res.status(500).json({
            status: 500,
            message: "Failed to get animal by ID",
        })
    })
})

animalController.post("/animals/", auth(["admin", "moderator"]), (req, res) => {
    // Get the animal data out of the request
    const animalData = req.body

    // Convert the animal data into an Animal model object
    const animal = Animals.newAnimal(null, animalData.name, animalData.species)

    // Use the create model function to insert this animal into the DB
    Animals.create(animal).then(animal => {
        res.status(200).json({
            status: 200,
            message: "Created animal",
            animal: animal,
        })
    }).catch(error => {
        res.status(500).json({
            status: 500,
            message: "Failed to created animal",
        })
    })
})

animalController.patch("/animals/", auth(["admin", "moderator"]), (req, res) => {
    const animal = req.body

    res.status(200).json({
        status: 200,
        message: "Update animal by ID - Not yet implemented",
    })
})

animalController.delete("/animals/", auth(["admin", "moderator"]), (req, res) => {
    const animalID = req.body.id

    res.status(200).json({
        status: 200,
        message: "Delete animal by name - Not yet implemented",
    })
})

export default animalController