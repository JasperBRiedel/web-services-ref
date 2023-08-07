import { API_URL } from "./api.js"

export async function getAll() {
    // GET from the API /animals
    const response = await fetch(
        API_URL + "/animals",
        {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
        }
    )

    const APIResponseObject = await response.json()

    return APIResponseObject.animals
}

export async function getByID(animalID) {
    // GET from the API /animal/:id
    const response = await fetch(
        API_URL + "/animals/" + animalID,
        {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
        }
    )

    const APIResponseObject = await response.json()

    return APIResponseObject.animal
}

export async function create(animal, authenticationKey) {
    const response = await fetch(
        API_URL + "/animals",
        {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ ...animal, authenticationKey })
        }
    )

    const postCreateAnimalResponse = await response.json()

    return postCreateAnimalResponse.animal
}

export async function update(animal, authenticationKey) {
    const response = await fetch(
        API_URL + "/animals",
        {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ ...animal, authenticationKey })
        }
    )

    const patchAnimalResponse = await response.json()

    return patchAnimalResponse.animal
}

export async function remove(animal, authenticationKey) {
    const response = await fetch(
        API_URL + "/animals",
        {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ ...animal, authenticationKey })
        }
    )

    const deleteAnimalResponse = await response.json()

    return deleteAnimalResponse
}