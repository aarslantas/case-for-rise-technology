import HomePage from "./pages/HomePage";
import JobsProvider from "./store/JobsProvider";

function App() {
  return (
    <JobsProvider>
      <HomePage />
    </JobsProvider>
  );
}

export default App;
