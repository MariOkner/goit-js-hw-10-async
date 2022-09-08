// import debounce from 'lodash.debounce';
// import { Notify } from 'notiflix';
// import { fetchMar } from './js/fetchMar';
// import './css/styles.css';

// const DEBOUNCE_DELAY = 300;

// const searchCountryInput = document.querySelector('#search-box');
// const countryListEl = document.querySelector('.country-list'); 
// const countryInfoEl = document.querySelector('.country-info');
    
// searchCountryInput.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));

// function onSearchInput(evt) {
//   evt.preventDefault();
  
//   let searchCountry = searchCountryInput.value.trim();
  
//   if (!searchCountry) {
//     cleanCountryList();
//     cleanCountryInfo();
//     return 
//   };

//   fetchMar(searchCountry)
//     .then((country) => {
//       if (country.length > 10) {
//         Notify.success(`Too many matches found. Please enter a more specific name.`);
//       } else if (country.length >= 2 && country.length <= 10) {
//         cleanCountryInfo();
//         renderCardCountry(country);
//       } else if (country.length === 1) {
//         cleanCountryList();
//         renderInfoCountries(country);
//       }
//     })
//     .catch((error) => {
//     cleanCountryList();
//     cleanCountryInfo();
//     onInputError();
//   });
// };


// function renderCardCountry(country) {
//   const markup = country
//     .map(({ flags, name }) => {
//       return `
//         <li class="country-item">
//           <img class="country-svg" src = "${flags.svg}" alt = "Флаг ${name.official}" width = 40px height = 20px />
//           <h1 class="country-title">${name.official}</h1>
//         </li>
//       `
//     })
//     .join('');
//   countryListEl.innerHTML = markup;
// };

// function renderInfoCountries(country) {
//   const markup = country
//     .map(({name, flags, capital, population, languages }) => {
//       return `
//         <ul class="cards-list">
//           <li class="country-item">
//             <img class="country-svg" src = "${flags.svg}" alt = "Флаг ${name.official}" width = 30px height = 20px />
//             <h1 class="country-title">${name.official}</h1>
//           </li>
//           <li class="countries-item"><b>Capital:</b> ${capital}</li>
//           <li class="countries-item"><b>Population:</b> ${population}</li>
//           <li class="countries-item"><b>Languages:</b> ${Object.values(languages).join(', ')}</li>
//         </ul>   
//       `
//     })
//     .join('');
//   countryInfoEl.innerHTML = markup;
// };

// function cleanCountryList() {
//   countryListEl.innerHTML = '';
// };

// function cleanCountryInfo() {
//   countryInfoEl.innerHTML = '';
// };

// function onInputError(error) {
//     Notify.failure(`Oops, there is no country with that name`);
// };

// // Додала клас для формлення input
// searchCountryInput.classList.add('backlight-frame');