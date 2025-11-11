import { useState } from "react";

function ListItem(props) {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    // if (checked == true){
    //     setChecked(false)
    // }else{
    //     setChecked(true)
    // }
    setChecked(!checked);
  };

    const handleRemove = ()=>{
      props.onRemove(props.item)
    }
      return (
        <>
          <li className="d-flex justify-content-between list-group-item">
            <span className={checked == true ? "text-decoration-line-through" : ""}>
              {props.item}
            </span>
            <div>
              <button onClick={handleChecked} className="btn btn-primary mx-2">
                <i className="bi bi-pencil"></i>
              </button>
              <button onClick={handleRemove} className="btn btn-danger">
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </li>
        </>
      );
}

export default ListItem;
