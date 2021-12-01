const NewJob = () => {
  return (
    <div className="py-4 mb-10">
      <h2 className="block text-lg text-left mb-2 font-bold">Create New Job</h2>
      <form className="grid grid-cols-form gap-4 items-end">
        <div className="flex flex-col">
          <label htmlFor="jobname" className="self-start text-gray-600 mb-1">
            Job Name
          </label>
          <input
            type="text"
            name="jobname"
            className="p-2 border-2 border-gray-500 outline-none rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="priority" className="self-start text-gray-600 mb-1">
            Job Priority
          </label>
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
        <button className="text-white bg-blue-500 px-6 border-2 border-blue-500 py-2 rounded-md">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewJob;
