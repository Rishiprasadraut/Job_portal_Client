import React, { useContext,useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearch, searchFilter, setSearchFilter, jobs } =
    useContext(AppContext);

  const [showFilter, setShowFilter] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const [filterJobs, setFilterJobs] = useState(jobs);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleLocationChange = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((c) => c !== location)
        : [...prev, location],
    );
  };

  useEffect(() => {
    const matchesCategory = (job) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(job.category);

    const matchesLocation = (job) =>
      selectedLocation.length === 0 || selectedLocation.includes(job.location);

    const matchesTitles = (job) =>
      searchFilter.title === "" ||
      job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

    const matchesSearchLocation = (job) =>
      searchFilter.location === "" ||
      job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilterJobs = jobs
      .slice()
      .reverse()
      .filter(
        (job) =>
          matchesCategory(job) &&
          matchesLocation(job) &&
          matchesTitles(job) &&
          matchesSearchLocation(job),
      );

    setFilterJobs(newFilterJobs);
    setCurrentPage(1);
  }, [jobs, selectedCategories, selectedLocation, searchFilter]);

  return (
    <div className="container 2xl:px-20 mx-auto  flex flex-col lg:flex-row max-lg:space-y-8 py-8">
    
      {/* Sidebar */}

      <div className="w-full lg:w-1/4 bg-white px-4">

        {/* Search Filter from Hero Componenet */}

        {isSearch &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg">Current Search</h3>
              <div className="mb-4 text-grey-600">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-50 border-blue-200 px-4 py-1.5 rounded ">
                    {searchFilter.title}
                    <img
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="inline-flex items-center ml-2 gap-2.5 bg-red-50 border-red-200 px-4 py-1.5 rounded ">
                    {searchFilter.location}
                    <img
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}
              </div>
            </>
          )}

        <button
          onClick={(e) => setShowFilter((prev) => !prev)}
          className="px-6 py-1.5 rounded border border-gray-400 lg:hidden"
        >
          {showFilter ? "Close" : "Filter"}
        </button>

        {/* Category Filter */}

        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4 pt-14">
            Search By Categories
          </h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((Category, idx) => (
              <li className="flex gap-3 items-center" key={idx}>
                <input
                  className="scale-125"
                  type="checkbox"
                  onChange={() => handleCategoryChange(Category)}
                  checked={selectedCategories.includes(Category)}
                />
                {Category}
              </li>
            ))}
          </ul>
        </div>

        {/* Select By Location */}

        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search By Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, idx) => (
              <li className="flex gap-3 items-center" key={idx}>
                <input
                  className="scale-125"
                  type="checkbox"
                  onChange={() => handleLocationChange(location)}
                  checked={selectedLocation.includes(location)}
                />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listing */}

      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">
          Latest Job
        </h3>
        <p className="mb-8">Get your desired job from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
         
          {/* Job Card */}

          {filterJobs.slice((currentPage - 1) * 6, currentPage * 6)
            .map((job, idx) => (
              <JobCard key={idx} job={job} />
            ))}
        </div>

        {/* Pagination  */}

        {filterJobs.length > 0 && (
          <div className="flex justify-center items-center space-x-2 mt-10">
            <a href="#job-list">
              <img
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                src={assets.left_arrow_icon}
              />
            </a>
            {Array.from({ length: Math.ceil(filterJobs.length / 6) }).map(
              (_, idx) => (
                <a key={idx} href="#job-list">
                  <button
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === idx + 1 ? "bg-blue-100 text-blue-500" : "text-grey-500"}`}
                  >
                    {idx + 1}
                  </button>
                </a>
              ),
            )}
            <a href="#job-list">
              <img
                onClick={() =>
                  setCurrentPage(
                    Math.min(currentPage + 1, Math.ceil(filterJobs.length / 6)),
                  )
                }
                src={assets.right_arrow_icon}
              />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
