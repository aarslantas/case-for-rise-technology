import { createContext } from "react";

const JobsContext = createContext({
  jobs: [],
  setJob: (job) => {},
  getAllJobs: () => {},
});

export default JobsContext;
