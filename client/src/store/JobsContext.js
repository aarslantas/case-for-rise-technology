import { createContext } from "react";

const JobsContext = createContext({
  jobs: [],
  filteredJobs: [],
  isSelected: false,
  jobId: 0,
  singleJob: {},
  showEditModal: false,
  showDeleteModal: false,
  setJob: (job) => {},
  setJobToFilteredJobs: (job) => {},
  setAllJobs: (jobs) => {},
  setIsSelected: (value) => {},
  setFilteredJobs: (jobs) => {},
  setJobId: (id) => {},
  getSingleJob: (id) => {},
  editJob: (id, pName, pNumber) => {},
  deleteJob: (id) => {},
  showEditModalFunc: (value) => {},
  showDeleteModalFunc: (value) => {},
});

export default JobsContext;
