import { useRef } from "react";

function Input() {
  const addFood = () => {
    // console.log(inputBox.current.value);
    
  };
  const inputBox = useRef(null);

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
          onClick={addFood}
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
