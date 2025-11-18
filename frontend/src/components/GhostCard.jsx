function GhostCard(){
    return <div className="col-3">
        <div className="card">
          <div className="placeholder placeholder-wave" style={{ height: 300 }}></div>
          <div className="card-body">
            <h5 className="placeholder placeholder col-6">

              {/* <span className="overline"></span> */}
            </h5>
            <p className="placeholder placeholder-sm placeholder-wave col-12 mt-3"></p>
            <button className="btn btn-primary placeholder col-5 placeholder-wave" disabled></button>
          </div>
        </div>
      </div>
}

export default GhostCard;