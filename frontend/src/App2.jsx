import "./App.css";
import Card from "./components/Card";
import PopularMovie from "./components/PopularMovie";
import List from "./components/List";
import Like from "./components/Like";
import Input from "./components/Input";
import { useRef, useState } from "react";


function App() {

  const [foodList, setFoodList] = useState(['شیر', 'وانیل', 'تخم مرغ', 'آرد', 'شکر'])

  const addFood = (food) => {
    setFoodList([...foodList, food])
  };

  const removeFood = (foodName) => {
    let filterd_list = foodList.filter((food) => { return food != foodName })
    setFoodList(filterd_list)
  }

  const updateFood = (oldFoodName, newFoodName) => {
    setFoodList(foodList.map((food) => { return food == oldFoodName ? newFoodName : food }))
  }

  const mybtn = useRef(null)



  return (
    <div className="container">
      {/* <PopularMovie/> */}
      {/* <button onClick={() => { updateFood('وانیل', 'شیر پاستوریزه') }}>test</button> */}
      
      
      
      <button ref={mybtn} className="btn btn-primary">ok</button>
      <button onClick={() => {mybtn.current.style.backgroundColor = 'red'}}>change color</button>

      
      
      <Input onClick={addFood} />
      <div>
        <p>تعداد مواد استفاده شده : {foodList.length}</p>
      </div>
      <div className="mt-4">
        <List onRemove={removeFood} names={foodList} />
      </div>




    </div>
  );
}

export default App;
