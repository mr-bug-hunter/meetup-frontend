import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App"
import Event from "./components/Events";
import EventsPage from "./components/EventsPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/events",
        element: <Event/>
    },
    {
        path: "/EventsPage/:eventsId",
        element: <EventsPage/>,
    },
])
root.render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)