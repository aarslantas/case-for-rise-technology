import { useContext, useRef } from "react";
import JobsContext from "../../store/JobsContext";

const NewJob = ({ priorities }) => {
  const jobsCtx = useContext(JobsContext);

  const jobNameRef = useRef();
  const priorityRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const newJob = {
      jobName: jobNameRef.current.value,
      priority: priorityRef.current.value,
    };

    jobsCtx.setJob(newJob);
  };

  return (
    <div className="py-4 mb-10">
      <h2 className="block text-lg text-left mb-2 font-bold">Create New Job</h2>
      <form
        className="grid grid-cols-form gap-4 items-end"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col">
          <label htmlFor="jobname" className="self-start text-gray-600 mb-1">
            Job Name
          </label>
          <input
            type="text"
            name="jobname"
            className="input"
            ref={jobNameRef}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="priority" className="self-start text-gray-600 mb-1">
            Job Priority
          </label>
          <select
            name="priority"
            defaultValue="Urgent"
            className="input"
            ref={priorityRef}
          >
            {priorities.map((priority, i) => (
              <option key={i} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-500 px-6 rounded-md h-12"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewJob;
