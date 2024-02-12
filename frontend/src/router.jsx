import { createBrowserRouter } from "react-router-dom"
import { RestrictedRoute } from "./common/RestrictedRoute"
import AnimalListPage from "./features/animals/AnimalListPage"
import DashboardPage from "./features/users/DashboardPage"
import LoginPage from "./features/users/LoginPage"
import RegisterPage from "./features/users/RegisterPage"
import SightingInfoPage from "./features/sightings/SightingInfoPage"
import SightingListPage from "./features/sightings/SightingListPage"
import TrailsPage from "./features/trails/TrailsPage"
import UserListPage from "./features/users/UserListPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/dashboard",
        element: <DashboardPage />
    },
    {
        path: "/animals",
        element: <RestrictedRoute allowedRoles={["admin", "moderator"]}>
            <AnimalListPage />
        </RestrictedRoute>
    },
    {
        path: "/trails",
        element: <RestrictedRoute allowedRoles={["admin", "moderator"]}>
            <TrailsPage />
        </RestrictedRoute>
    },
    {
        path: "/sightings",
        element: <SightingListPage />
    },
    {
        path: "/sightings/:sightingID",
        element: <SightingInfoPage />
    },
    {
        path: "/users",
        element: <RestrictedRoute allowedRoles={["admin"]} >
            <UserListPage />
        </RestrictedRoute >
    },
    {
        path: "/register",
        element: <RegisterPage />

    }
])

export default router