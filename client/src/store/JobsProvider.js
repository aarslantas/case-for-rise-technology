import { useReducer } from "react";
import { sortFromUrgentToTrival } from "../helper/sorting";
import JobsContext from "./JobsContext";

const initialJobsState = {
  jobs: [],
  isSelected: false,
  priorityState: "fromUrgentToTrival",
};

const jobsReducer = (state, action) => {
  if (action.type === "SETJOB") {
    const newJobs = state.jobs.concat(action.job);
    return { ...state, jobs: newJobs };
  }
  if (action.type === "SETALLJOBS") {
    return { ...state, jobs: action.jobs };
  }

  if (action.type === "SETISSELECTED") {
    return { ...state, isSelected: action.value };
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

  const setAllJobs = (jobs) => {
    dispacthJobsState({ type: "SETALLJOBS", jobs });
  };
  const setIsSelected = (value) => {
    dispacthJobsState({ type: "SETISSELECTED", value });
  };

  const jobsContext = {
    jobs: jobsState.jobs,
    isSelected: jobsState.isSelected,
    setJob,
    setAllJobs,
    setIsSelected,
  };

  return (
    <JobsContext.Provider value={jobsContext}>{children}</JobsContext.Provider>
  );
};

export default JobsProvider;
