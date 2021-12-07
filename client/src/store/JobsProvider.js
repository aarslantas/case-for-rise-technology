import { useReducer } from "react";
import JobsContext from "./JobsContext";

const initialJobsState = {
  jobs: [],
  filteredJobs: [],
  isSelected: false,
  jobId: 0,
  singleJob: {},
  showEditModal: false,
  showDeleteModal: false,
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

  if (action.type === "SETJOBID") {
    return { ...state, jobId: action.jobId };
  }

  if (action.type === "GETSINGLEJOB") {
    const job = state.jobs.find((job) => job.jobId === action.id);

    return {
      ...state,
      singleJob: job,
    };
  }

  if (action.type === "EDITJOB") {
    const newJobs = state.jobs.filter((job) => job.jobId !== action.id);
    const newJob = state.jobs.find((job) => job.jobId === action.id);
    const index = state.jobs.findIndex((job) => job.jobId === action.id);

    newJob.priorityName = action.priorityName;
    newJob.priorityNumber = action.priorityNumber;

    newJobs.splice(index, 0, newJob);

    return {
      ...state,
      jobs: newJobs,
    };
  }

  if (action.type === "DELETEJOB") {
    const newJobs = state.jobs.filter((job) => job.jobId !== action.id);
    return {
      ...state,
      jobs: newJobs,
    };
  }

  if (action.type === "SHOWEDITMODAL") {
    return {
      ...state,
      showEditModal: action.value,
    };
  }
  if (action.type === "SHOWDELETEMODAL") {
    return {
      ...state,
      showDeleteModal: action.value,
    };
  }

  return state;
};

const JobsProvider = ({ children }) => {
  const [jobsState, dispatchJobsAction] = useReducer(
    jobsReducer,
    initialJobsState
  );

  const setJob = (job) => {
    dispatchJobsAction({ type: "SETJOB", job });
  };

  const setJobToFilteredJobs = (job) => {
    dispatchJobsAction({ type: "SETJOBTOFILTEREDJOBS", job });
  };

  const setAllJobs = (jobs) => {
    dispatchJobsAction({ type: "SETALLJOBS", jobs });
  };
  const setIsSelected = (value) => {
    dispatchJobsAction({ type: "SETISSELECTED", value });
  };
  const setFilteredJobs = (jobs) => {
    dispatchJobsAction({ type: "SETFILTEREDJOBS", filteredJobs: jobs });
  };
  const setJobId = (id) => {
    dispatchJobsAction({ type: "SETJOBID", jobId: id });
  };

  const getSingleJob = (id) => {
    dispatchJobsAction({ type: "GETSINGLEJOB", id: id });
  };

  const editJob = (id, priorityName, priorityNumber) => {
    dispatchJobsAction({ type: "EDITJOB", id, priorityName, priorityNumber });
  };

  const deleteJob = (id) => {
    dispatchJobsAction({ type: "DELETEJOB", id: id });
  };

  const showEditModalFunc = (value) => {
    dispatchJobsAction({ type: "SHOWEDITMODAL", value: value });
  };

  const showDeleteModalFunc = (value) => {
    dispatchJobsAction({ type: "SHOWDELETEMODAL", value: value });
  };

  const jobsContext = {
    jobs: jobsState.jobs,
    isSelected: jobsState.isSelected,
    filteredJobs: jobsState.filteredJobs,
    jobId: jobsState.jobId,
    singleJob: jobsState.singleJob,
    showEditModal: jobsState.showEditModal,
    showDeleteModal: jobsState.showDeleteModal,
    setJob,
    setJobToFilteredJobs,
    setAllJobs,
    setIsSelected,
    setFilteredJobs,
    setJobId,
    getSingleJob,
    editJob,
    deleteJob,
    showEditModalFunc,
    showDeleteModalFunc,
  };

  return (
    <JobsContext.Provider value={jobsContext}>{children}</JobsContext.Provider>
  );
};

export default JobsProvider;
