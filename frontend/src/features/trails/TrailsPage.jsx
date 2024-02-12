import { useEffect, useState } from "react";
import * as Trails from "../../api/trails";
import Nav from "../../common/Nav";
import { XMLUploader } from "../xml/XMLUploader";

export default function TrailsPage() {
    const [trails, setTrails] = useState([])
    useEffect(() => {
        Trails.getAll().then(trails => setTrails(trails))
    }, [])

    return <>
        <Nav />
        <div className="container p-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="rounded border-2 border-primary p-2">
                <h2 className="text-center">All Trails</h2>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trails.map(trail =>
                                <tr key={trail.id}>
                                    <td>{trail.id}</td>
                                    <td>{trail.name}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="rounded border-2 border-primary  min-h-16 p-2">
                <h2 className="text-center">Upload Trails</h2>
                <XMLUploader uploadUrl={"/trails/upload-xml"} onUploadSuccess={() => {
                    Trails.getAll().then(trails => setTrails(trails))
                }} />
            </div>
        </div>
    </>
}