import Home from "../pages/Home"
import Menu from "../pages/Menu"
import MenuDetail from "../pages/MenuDetail"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ProtectedRoute from "./protectedroute"
import Addmenu from "../pages/Addmenu"
import Editmenu from "../pages/Editmenu"
import Listmenu from "../pages/Listmenu"

export const routeList = [
    {
        path: "/",
        element: 
        <ProtectedRoute>
        <Home />
        </ProtectedRoute>
    },
    {
        path: "/menu",
        element:
        <ProtectedRoute>
        <Menu />
        </ProtectedRoute>
    },
    {
        path: "/menu/:id",
        element: 
        <ProtectedRoute>
        <MenuDetail />
        </ProtectedRoute>
    },
    {
        path: "/List-menu",
        element: 
        <ProtectedRoute>
        <Listmenu />
        </ProtectedRoute>
    },
    {
        path: "/Add-menu",
        element:

        <ProtectedRoute>
        <Addmenu />
        </ProtectedRoute>
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    }
    ]