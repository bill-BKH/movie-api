import panter from "../assets/img/panter.png";
import "../componentsCss/Card.css";

function Card(props) {
  const btnText = "view movie";

  const makeRating = (rating) => {
    if (rating < 3) {
      return (
        <span class="badge rounded-pill text-bg-danger">{props.rating}</span>
      );
    } else if (rating < 7) {
      return (
        <span class="badge rounded-pill text-bg-warning">{props.rating}</span>
      );
    } else if (rating > 7) {
      return (
        <span class="badge rounded-pill text-bg-success">{props.rating}</span>
      );
    }
  };

  return (
    <div className="card">
      <img src={panter} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {props.title} {makeRating(props.rating)}
          {/* <span className="overline">{props.title}</span> */}
        </h5>
        <p className="card-text">{props.descriptoin}</p>
        <button className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
