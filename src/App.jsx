import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
    // Add a new job to the server using fetch API
    const addJob = async (newJob) => {
        // Send a POST request to the server to add the new job.
        const res = await fetch("/api/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // Convert the newJob object into a JSON string for the request body.s
            body: JSON.stringify(newJob),
        });
        return;
    };

    const deleteJob = async (id) => {
        // Send a POST request to the server to add the new job.
        const res = await fetch(`/api/jobs/${id}`, {
            method: "DELETE",
        });
        return;
    };

    const updateJob = async (job) => {
        const res = await fetch(`/api/jobs/${job.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(job),
        });
        return;
    };

    // Create a router with the routes defined in App.js
    const router = createBrowserRouter(
        // Create the routes using the createRoutesFromElements function.
        // Use the MainLayout component as the parent component for all routes.
        // The HomePage component is the default route, and the rest of the routes are nested within the MainLayout component.
        // AddJobPage component is used to add a new job, and JobPage component is used to display a specific job.
        // NotFoundPage component is displayed when the requested route does not match any of the defined routes.
        // The path "/about" is used as the base path for the router.
        // The routerProvider component is used to provide the router to the nested routes.
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route
                    path="/add-job"
                    element={<AddJobPage addJobSubmit={addJob} />}
                />
                <Route
                    path="/edit-job/:id"
                    element={<EditJobPage updateJobSubmit={updateJob} />}
                    loader={jobLoader}
                />
                <Route
                    path="/jobs/:id"
                    element={<JobPage deleteJob={deleteJob} />}
                    loader={jobLoader}
                />
                <Route path="/*" element={<NotFoundPage />} />
            </Route>
        )
    );
    // Return the router provider with the path "/about" and the router created above.
    return <RouterProvider path="/about" router={router} />;
};

export default App;
