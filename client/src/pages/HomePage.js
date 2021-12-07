import { useContext } from "react";
import JobList from "../components/JobList/JobList";
import JobEdit from "../components/Job/JobEdit";
import JobDelete from "../components/Job/JobDelete";
import Modal from "../components/Modal/Modal";
import NewJob from "../components/NewJob/NewJob";
import { usePriorty } from "../hooks/usePriority";
import JobsContext from "../store/JobsContext";

const HomePage = () => {
  const jobsCtx = useContext(JobsContext);
  const { showEditModal, showDeleteModal } = jobsCtx;

  const { isLoading, isFetching, data, isError, error } = usePriorty();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="
        loader
        ease-linear
        rounded-full
        border-8 border-t-8 border-gray-200
        h-24
        w-24
      "
        ></div>
      </div>
    );
  }
  if (isError) return <h2>{error.message}</h2>;
  const { priorities } = data?.data;

  return (
    <>
      {!isLoading && !isFetching && (
        <div className=" min-h-screen pt-10 relative  flex flex-col justify-between items-center">
          <header className=" w-4/5 h-14  border-b border-gray-300 text-left pt-4 ">
            <h1 className="text-3xl text-blue-700">LOGO</h1>
          </header>
          <div className="mt-8 sm:mt-14 w-4/5 flex-1 ">
            <NewJob priorities={priorities} />
            <JobList priorities={priorities} />
          </div>

          <footer className=" w-4/5 h-16 mt-2 sm:mt-8 bg-indigo-50 rounded-t-sm flex justify-between items-center p-4 ">
            <span className="w-12 h-8 bg-red-200 text-center text-red-900 rounded-lg">
              git
            </span>
            <span>2021</span>
          </footer>
        </div>
      )}
      {showEditModal && (
        <Modal btnType="edit">
          <JobEdit />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal btnType="delete">
          <JobDelete />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
