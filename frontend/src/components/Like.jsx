import { useState } from "react";


function Like(props) {
  const [like, setLike] = useState(props.isLiked);

  const changeLike = () => {
    if (like == true) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  return (
    <>
      {like ? (
        <i onClick={changeLike} className="bi bi-heart-fill text-danger"></i>
      ) : (
        <i onClick={changeLike} className="bi bi-heart-fill"></i>
      )}
    </>
  );
}

export default Like;
