import { useEffect, useState } from "react";
import * as Animals from "../api/animals";
import Nav from "../components/Nav";
import { XMLUpload } from "../components/XMLUpload";

export default function AnimalList() {
    const [animals, setAnimals] = useState([])
    useEffect(() => {
        Animals.getAll().then(animals => setAnimals(animals))
    }, [])

    return <>
        <Nav />
        <div className="container p-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="rounded border-2 border-primary p-2">
                <h2 className="text-center">All Trails</h2>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <th>Name</th>
                            <th>Species</th>
                        </thead>
                        <tbody>
                            {animals.map(animal =>
                                <tr key={animal.id}>
                                    <td>{animal.name}</td>
                                    <td>{animal.species}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="rounded border-2 border-primary  min-h-16 p-2">
                <h2 className="text-center">Upload Animals</h2>
                <XMLUpload />
            </div>
        </div>
    </>
}