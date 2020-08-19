console.log('My files are connected')

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const baseURL = "https://superheroapi.com/api/962811030808292/";
let url;

const searchHero = document.getElementById("searchHero");
const searchFormSuperHero = document.getElementById("formSuperHero");

const heroSection = document.getElementById("heroSection");

searchFormSuperHero.addEventListener("submit", fetchResultsHero);

function fetchResultsHero(d) {
    d.preventDefault();
    let url = baseURL + searchHero.value;

    console.log("URL:", url);

    fetch(proxyurl + url)
    .then(function(result) {
        return result.json();
    })
    .then(function(json) {
        displayResultsHero(json);
    });

function displayResultsHero(json) {
    console.log("Display Results", json);
    while (heroSection.firstChild) {
        heroSection.removeChild(heroSection.firstChild);
    }
    let superHero = json;

    if(searchHero.length === 0) {
        console.log("No results");
    } else {
        let formHero = document.createElement("form");
        formHero.setAttribute("class", "formHero");
        let headingHero = document.createElement("h2");
        headingHero.setAttribute("id", "headingHero");
        let heroImg = document.createElement("img");
        heroImg.setAttribute("id", "heroImg");
        let clearFixHero = document.createElement("div");
        let paraHero = document.createElement("para");
        paraHero.setAttribute("class", "heroStats");

        headingHero.textContent = superHero.name;
        console.log("SuperHero:", superHero);

        if(superHero.image.url.length > 0) {
            heroImg.src = superHero.image.url;
            heroImg.alt = "Picture of Superhero";
        }

        paraHero.textContent = "Powerstats: ";

        for (let h = 0; h < 1; h++) {
            let spanHero = document.createElement("span");
            spanHero.setAttribute("class", "heroPowerStats");
            spanHero.textContent += superHero.powerstats.combat + "- Combat Level, ";
            spanHero.textContent += superHero.powerstats.intelligence + "- Intelligence Level, ";
            spanHero.textContent += superHero.powerstats.power + "- Power Level, ";
            spanHero.textContent += superHero.powerstats.speed + "- Speed Level, ";
            paraHero.appendChild(spanHero);
        }
        clearFixHero.setAttribute("class", "clearFixHero");

        formHero.appendChild(headingHero);
        formHero.appendChild(clearFixHero);
        formHero.appendChild(heroImg);
        formHero.appendChild(paraHero);
        heroSection.appendChild(formHero);
    }
}
}