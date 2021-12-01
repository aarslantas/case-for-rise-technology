import JobItem from "./JobItem";

const JobList = () => {
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
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 fill-current text-gray-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>

            <input
              type="text"
              name="jobname"
              placeholder="Job Name"
              className="w-full py-2 pl-8 border-2 border-gray-500 outline-none rounded-md text-inden"
            />
          </div>

          <select
            value="Radish"
            name="priority"
            className="p-2 border-2 border-gray-500 outline-none rounded-md"
          >
            <option value="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
        </div>
        <div className="grid grid-cols-list justify-items-start p-2 bg-blue-200 font-bold">
          <span>Name</span>
          <span>Priority</span>
          <span>Action</span>
        </div>
        <JobItem />
      </div>
    </>
  );
};

export default JobList;
