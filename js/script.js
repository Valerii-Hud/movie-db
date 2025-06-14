'use strict';

import {
  movieDB,
  adv,
  poster,
  posterBackgroundImage,
  genre,
  movieList,
  addInput,
  addForm,
  checkbox,
} from './constants.js';

document.addEventListener('DOMContentLoaded', () => {
  function advertisingRemove(advertising) {
    advertising.forEach((item) => item.remove());
  }

  function changeContent(element, content) {
    element.textContent = content;
  }

  function changeBackground(parent, background) {
    parent.style.backgroundImage = background;
  }

  function sortArr(arr) {
    arr.sort();
  }

  function addItemToMovieList(form, arr) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let userFilm = addInput.value.trim();
      const favorite = checkbox.checked;

      if (userFilm) {
        if (userFilm.length > 21) {
          userFilm = `${userFilm.substring(0, 22)}...`;
        }
        if (favorite) {
          console.log('Added favorite film');
        }

        arr.push(userFilm);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, movieList);
        e.target.reset();
      }
    });
  }

  function createMovieList(films, parent) {
    parent.innerHTML = '';
    sortArr(films);

    films.forEach((film, index) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">
          ${index + 1}. ${film}
          <div class="delete"></div>
        </li>
      `;
    });
    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', (e) => {
        btn.parentElement.remove();
        films.splice(i, 1);
        createMovieList(films, parent);
      });
    });
  }

  advertisingRemove(adv);
  changeContent(genre, 'drama');
  changeBackground(poster, posterBackgroundImage);
  createMovieList(movieDB.movies, movieList);
  addItemToMovieList(addForm, movieDB.movies);
});
