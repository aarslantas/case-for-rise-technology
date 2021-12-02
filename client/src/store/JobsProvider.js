import { useReducer } from "react";
import JobsContext from "./JobsContext";

const initialJobsState = {
  jobs: [],
};

const jobsReducer = (state, action) => {
  if (action.type === "SETJOB") {
    const newJobs = state.jobs.concat(action.job);
    return { ...state, jobs: newJobs };
  }

  return state;
};

const JobsProvider = ({ children }) => {
  const [jobsState, dispacthJobsState] = useReducer(
    jobsReducer,
    initialJobsState
  );

  const setJob = (job) => {
    dispacthJobsState({ type: "SETJOB", job });
  };

  const getAllJobs = () => {
    dispacthJobsState({ type: "GETALLJOBS" });
  };

  const jobsContext = {
    jobs: jobsState.jobs,
    setJob,
    getAllJobs,
  };

  return (
    <JobsContext.Provider value={jobsContext}>{children}</JobsContext.Provider>
  );
};

export default JobsProvider;
