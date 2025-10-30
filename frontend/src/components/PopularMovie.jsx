import Card from "./Card";

function PopularMovie() {
  
  return (
    <div className="row">
      <div className="col-3">
        <Card title="jaki chan" descriptoin="movie" rating='9'></Card>
      </div>
      <div className="col-3">
        <Card title="spiderman" descriptoin="movie" rating='6'></Card>
      </div>
      <div className="col-3">
        <Card title="batman" descriptoin="movie" rating='10'></Card>
      </div>
      <div className="col-3">
        <Card title="aquaman" descriptoin="movie" rating='1'></Card>
      </div>
    </div>
  );
}

export default PopularMovie;
