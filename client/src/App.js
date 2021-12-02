import NewJob from "./components/NewJob/NewJob";
import JobList from "./components/JobList/JobList";
import { usePriorty } from "./hooks/usePriority";
import JobsProvider from "./store/JobsProvider";

function App() {
  const { isLoading, isFetching, data, isError, error } = usePriorty();

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  const { priorities } = data?.data;

  return (
    <JobsProvider>
      {!isLoading && !isFetching && (
        <div className="pt-10 px-20">
          <header className="text-xl text-blue-700 border-b border-gray-300 text-left pt-4 mb-8">
            LOGO
          </header>
          <NewJob priorities={priorities} />
          <JobList priorities={priorities} />
          <footer className="h-16 mt-16 bg-indigo-50 rounded-t-sm flex justify-between items-center p-4 ">
            <span>git</span>
            <span>2021</span>
          </footer>
        </div>
      )}
    </JobsProvider>
  );
}

export default App;
