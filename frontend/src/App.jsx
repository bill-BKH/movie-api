import "./App.css";
import Card from "./components/Card";
import PopularMovie from "./components/PopularMovie";
import List from "./components/List";
import Like from "./components/Like";


function App() {


  
  return (
    <div className="container">
      {/* <PopularMovie/>
      <div className="mt-4">
        <List names={['ali','nima','akbar','jasem','togrol']} />
      </div> */}
      <Like isLiked={true}/>
      <Like isLiked={true}/>
      <Like isLiked={false}/>
      <Like isLiked={true}/>
      <Like isLiked={true}/>
      <Like isLiked={false}/>
    </div>
  );
}

export default App;
