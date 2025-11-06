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
        <i onClick={changeLike} className={like?"bi bi-heart-fill text-danger":"bi bi-heart-fill"}></i>
    </>
  );
}

export default Like;
