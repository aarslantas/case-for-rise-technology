import { useContext, useRef } from "react";
import { usePriorty } from "../../hooks/usePriority";
import JobsContext from "../../store/JobsContext";

const JobEdit = () => {
  const jobsCtx = useContext(JobsContext);
  const { jobId, jobName } = jobsCtx.singleJob;

  const priorityRef = useRef();

  const { isLoading, isFetching, data, isError, error } = usePriorty();
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  const { priorities } = data?.data;

  const cancelHandler = () => {
    jobsCtx.showEditModalFunc(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const [priorityName, priorityNumber] = priorityRef.current.value.split("-");
    jobsCtx.editJob(jobId, priorityName, priorityNumber);
    jobsCtx.showEditModalFunc(false);
  };

  return (
    <>
      <h2 className="text-2xl text-center mb-6">Job Edit</h2>
      <form className="px-10 py-2 m-auto" onSubmit={submitHandler}>
        <div className="flex flex-col justify-between relative h-20 mb-3">
          <label htmlFor="jobname" className="absolute text-gray-600 -top-7">
            Job Name
          </label>
          <input
            type="text"
            name="jobName"
            className="input disabled:opacity-50 "
            value={jobName}
            disabled
          />
        </div>

        <div className="flex flex-col relative h-20">
          <label htmlFor="priority" className="absolute text-gray-600 -top-7">
            Job Priority
          </label>
          <select
            name="priority"
            defaultValue="Urgent"
            className="input"
            ref={priorityRef}
          >
            {priorities.map((priority, i) => (
              <option
                key={i}
                value={priority.priorityName.concat(
                  "-",
                  priority.priorityNumber
                )}
              >
                {priority.priorityName}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-around">
          <button
            className="bg-gray-300 w-5/12 py-2 rounded-md"
            onClick={cancelHandler}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-red-500  w-5/12 py-2 rounded-md text-white"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default JobEdit;
