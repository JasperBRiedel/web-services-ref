import { useState } from "react"
import Nav from "../../common/Nav"
import SightingAdd from "../sightings/SightingAdd"
import Spinner from "../../common/Spinner"
import UserEdit from "./UserEdit"
import UserSightingsList from "../sightings/UserSightingsList"
import { useAuthentication } from "../authentication"

function DashboardPage() {
    const [user] = useAuthentication()

    const [refreshTrigger, setRefreshTrigger] = useState()

    return <>
        <Nav />
        {user ?
            <div className="container p-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="rounded border-2 border-primary md:col-start-1 min-h-16 p-2">
                    <h2 className="text-center">Add Sighting</h2>
                    <SightingAdd onAdded={() => setRefreshTrigger({})} />
                </div>
                <div className="rounded border-2 border-primary md:col-start-1 min-h-16 p-2">
                    <h2 className="text-center">My Account</h2>
                    {/* User details form with update button here */}
                    <UserEdit userID={user.id} allowEditRole={user.role == "admin"} />
                </div>
                <div className="rounded border-2 border-primary md:col-start-2 md:row-start-1 row-end-3 p-2">
                    <h2 className="text-center">My Sightings</h2>
                    <div className="overflow-x-auto">
                        <UserSightingsList userID={user.id} refreshDependency={refreshTrigger} />
                    </div>
                </div>
            </div>
            :
            <Spinner />
        }
    </>
}

export default DashboardPage