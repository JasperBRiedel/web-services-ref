import { useEffect, useState } from "react"
import * as Users from "../api/users"
import Nav from "../components/Nav"
import Spinner from "../components/Spinner"
import UserEdit from "../components/UserEdit"
import { useAuthentication } from "../hooks/authentication"

export default function UserList() {
    const [user] = useAuthentication()

    const [refreshTrigger, setRefreshTrigger] = useState()
    const [selectedUserID, setSelectedUserID] = useState(null)

    // Load user list
    const [users, setUsers] = useState([])
    useEffect(() => {
        Users.getAllUsers(user.authenticationKey)
            .then(users => {
                setUsers(users)
            })
    }, [refreshTrigger])

    return <>
        <Nav />
        <div className="container p-2 mx-auto grid md:grid-cols-2 gap-2">
            <div className="rounded border-2 border-primary p-2">
                <h2>Users</h2>
                <div className="overflow-auto w-full">
                    {users == null
                        ? <Spinner />
                        : <table className="table table-compact w-full overflow-scroll">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Email</th>
                                    <th>Select</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user =>
                                    <tr key={user.id}>
                                        <td>{user.firstName} {user.lastName}</td>
                                        <td>{user.role}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button
                                                className="btn btn-xs mt-1"
                                                onClick={() => setSelectedUserID(user.id)}
                                            >Edit</button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
            <div className="rounded border-2 border-primary p-2">
                <h2>Selected User</h2>
                <UserEdit
                    userID={selectedUserID}
                    onSave={() => setRefreshTrigger({})}
                    allowEditRole={true} />

            </div>
        </div >
    </>
} 