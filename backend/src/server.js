import express from "express"
import cors from "cors"
import fileUpload from "express-fileupload"

// Create express application
const port = 8080
const app = express()

// Enable cross-origin resources sharing (CORS)
app.use(cors({
    // Allow all origins
    origin: true,
}))

// Enable JSON request parsing middleware. Must be done before endpoints are defined.
//
// If a request with a `Content-Type: application/json` header is
// made to a route, this middleware will treat the request body as
// a JSON string. It will attempt to parse it with `JSON.parse()`
// and set the resulting object (or array) on a `body` property of
// the request object, which you can access in your route endpoints,
// or other general middleware.
app.use(express.json())

// Enable file upload support
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}))

// Import and use the routers of each controller.
import animalController from "./controllers/animals.js"
app.use(animalController)
import userController from "./controllers/users.js"
app.use(userController)
import trailController from "./controllers/trails.js"
app.use(trailController)
import sightingController from "./controllers/sightings.js"
app.use(sightingController)

// Catch errors raised by endpoints and respond with JSON error object
app.use((err, req, res, next) => {
    // format error
    res.status(err.status || 500).json({
        status: err.status,
        message: err.message,
        errors: err.errors,
    })
})

// Start listening for API requests
app.listen(
    port,
    () => console.log(`Express started on http://localhost:${port}`),
)