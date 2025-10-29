
let csrftoken = getCookie('csrftoken');
let moviesResult = document.getElementById('moviesResult')
let getMoviesBtn = document.getElementById('getMoviesBtn')
let movieDetails = document.getElementById('movieDetails')


function getMovieDetail(id){
    fetch(`http://127.0.0.1:8000/movie/detail/${id}/`)
    .then((res)=>{return res.json()})
    .then((data)=>{
        movieDetails.innerHTML =''
        for (const key of Object.keys(data)){
            let p = document.createElement('p')
            let text = document.createTextNode(`${key} : ${data[key]}`)
            p.appendChild(text)
            movieDetails.appendChild(p)
        }
    })
}


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


function editMovie(id,title,year,genre){
    mvoieTitle.value = title
    mvoieYear.value = year
    mvoieId.value = id
    movieGenres.value = genre

    changeFormState('update')
}


function renderMovie(movies) {
    moviesResult.innerHTML = ''
    
    for (const movie of movies) {
        moviesResult.innerHTML += `
            <div class="col-4">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <div class="row">
                        <div class="col-4">
                            <button class="btn btn-primary" onclick="getMovieDetail(${movie.id})"><i class="bi bi-eye-fill"></i></button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-danger" onclick="deleteMovie(${movie.id})"><i class="bi bi-trash3-fill"></i></button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-info" id="edit-${movie.id}" onclick="editMovie('${movie.id}','${movie.title}','${movie.year}','${movie.geners}')"><i class="bi bi-pencil-fill"></i></button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>`}
}


// get movies list and send them to render function
function getMovies() {
    fetch('http://127.0.0.1:8000/movie/list/')
        .then(res => res.json())
        .then((data) => {
            renderMovie(data)
        })
}


// delete a movie with specified id
function deleteMovie(id) {
    fetch(`http://127.0.0.1:8000/movie/detail/${id}/`, {
        method: 'DELETE',
        headers: {
            "X-CSRFToken": csrftoken,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res)
        .then((data) => {
            console.log(data)
            getMovies()
        })
}


let mvoieTitle = document.getElementById('mvoieTitle')
let mvoieYear = document.getElementById('mvoieYear')
let mvoieId = document.getElementById('mvoieId')
let movieSubmit = document.getElementById('movieSubmit')


function resetForm() {
    mvoieTitle.value = ''
    mvoieYear.value = ''
    movieGenres.value = ''
}


let formText = document.getElementById('formText')
function changeFormState(mode) {
    if (mode == 'update'){
        movieSubmit.innerText = 'Update Movie '
        movieSubmit.classList.remove('btn-success')
        movieSubmit.classList.add('btn-primary')
        formText.innerText = 'Update Movie'
        movieSubmit.dataset.mode = 'update'
    }else if (mode == 'create'){
        resetForm()
        movieSubmit.innerText = 'Create Movie '
        movieSubmit.classList.remove('btn-primary')
        movieSubmit.classList.add('btn-success')
        formText.innerText = 'Create Movie'
        movieSubmit.dataset.mode = 'create'
    }
}



movieSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.dataset.mode == 'create') {
        fetch('http://127.0.0.1:8000/movie/list/', {
            method: 'POST',
            body: JSON.stringify({
                title: mvoieTitle.value,
                year: mvoieYear.value,
                geners: movieGenres.value
            }),
            headers: {
                "X-CSRFToken": csrftoken,
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
        })
        .then(res => { })
        .then((data) => {
            getMovies()
        })

    } else if (e.target.dataset.mode == 'update') {
        fetch(`http://127.0.0.1:8000/movie/detail/${mvoieId.value}/`, {
            method: 'PUT',
            body: JSON.stringify({
                title: mvoieTitle.value,
                year: mvoieYear.value,
                geners: movieGenres.value
            }),
            headers: {
                "X-CSRFToken": csrftoken,
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then((data) => { 
                getMovies()
                changeFormState('create')
             })
    }
})



getMoviesBtn.addEventListener('click', getMovies)


let movieGenres = document.getElementById('movieGenres')
document.addEventListener("DOMContentLoaded", () => {
    fetch(`http://127.0.0.1:8000/movie/genres/`)
        .then(res => res.json())
        .then((data) => {
            for (const genre of data) {
                let option = document.createElement('option')
                let text = document.createTextNode(genre.title)

                option.appendChild(text)
                option.value = genre.id
                movieGenres.appendChild(option)
            }
        })
})

resetForm()