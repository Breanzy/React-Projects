import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const Homepage = () => {
    return (
        <>
            <Hero />
            <HomeCard />
            <JobListings isHome={true} />
            <ViewAllJobs />
        </>
    );
};

export default Homepage;
