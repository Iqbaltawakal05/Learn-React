import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom"
import { routeList } from "./route/router"
const App = () => {
    const element = useRoutes(routeList)

  return element;
}

export default App