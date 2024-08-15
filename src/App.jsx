import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<h1>My Apps</h1>} />)
);

const App = () => {
    const names = ["bro", "broski", "guy", "brody"];
    return (
        <>
            <Navbar />
            <Hero title="Become a React Dev" subtitle="" />
            <HomeCard />
            <JobListings />
            <ViewAllJobs />

            <section className="m-auto max-w-lg my-10 px-6">
                <a
                    href="jobs.html"
                    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                >
                    View All Jobs
                </a>
            </section>
        </>
    );
};

export default App;
