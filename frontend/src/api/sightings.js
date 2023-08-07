import { API_URL } from "./api.js"

export async function getAll() {
    // GET from the API /sightings
    const response = await fetch(
        API_URL + "/sightings",
        {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
        }
    )

    const APIResponseObject = await response.json()

    return APIResponseObject.sightings
}

export async function getTop(amount) {
    // GET from the API /sightings
    const response = await fetch(
        API_URL + "/sightings/top/" + amount,
        {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
        }
    )

    const APIResponseObject = await response.json()

    return APIResponseObject.sightings
}

export async function getByUserID(userID) {
    // GET from the API /sightings/user-id/:id
    const response = await fetch(
        API_URL + "/sightings/user-id/" + userID,
        {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
        }
    )

    const APIResponseObject = await response.json()

    return APIResponseObject.sightings
}

export async function getByID(sightingID) {
    // GET from the API /sighting/:id
    const response = await fetch(
        API_URL + "/sightings/" + sightingID,
        {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
        }
    )

    const APIResponseObject = await response.json()

    return APIResponseObject.sighting
}

export async function create(sighting, authenticationKey) {
    const response = await fetch(
        API_URL + "/sightings",
        {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'X-AUTH-KEY': authenticationKey
            },
            body: JSON.stringify(sighting)
        }
    )

    const postCreateSightingResponse = await response.json()

    return postCreateSightingResponse
}

// Not implemented yet
// export async function updateSighting(sighting) {
//     const response = await fetch(
//         API_URL + "/sightings",
//         {
//             method: "PATCH",
//             headers: {
//                 'Content-Type': "application/json"
//             },
//             body: JSON.stringify(sighting)
//         }
//     )

//     const patchSightingResponse = await response.json()

//     return patchSightingResponse.sighting
// }

export async function remove(sighting, authenticationKey) {
    const response = await fetch(
        API_URL + "/sightings",
        {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json",
                'X-AUTH-KEY': authenticationKey
            },
            body: JSON.stringify(sighting)
        }
    )

    const deleteSightingResponse = await response.json()

    return deleteSightingResponse
}