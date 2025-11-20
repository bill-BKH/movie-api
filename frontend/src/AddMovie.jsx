import { useRef } from "react";

function AddMovie() {

    const inputBox = useRef(null);


    const createMovie = (event) => {
        event.preventDefault();
        console.log(inputBox.current.value)
        fetch('http://127.0.0.1:8000/movie/create/',{
            method:'POST',
            body:JSON.stringify({
            "title": inputBox.current.value,
            "year": null,
            "image": null,
            "rating": null,
            "story": "",
            "geners": null,
            "user": null,
            "director": null
            }),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
            })


            {

}
    }

    return (<>
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <form onSubmit={createMovie}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">عنوان فیلم</label>
                            <input ref={inputBox} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">سال تولید فیلم</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">ذخیره</button>
                    </form>
                </div>
            </div>

        </div>

    </>);
}

export default AddMovie;