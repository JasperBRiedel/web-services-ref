import { useEffect, useState } from "react"
import * as Animals from "../../api/animals"
import * as Sightings from "../../api/sightings"
import * as Trails from "../../api/trails"
import Spinner from "../../common/Spinner"

export default function UserSightingsList({ userID, refreshDependency }) {
    const [sightings, setSightings] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Sightings.getByUserID(userID).then(async sightings => {
            const sightingsWithExtras = await Promise.all(sightings.map(async sighting => {
                const trail = await Trails.getByID(sighting.trail_id)
                const animal = await Animals.getByID(sighting.animal_id)

                return Promise.resolve({
                    id: sighting.id,
                    date: new Date(sighting.date).toLocaleDateString(),
                    time: sighting.time,
                    trail,
                    animal,
                })
            }))

            setSightings(sightingsWithExtras)
            setLoading(false)
        })
    }, [refreshDependency])

    return loading
        ? <Spinner />
        : <table className="table table-compact w-full">
            <thead>
                <tr>
                    <th>Trail</th>
                    <th>Animal</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {sightings.map(sighting =>
                    <tr key={sighting.id}>
                        <td>{sighting.animal.name}</td>
                        <td>{sighting.trail.name}</td>
                        <td>{sighting.date}</td>
                        <td>{sighting.time}</td>
                    </tr>
                )}
            </tbody>
        </table>
}