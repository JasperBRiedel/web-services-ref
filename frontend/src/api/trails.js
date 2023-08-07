import { API_URL } from "./api.js"

export async function getAll() {
    // GET from the API /trails
    const response = await fetch(
        API_URL + "/trails",
        {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
        }
    )

    const APIResponseObject = await response.json()

    return APIResponseObject.trails
}

export async function getByID(trailID) {
    // GET from the API /trail/:id
    const response = await fetch(
        API_URL + "/trails/" + trailID,
        {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
        }
    )

    const APIResponseObject = await response.json()

    return APIResponseObject.trail
}

export async function create(trail) {
    const response = await fetch(
        API_URL + "/trails",
        {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(trail)
        }
    )

    const postCreateTrailResponse = await response.json()

    return postCreateTrailResponse.trail
}

export async function update(trail) {
    const response = await fetch(
        API_URL + "/trails",
        {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(trail)
        }
    )

    const patchTrailResponse = await response.json()

    return patchTrailResponse.trail
}

export async function remove(trail) {
    const response = await fetch(
        API_URL + "/trails",
        {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(trail)
        }
    )

    const deleteTrailResponse = await response.json()

    return deleteTrailResponse
}