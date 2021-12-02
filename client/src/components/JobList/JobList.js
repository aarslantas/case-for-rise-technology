import { useContext } from "react";
import JobsContext from "../../store/JobsContext";
import JobItem from "./JobItem";

const JobList = ({ priorities }) => {
  const jobsCtx = useContext(JobsContext);

  return (
    <>
      <h2 className="block text-lg text-left mb-2 font-bold">Job List</h2>
      <div className="border border-gray-300 rounded-md">
        <div className="grid grid-cols-search gap-4 p-4 bg-blue-100 rounded-t-md">
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
              name="jobname"
              placeholder="Job Name"
              className="w-full input pl-8"
            />
          </div>

          <select name="priority" className="input">
            {priorities.map((priority, i) => (
              <option key={i} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-list justify-items-start px-4 py-2 bg-blue-200 font-bold">
          <span>Name</span>
          <span>Priority</span>
          <span>Action</span>
        </div>
        <div className="min-h-12 bg-gray-200">
          {jobsCtx.jobs.map((job, i) => {
            console.log(job, i);
            return <JobItem key={i} index={i} job={job} />;
          })}
        </div>
      </div>
    </>
  );
};

export default JobList;
