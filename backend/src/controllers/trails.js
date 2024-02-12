import { Router } from "express";
import xml2js from "xml2js"
import * as Trails from "../models/trails.js";
import auth from "../middleware/auth.js";

// TODO: Implement input validation

const trailController = Router()

trailController.get("/", async (req, res) => {

    const trails = await Trails.getAll()

    res.status(200).json({
        status: 200,
        message: "Get all trails",
        trails: trails,
    })
})

trailController.get("/:id", (req, res) => {
    const trailID = req.params.id

    // TODO: Implement request validation

    Trails.getByID(trailID).then(trail => {
        res.status(200).json({
            status: 200,
            message: "Get trail by ID",
            trail: trail
        })
    }).catch(error => {
        res.status(500).json({
            status: 500,
            message: "Failed to get trail by ID",
        })
    })
})

trailController.post("/upload-xml", auth(["admin", "spotter"]), (req, res) => {
    if (req.files && req.files["xml-file"]) {
        // Access the XML file as a string
        const XMLFile = req.files["xml-file"]
        const file_text = XMLFile.data.toString()

        // Set up XML parser
        const parser = new xml2js.Parser();
        parser.parseStringPromise(file_text)
            .then(data => {
                const trailUpload = data["trail-upload"]
                const trailUploadAttributes = trailUpload["$"]
                const operation = trailUploadAttributes["operation"]
                // Slightly painful indexing to reach nested children
                const trailsData = trailUpload["trails"][0]["trail"]

                if (operation == "insert") {
                    Promise.all(trailsData.map((trailData) => {
                        // Convert the xml object into a model object
                        const trailModel = Trails.newTrail(null, trailData.name.toString())
                        // Return the promise of each creation query
                        return Trails.create(trailModel)
                    })).then(results => {
                        res.status(200).json({
                            status: 200,
                            message: "XML Upload insert successful",
                        })
                    }).catch(error => {
                        res.status(500).json({
                            status: 500,
                            message: "XML upload failed on database operation - " + error,
                        })
                    })
                } else if (operation == "update") {
                    Promise.all(trailsData.map((trailData) => {
                        // Convert the xml object into a model object
                        const trailModel = newTrail(
                            trailData.id.toString(),
                            trailData.name.toString()
                        )
                        // Return the promise of each creation query
                        return Trails.update(trailModel)
                    })).then(results => {
                        res.status(200).json({
                            status: 200,
                            message: "XML Upload update successful",
                        })
                    }).catch(error => {
                        res.status(500).json({
                            status: 500,
                            message: "XML upload failed on database operation - " + error,
                        })
                    })

                } else {
                    res.status(400).json({
                        status: 400,
                        message: "XML Contains invalid operation attribute value",
                    })
                }
            })
            .catch(error => {
                res.status(500).json({
                    status: 500,
                    message: "Error parsing XML - " + error,
                })
            })


    } else {
        res.status(400).json({
            status: 400,
            message: "No file selected",
        })
    }
})


trailController.post("/", auth(["admin", "moderator"]), (req, res) => {
    // Get the trail data out of the request
    const trailData = req.body

    // TODO: Implement request validation

    // Convert the trail data into an Trail model object
    const trail = newTrail(null, trailData.name)

    // Use the create model function to insert this trail into the DB
    Trails.create(trail).then(trail => {
        res.status(200).json({
            status: 200,
            message: "Created trail",
            trail: trail,
        })
    }).catch(error => {
        res.status(500).json({
            status: 500,
            message: "Failed to created trail",
        })
    })
})

trailController.patch("/:id", auth(["admin", "moderator"]), (req, res) => {
    const trailID = req.params.id
    const trail = req.body

    // TODO: Implement request validation

    res.status(200).json({
        status: 200,
        message: "Update trail by ID - Not yet implemented",
    })
})

trailController.delete("/:id", auth(["admin", "moderator"]), (req, res) => {
    const trailID = req.params.id

    // TODO: Implement request validation

    res.status(200).json({
        status: 200,
        message: "Delete trail by ID - Not yet implemented",
    })
})

export default trailController