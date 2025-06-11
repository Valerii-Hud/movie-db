'use strict';

import {
  movieDB,
  adv,
  poster,
  posterBackgroundImage,
  genre,
  movieList,
} from './constants.js';

adv.forEach((item) => item.remove());

genre.textContent = 'драма';

poster.style.backgroundImage = posterBackgroundImage;

movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((film, index) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">
        ${index + 1}. ${film}
        <div class="delete"></div>
    </li>
    `;
});
