import { Router } from "express";
import auth from "../middleware/auth.js";
import * as Animals from "../models/animals.js"

const animalController = Router()

animalController.get("/", async (req, res) => {
    const animals = await Animals.getAll()

    res.status(200).json({
        status: 200,
        message: "Get all animals",
        animals: animals,
    })
})

animalController.post("/", auth(["admin", "moderator"]), (req, res) => {
    // Get the animal data out of the request
    const animalData = req.body

    // TODO: Implement request validation

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

animalController.get("/:id", (req, res) => {
    const animalID = req.params.id
    
    // TODO: Implement request validation

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

animalController.patch("/:id", auth(["admin", "moderator"]), (req, res) => {
    const animalID = req.params.id
    const animal = req.body

    // TODO: Implement request validation

    res.status(200).json({
        status: 200,
        message: "Update animal by ID - Not yet implemented",
    })
})

animalController.delete("/:id", auth(["admin", "moderator"]), (req, res) => {
    const animalID = req.params.id

    // TODO: Implement request validation

    res.status(200).json({
        status: 200,
        message: "Delete animal by name - Not yet implemented",
    })
})

export default animalController