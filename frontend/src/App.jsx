import "./App.css";
import Card from "./components/Card";
import PopularMovie from "./components/PopularMovie";
import List from "./components/List";
import Like from "./components/Like";
import Input from "./components/Input";
import { useState } from "react";


function App() {
  
  const [foodList,setFoodList] = useState(['شیر','وانیل','تخم مرغ','آرد','شکر'])

  
  
  return (
    <div className="container">
      {/* <PopularMovie/> */}
      <Input/>
      <div className="mt-4">
        <List names={foodList} />
      </div>
      {/* <Like isLiked={true}/> */}


    </div>
  );
}

export default App;
