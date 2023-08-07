import { createBrowserRouter } from "react-router-dom"
import { RestrictedRoute } from "./components/RestrictedRoute"
import AnimalList from "./pages/AnimalList"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import SightingInfo from "./pages/SightingInfo"
import SightingList from "./pages/SightingList"
import TrailList from "./pages/TrailList"
import UserList from "./pages/UsersList"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/animals",
        element: <RestrictedRoute allowedRoles={["admin", "moderator"]}>
            <AnimalList />
        </RestrictedRoute>
    },
    {
        path: "/trails",
        element: <RestrictedRoute allowedRoles={["admin", "moderator"]}>
            <TrailList />
        </RestrictedRoute>
    },
    {
        path: "/sightings",
        element: <SightingList />
    },
    {
        path: "/sightings/:sightingID",
        element: <SightingInfo />
    },
    {
        path: "/users",
        element: <RestrictedRoute allowedRoles={["admin"]} >
            <UserList />
        </RestrictedRoute >
    },
    {
        path: "/register",
        element: <Register />

    }
])

export default router