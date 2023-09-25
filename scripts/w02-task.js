/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Andres Montero';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/me.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Burgers", "Ice Cream"];
foodElement.innerHTML = favoriteFoods.join(", ") + "<br>";

const anotherFavoriteFood = "Pasta";
favoriteFoods.push(anotherFavoriteFood);
foodElement.innerHTML += favoriteFoods.join(", ") + "<br>";

favoriteFoods.shift();
foodElement.innerHTML += favoriteFoods.join(", ") + "<br>";

favoriteFoods.pop();
foodElement.innerHTML += favoriteFoods.join(", ");


const imageElement = document.getElementById('img');
imageElement.setAttribute('src', profilePicture);

const altText = `Profile image of ${fullName}`;
imageElement.setAttribute('alt', altText);