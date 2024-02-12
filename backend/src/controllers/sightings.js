import { Router } from "express";
import * as Sightings from "../models/sightings.js"
import auth from "../middleware/auth.js";

// TODO: Implement input validation

const sightingController = Router()

sightingController.get("/", async (req, res) => {
    const sightings = await Sightings.getAll()

    res.status(200).json({
        status: 200,
        message: "Get all sightings",
        sightings: sightings,
    })
})

sightingController.get("/top/:amount", async (req, res) => {
    const amount = parseInt(req.params.amount)
    
    // TODO: Implement request validation

    const sightings = await Sightings.getTop(amount)

    res.status(200).json({
        status: 200,
        message: "Get top sightings",
        sightings: sightings,
    })
})

sightingController.get("/page/:page", async (req, res) => {
    const pageSize = 5;
    const page = parseInt(req.params.page);
    
    // TODO: Implement request validation

    const sightings = await Sightings.getByPage(page, pageSize);

    res.status(200).json({
        status: 200,
        message: "Get paginated sightings on page " + page,
        sightings: sightings,
    })
})

sightingController.get("/user/:id", async (req, res) => {
    const userID = req.params.id

    // TODO: Implement request validation

    const sightings = await Sightings.getByUserID(userID)

    res.status(200).json({
        status: 200,
        message: "Get all sightings by user ID",
        sightings: sightings,
    })
})

sightingController.get("/:id", (req, res) => {
    const sightingID = req.params.id

    // TODO: Implement request validation

    Sightings.getByID(sightingID).then(sighting => {
        res.status(200).json({
            status: 200,
            message: "Get sighting by ID",
            sighting: sighting
        })
    }).catch(error => {
        res.status(500).json({
            status: 500,
            message: "Failed to get sighting by ID",
        })
    })
})

sightingController.post("/", auth(["admin", "moderator", "spotter"]), (req, res) => {
    // Get the sighting data out of the request
    const sightingData = req.body

    // TODO: Implement request validation

    // Convert the sighting data into an Sighting model object
    const sighting = Sightings.newSighting(
        null,
        sightingData.trail_id,
        sightingData.animal_id,
        sightingData.user_id,
        sightingData.date,
        sightingData.time
    )

    // Use the create model function to insert this sighting into the DB
    Sightings.create(sighting).then(sighting => {
        res.status(200).json({
            status: 200,
            message: "Created sighting",
            sighting: sighting,
        })
    }).catch(error => {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: "Failed to created sighting",
        })
    })
})

sightingController.delete("/:id", auth(["admin", "moderator", "spotter"]), (req, res) => {
    const sightingID = req.params.id

    // TODO: Implement request validation

    // TODO: If the role is spotter then we should also check that
    // the sighting they are deleting was created by them.

    res.status(200).json({
        status: 200,
        message: "Delete sighting by ID - Not yet implemented",
    })
})

export default sightingController