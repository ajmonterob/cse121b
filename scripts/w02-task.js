/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Andres Montero';
const currentYear = new Date().getFullYear();


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

const profilePicture = "images/me.png";
imageElement.setAttribute('src', profilePicture);

const altText = `Profile image of ${fullName}`;
imageElement.setAttribute('alt', altText);

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



/* console.log(`src: ${imageElement.getAttribute('src')}`);
console.log(`src: ${imageElement.getAttribute('alt')}`);*/