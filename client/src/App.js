import NewJob from "./components/NewJob/NewJob";
import "./App.css";
import JobList from "./components/JobList/JobList";

function App() {
  return (
    <div className="font-sans font-light pt-10 px-20">
      <header className="text-xl text-blue-700 border-b border-gray-300 text-left py-2 px-0">
        LOGO
      </header>
      <NewJob />
      <JobList />
    </div>
  );
}

export default App;
