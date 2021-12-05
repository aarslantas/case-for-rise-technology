import * as yup from "yup";
import { useContext, useRef } from "react";
import { useFormik } from "formik";
import JobsContext from "../../store/JobsContext";

const NewJob = ({ priorities }) => {
  const jobsCtx = useContext(JobsContext);

  const priorityRef = useRef();

  const submitHandler = (values) => {
    const [priorityName, priorityNumber] = priorityRef.current.value.split("-");
    jobsCtx.setIsSelected(false);

    const newJob = {
      jobName: values.jobName,
      priorityName,
      priorityNumber,
    };
    // if (jobsCtx.filteredJobs.length > 0) {
    //   jobsCtx.setFilteredJobs(newJob);
    //   jobsCtx.setJob(newJob);
    // } else {
    //   jobsCtx.setJob(newJob);
    // }

    jobsCtx.setJob(newJob);
  };

  const validationSchema = yup.object({
    jobName: yup
      .string()
      .trim()
      .required("Lütfen boş bırakmayınız")
      .matches(
        /^[-_ a-zA-Z0-9ğüşöçİĞÜŞÖÇ]+$/,
        "Lütfen geçerli bir değer giriniz"
      ),
  });

  const formik = useFormik({
    onSubmit: submitHandler,
    initialValues: {
      jobName: "",
    },
    validationSchema,
  });

  return (
    <div className="py-4 mb-1">
      <h2 className="block text-lg text-left mb-2 font-bold">Create New Job</h2>
      <form
        className="grid grid-cols-form gap-4 items-center  h-36"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col justify-between relative h-20">
          <label htmlFor="jobname" className="absolute text-gray-600 -top-7">
            Job Name
          </label>
          <input
            type="text"
            name="jobName"
            className="input"
            value={formik.values.jobName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.jobName ? (
            <p className="text-red-600">{formik.errors.jobName}</p>
          ) : null}
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
        <div className="h-20">
          <button
            type="submit"
            className="text-white bg-blue-500 px-6 rounded-md h-12"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewJob;
