import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Animals from "../../api/animals";
import * as Sightings from "../../api/sightings";
import * as Trails from "../../api/trails";
import * as Users from "../../api/users";
import Nav from "../../common/Nav";
import Spinner from "../../common/Spinner";
import { useAuthentication } from "../authentication";

export default function SightingInfoPage() {
    const [loggedInUser] = useAuthentication()
    const { sightingID } = useParams()

    const [sighting, setSighting] = useState(null)
    useEffect(() => {
        Sightings.getByID(sightingID).then(sighting => setSighting(sighting)).catch(error => console.log(error))
    }, [])

    const [animal, setAnimal] = useState(null)
    useEffect(() => {
        if (sighting) {
            Animals.getByID(sighting.animal_id).then(animal => setAnimal(animal))
        }
    }, [sighting])

    const [trail, setTrail] = useState(null)
    useEffect(() => {
        if (sighting) {
            Trails.getByID(sighting.trail_id).then(trail => setTrail(trail))
        }
    }, [sighting])

    const [user, setUser] = useState(null)
    useEffect(() => {
        if (sighting) {
            Users.getUserByID(sighting.user_id, loggedInUser.authenticationKey).then(user => setUser(user))
        }
    }, [sighting])

    return <>
        <Nav />
        <div className="container p-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="rounded border-2 border-primary p-2">
                <h2 className="text-center">Sighting</h2>
                {sighting == null
                    ? <Spinner />
                    : <div className="stats stats-vertical w-full">
                        <div className="stat">
                            <div className="stat-title">Date</div>
                            <div className="stat-value">{new Date(sighting.date).toLocaleDateString()}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Time</div>
                            <div className="stat-value">{sighting.time}</div>
                        </div>
                    </div>
                }
            </div>
            <div className="rounded border-2 border-primary p-2">
                <h2 className="text-center">Trail</h2>
                {trail == null
                    ? <Spinner />
                    : <div className="stats stats-vertical w-full">
                        <div className="stat">
                            <div className="stat-title">Name</div>
                            <div className="stat-value whitespace-normal">{trail.name}</div>
                        </div>
                    </div>
                }
            </div>
            <div className="rounded border-2 border-primary p-2">
                <h2 className="text-center">Animal</h2>
                {animal == null
                    ? <Spinner />
                    : <div className="stats stats-vertical w-full">
                        <div className="stat">
                            <div className="stat-title">Name</div>
                            <div className="stat-value">{animal.name}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Species</div>
                            <div className="stat-value whitespace-normal">{animal.species}</div>
                        </div>
                    </div>
                }
            </div>
            <div className="rounded border-2 border-primary p-2">
                <h2 className="text-center">User</h2>
                {user == null
                    ? <Spinner />
                    : <div className="stats stats-vertical w-full">
                        <div className="stat">
                            <div className="stat-title">First Name</div>
                            <div className="stat-value whitespace-normal">{user.firstName}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Last Name</div>
                            <div className="stat-value whitespace-normal">{user.lastName}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Role</div>
                            <div className="stat-value whitespace-normal">{user.role}</div>
                        </div>
                    </div>
                }
            </div>
        </div>
    </>
}