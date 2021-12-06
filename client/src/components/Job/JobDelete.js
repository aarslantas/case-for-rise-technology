import { useContext } from "react";
import JobsContext from "../../store/JobsContext";

const JobDelete = () => {
  const jobsCtx = useContext(JobsContext);
  const cancelHandler = () => {
    jobsCtx.showDeleteModalFunc(!jobsCtx.showDeleteModal);
  };

  const clickHandler = () => {
    const { jobId } = jobsCtx.singleJob;
    jobsCtx.deleteJob(jobId);
    jobsCtx.showDeleteModalFunc(!jobsCtx.showDeleteModal);
  };
  return (
    <div className=" py-2 flex justify-center ">
      <div className="w-3/4 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 text-red-600 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-center text-2xl font-bold mb-4 ">
          Are you sure you want to delete it?
        </p>
        <div className="flex justify-around self-stretch">
          <button
            className="bg-gray-300 w-5/12 py-2 rounded-md"
            onClick={cancelHandler}
          >
            Cancel
          </button>
          <button
            className="bg-red-500  w-5/12 py-2 rounded-md text-white"
            onClick={clickHandler}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDelete;
