/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Andres Montero",
    photo: "images/me.png",
    favoriteFoods: [
      'Rice',
      'Tikka Masala',
      'Prioshki',
      'Shrimp',
      'Banana Cream Pie'
    ],
    hobbies: [
      'Swimming',
      'Reading',
      'Coding',
      'Cooking',
      'Traveling'
    ],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived = [
    {
        place: 'Cartago, Costa Rica ',
        length: '24 year'
    },
    {
        place: 'Heredia, Costa Rica',
        length: '5 years'
    },
    {
        place: 'Mexico',
        length: '5 years'
    }
];
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dd);

    // Add some basic styles to the <dt> and <dd> elements
    dt.style.fontWeight = 'bold';
    dt.style.display = 'block';
    dd.style.marginLeft = '2em';
});

