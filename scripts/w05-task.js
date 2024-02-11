/* W05: Programming Tasks */
/* Declare and initialize global variables */
const templeList = [];
const templesElement = document.getElementById('temples');


/* async displayTemples Function */
const displayTemples = async (temples) => {
  
   templesElement.style.display = 'grid';
   templesElement.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))'; 
   templesElement.style.gap = '20px'; 
   templesElement.style.padding = '20px'; 
   templesElement.innerHTML = '';

  temples.forEach((temple) => {
    const article = document.createElement('article');
  

    const templeName = document.createElement('h3');
    templeName.textContent = temple.templeName;

    const templeImage = document.createElement('img');
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.location;
    
    templeImage.style.width = '100%'; 
    templeImage.style.height = '200px'; 
    templeImage.style.objectFit = 'cover'; 
    templesElement.style.width = '100%';
    article.appendChild(templeName);
    article.appendChild(templeImage);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch(
      "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    );
    const temples = await response.json();
    templeList.splice(0, templeList.length, ...temples); 
    displayTemples(templeList); 
  };
  

/* reset Function */
const reset = () => {
  templesElement.innerHTML = '';
};


/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById("filtered").value;
    switch (filter) {
      case "utah":
        displayTemples(temples.filter((temple) => temple.location.toLowerCase().includes("utah")));
        break;
      case "notutah":
        displayTemples(temples.filter((temple) => !temple.location.toLowerCase().includes("utah")));
        break;          
      case "older":
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case "all":
        displayTemples(temples);
        break;
    }
  };
  



/* Event Listener */
const filteredElement = document.getElementById("filtered");
filteredElement.addEventListener("change", () => {
  filterTemples(templeList);
});

getTemples();


