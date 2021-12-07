import * as yup from "yup";
import { useContext, useRef } from "react";
import { useFormik } from "formik";
import JobsContext from "../../store/JobsContext";

const NewJob = ({ priorities }) => {
  const jobsCtx = useContext(JobsContext);
  const priorityRef = useRef();
  let jobId = jobsCtx.jobId;

  const submitHandler = (values) => {
    const [priorityName, priorityNumber] = priorityRef.current.value.split("-");
    jobsCtx.setIsSelected(false);

    let newJobId = jobId + 1;

    const newJob = {
      jobId: newJobId,
      jobName: values.jobName,
      priorityName,
      priorityNumber,
    };

    jobsCtx.setJob(newJob);
    jobsCtx.setJobId(newJobId);
    formik.resetForm();
  };

  const validationSchema = yup.object({
    jobName: yup
      .string()
      .trim()
      .required("Lütfen boş bırakmayınız")
      .matches(
        /^[-_ a-zA-Z0-9ğüşöçıİĞÜŞÖÇ]+$/,
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
    <div>
      <h2 className="mb-10 block text-lg text-left sm:mb-4 font-bold ">
        Create New Job
      </h2>
      <form
        className="mb-8 grid gap-0  grid-rows-2 items-center sm:gap-4 sm:grid-cols-form sm:grid-rows-1 sm:h-28"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-4  h-16 flex flex-col justify-between relative sm:h-20 sm:mb-0">
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
            <p className="text-xs sm:text-base text-red-600 absolute bottom-0">
              {formik.errors.jobName}
            </p>
          ) : null}
        </div>
        <div className="mt-2 h-16 flex flex-col relative sm:h-20 sm:mt-0">
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
        <div className=" h-12 sm:h-20">
          <button
            type="submit"
            className="w-full text-white bg-blue-500 px-6  rounded-md h-12 hover:bg-blue-600"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewJob;
