import './assets/css/bootstrap.min.css';
import { data } from './db/pokemons.js';

document.addEventListener('DOMContentLoaded', () => {
	const ordenID = document.querySelector('#ordenID');
	const ordenNombre = document.querySelector('#ordenNombre');

	const cardPokemon = (pokemon, item) => {
		const card = document.createElement('div');

		card.classList.add('card');
		card.classList.add('col-12');
		card.classList.add('col-md-4');
		card.classList.add('col-lg-3');
		card.classList.add('mb-3');
		card.classList.add('mx-2');
		card.classList.add('p-0');
		card.classList.add('shadow');
		card.classList.add('text-center');
		card.innerHTML = `
				<div class="card-header">
					<h5 class="card-title"><span>${item.id}.- </span>${item.name}</h5>
				</div>
				<div class="card-body">
				<img width="200px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
					item.id
				}.png" alt="${item.name}" alt="${item.name}">
					<div class="row card-text justify-content-center">${item.types
						.map(
							(tipo) =>
								`<img class="col-6" src="src/public/tipos/${tipo}.png" alt="${tipo}" />`
						)
						.join('')}</div>
				</div>
			`;

		pokemon.appendChild(card);
	};

	setTimeout(() => {
		const pokemon = document.querySelector('#pokemon');

		data.forEach((item) => {
			cardPokemon(pokemon, item);
		});
	}, 1000);

	ordenID.addEventListener('click', () => {
		const pokemon = document.querySelector('#pokemon');

		pokemon.innerHTML = '';

		data.sort((a, b) => a.id - b.id);

		data.forEach((item) => {
			cardPokemon(pokemon, item);
		});
	});

	ordenNombre.addEventListener('click', () => {
		const pokemon = document.querySelector('#pokemon');

		pokemon.innerHTML = '';

		data.sort((a, b) => {
			if (a.name > b.name) {
				return 1;
			}

			if (a.name < b.name) {
				return -1;
			}

			return 0;
		});

		data.forEach((item) => {
			cardPokemon(pokemon, item);
		});
	});
});
