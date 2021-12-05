import { createContext } from "react";

const JobsContext = createContext({
  jobs: [],
  filteredJobs: [],
  lastJobs: [],
  isSelected: false,
  setJob: (job) => {},
  setJobToFilteredJobs: (job) => {},
  setAllJobs: (jobs) => {},
  setIsSelected: (value) => {},
  setFilteredJobs: (jobs) => {},
  setLastJobs: (jobs) => {},
});

export default JobsContext;
