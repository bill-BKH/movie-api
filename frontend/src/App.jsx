import "./App.css";
import PopularMovie from "./components/PopularMovie";
import { Link } from "react-router";


function App() {
  return (
    <div className="container">
       <Link to="/about"><button className="btn btn-primary">about</button></Link>
       <Link to="/add-movie"><button className="btn btn-primary">add movie</button></Link>
      <PopularMovie />
    </div>
  );
}

export default App;
