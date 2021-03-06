import { useContext, useState } from "react";
import {
  sortFromUrgentToTrival,
  sortFromTrivalToUrgent,
} from "../../helper/sorting";
import JobsContext from "../../store/JobsContext";
import JobItem from "./JobItem";

const JobList = () => {
  const jobsCtx = useContext(JobsContext);
  const [priorityState, setPriorityState] = useState("fromUrgentToTrival");
  const [isFiltered, setIsfiltered] = useState(false);

  let jobs = [...jobsCtx.jobs];
  let filteredJobs = [...jobsCtx.filteredJobs];

  if (jobsCtx.filteredJobs.length === 0 && !isFiltered) {
    filteredJobs = [...jobsCtx.jobs];
  }

  if (jobs.length !== filteredJobs.length && !isFiltered) {
    filteredJobs = [...jobsCtx.jobs];
  }

  const sortingHandler = (e) => {
    jobsCtx.setIsSelected(true);
    if (Number(e.target.value) === 0) {
      filteredJobs = sortFromUrgentToTrival(filteredJobs);

      setPriorityState("fromUrgentToTrival");
      jobsCtx.setFilteredJobs(filteredJobs);
    } else {
      filteredJobs = sortFromTrivalToUrgent(filteredJobs);

      setPriorityState("fromTrivalToUrgent");
      jobsCtx.setFilteredJobs(filteredJobs);
    }
  };

  const changeHandler = (e) => {
    const searchValue = e.target.value;
    setIsfiltered(true);
    filteredJobs = jobs.filter((job) => job.jobName.startsWith(searchValue));

    jobsCtx.setFilteredJobs(filteredJobs);

    if (!searchValue) setIsfiltered(false);
  };

  if (!jobsCtx.isSelected) {
    if (priorityState === "fromUrgentToTrival")
      filteredJobs = sortFromUrgentToTrival(filteredJobs);
    else filteredJobs = sortFromTrivalToUrgent(filteredJobs);
  }

  return (
    <div>
      <h2 className="block text-lg text-left mb-2 font-bold ">Job List</h2>
      <div className="border border-gray-300 rounded-md">
        <div className="grid gap-4 p-4 sm:grid-cols-search bg-blue-100 rounded-t-md">
          <div className="relative ">
            <label
              htmlFor="jobname"
              className="absolute w-6 h-6 left-0 top-1/2 transform -translate-y-1/2 ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 fill-current text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <input
              type="text"
              name="jobName"
              placeholder="Job Name"
              className="w-full input pl-8"
              onChange={changeHandler}
            />
          </div>

          <select name="priority" className="input" onChange={sortingHandler}>
            <option value="0"> Urgent - Trivial</option>
            <option value="1"> Trivial - Urgent</option>
          </select>
        </div>
        <div className="grid grid-cols-list2 gap-3 xl:grid-cols-list justify-items-start px-4 py-2 bg-blue-200 font-bold">
          <span>Name</span>
          <span>Priority</span>
          <span>Action</span>
        </div>
        <div className="min-h-12 bg-gray-200">
          {filteredJobs.map((job, i) => {
            return <JobItem key={i} index={i} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default JobList;
