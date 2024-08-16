import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const Homepage = () => {
    return (
        <>
            <Hero />;
            <HomeCard />;
            <ViewAllJobs />
        </>
    );
};

export default Homepage;
