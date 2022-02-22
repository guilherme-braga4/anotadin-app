import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header";
import "./index.css";
import Routering from "./routes";

function App() {
  return (
    <div className="container">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
