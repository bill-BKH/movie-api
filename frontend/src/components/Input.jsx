import { useRef } from "react";

function Input(props) {
  const inputBox = useRef(null);

  const handleClick = ()=>{
    props.onClick(inputBox.current.value) 
  }

  return (
    <>
      <div className="input-group my-3">
        <input
          ref={inputBox}
          type="text"
          className="form-control"
          placeholder="اضافه کردن ماده غذایی جدید"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        ></input>
        <button
          onClick={handleClick}
          className="btn btn-primary"
          type="button"
          id="button-addon1"
        >
          ذخیره
        </button>
      </div>
    </>
  );
}

export default Input;
