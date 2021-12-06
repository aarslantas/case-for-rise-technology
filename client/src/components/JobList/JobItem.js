import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";
import Priority from "./Priority";

const JobItem = ({ job, index }) => {
  const { jobId, jobName, priorityName } = job;
  let bgClass = index % 2 ? "bg-gray-100" : "bg-white";

  const classes =
    "grid gap-3 grid-cols-list2  xl:grid-cols-list px-4 py-3 items-center";
  const newClasses = classes.concat(" " + bgClass);

  return (
    <div className={newClasses}>
      <p className="text-sm sm:text-base overflow-hidden">{jobName}</p>
      <Priority priorityName={priorityName} />
      <div className="flex space-x-3">
        <EditButton jobId={jobId} />
        <DeleteButton jobId={jobId} />
      </div>
    </div>
  );
};

export default JobItem;
