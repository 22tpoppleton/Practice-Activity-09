//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import { movies } from './movies'

for(let m of movies){
    let m_thumb = document.getElementById('m'+ m.id)
    m_thumb.innerHTML = `
    <img src="${m.poster}" alt="${m.title}" class="m.img-thumbnail"/>
    `

    m_thumb.onclick = function(){
        displayMovie(m)
    }
}

let fetured_movie = document.querySelector(".featured")

function displayMovie(movie){
    fetured_movie.innerHTML = `
    <div class="card">
      <div class="card-header">${movie.title}</div>
      <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
      <div class="card-body">
        <h5 class="card-title"><small>${movie.year}, ${movie.genre}</small></h5>
        <p class="card-text">${movie.plot}</p>
      </div>
      <div class="card-footer text-body-secondary">
        <div class="row row-cols-3">
          <div class="col"><strong>Rating: </strong>${movie.rating}</div>
          <div class="col"><strong>Rated: </strong>${movie.rated}</div>
          <div class="col"><strong>Votes: </strong>${movie.votes}</div>
        </div>
      </div>
    </div>
    `
}

function searchMovies(event) {
    event.preventDefault();
  
    let input = document.querySelector('[type="search"]').value.toUpperCase() || "";
    let count = 0;
  
    for (let m of movies) {
      let movieElement = document.querySelector(`#m${m.id}`);
      let title = m.title.toUpperCase();
  
      if (title.indexOf(input) === -1) {
        movieElement.classList.add('d-none');
      } else {
        movieElement.classList.remove('d-none');
        count++;
      }
    }
  
    fetured_movie.innerHTML = count === 0 ? 'Nothing was found' : '';
  }
  
  document.querySelector("button").onclick = searchMovies;
  
  document.querySelector('[type="search"]').addEventListener("input", searchMovies);
  
  document.querySelector("form").addEventListener("submit", searchMovies);
  