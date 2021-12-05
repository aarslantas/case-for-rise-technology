import { useReducer } from "react";
import JobsContext from "./JobsContext";

const initialJobsState = {
  jobs: [],
  filteredJobs: [],
  isSelected: false,
  lastJobs: [],
};

const jobsReducer = (state, action) => {
  if (action.type === "SETJOB") {
    const newJobs = state.jobs.concat(action.job);
    return { ...state, jobs: newJobs };
  }
  if (action.type === "SETJOBTOFILTEREDJOBS") {
    const newJobs = state.jobs.concat(action.job);
    return { ...state, filteredJobs: newJobs };
  }
  if (action.type === "SETALLJOBS") {
    return { ...state, jobs: action.jobs };
  }

  if (action.type === "SETISSELECTED") {
    return { ...state, isSelected: action.value };
  }

  if (action.type === "SETFILTEREDJOBS") {
    return { ...state, filteredJobs: action.filteredJobs };
  }
  if (action.type === "SETLASTJOBS") {
    return { ...state, lastJobs: action.lastJobs };
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

  const setJobToFilteredJobs = (job) => {
    dispacthJobsState({ type: "SETJOBTOFILTEREDJOBS", job });
  };

  const setAllJobs = (jobs) => {
    dispacthJobsState({ type: "SETALLJOBS", jobs });
  };
  const setIsSelected = (value) => {
    dispacthJobsState({ type: "SETISSELECTED", value });
  };
  const setFilteredJobs = (jobs) => {
    dispacthJobsState({ type: "SETFILTEREDJOBS", filteredJobs: jobs });
  };
  const setLastJobs = (jobs) => {
    dispacthJobsState({ type: "SETLASTJOBS", lastJobs: jobs });
  };

  const jobsContext = {
    jobs: jobsState.jobs,
    isSelected: jobsState.isSelected,
    filteredJobs: jobsState.filteredJobs,
    lastJobs: jobsState.lastJobs,
    setJob,
    setJobToFilteredJobs,
    setAllJobs,
    setIsSelected,
    setFilteredJobs,
    setLastJobs,
  };

  return (
    <JobsContext.Provider value={jobsContext}>{children}</JobsContext.Provider>
  );
};

export default JobsProvider;
