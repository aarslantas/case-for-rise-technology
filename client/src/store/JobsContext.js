import { createContext } from "react";

const JobsContext = createContext({
  jobs: [],
  isSelected: false,
  setJob: (job) => {},
  setAllJobs: (jobs) => {},
  setIsSelected: (value) => {},
});

export default JobsContext;
