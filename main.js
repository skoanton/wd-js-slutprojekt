
const BASE_URL = "https://majazocom.github.io/Data/solaris.json";
let apikey;
let dynamicTitles;
let isShowingInfo = false;

const infoModule = document.querySelector(".information-module");
const main = document.querySelector("main");

const sun = document.getElementById("0");
const mercury = document.getElementById("1");
const venus = document.getElementById("2");
const earth = document.getElementById("3");
const mars = document.getElementById("4");
const jupiter = document.getElementById("5");
const saturn = document.getElementById("6");
const uranus = document.getElementById("7");
const neptune = document.getElementById("8");

const fetchInformation = async () => {
    try {

        const response = await fetch(`${BASE_URL}`);

        const data = await response.json();
        console.log(data);
        if (!response.ok) {
            throw new error("Failed to catch bodies");
        }
        return data;
    }

    catch (error) {
        console.error(error);
    }

}

const showStars = () => {

    const spaceDiv = document.getElementById("space");
    spaceDiv.style.display = "block"
    console.log(document.getElementById("space"));
    console.log("visar stjärnor");

}

const hideStars = () => {
    document.getElementById("space").style.display = "none";
}


fetchInformation();

const hideStartSite = () => {

    const header = document.querySelector(".title-box");
    const planetBox = document.querySelector(".planet-box");
    header.style.display = "none";
    planetBox.style.display = "none"


    showStars();

}

const showStartSite = () => {
    const header = document.querySelector(".title-box");
    const planetBox = document.querySelector(".planet-box");
    header.style.display = "flex";
    planetBox.style.display = "flex";
    changeSubstract(0);
    hideStars();
}


const removeInfoInMoon = (moons) => {
    console.log(moons.hasChild);
    while (moons.firstChild) {
        console.log("removing moons");
        moons.removeChild(moons.firstChild);
    }
}

const addInformation = (planet) => {

    document.getElementById("title").textContent = planet.name;
    document.getElementById("title-latin").textContent = planet.latinName;
    document.getElementById("radius").textContent = `${planet.circumference.toLocaleString()} km`;
    document.getElementById("description").textContent = planet.desc;
    document.getElementById("distanceFromSun").textContent = `${planet.distance.toLocaleString()} km`;
    document.getElementById("maxTemp").textContent = `${planet.temp.day}C`;
    document.getElementById("minTemp").textContent = `${planet.temp.night}C`;



    const moonsP = document.getElementById("moons");
    moonsP.textContent = "";
    let currentRow = 0;

    for (const moon of planet.moons) {
        if (currentRow > 5) {
            moonsP.textContent += " ";

            currentRow = 0;
        }
        else {
            moonsP.textContent += `${moon}, `;
            currentRow++;
        }

    }





}


changeSubstract = (id) => {

    const planets = document.getElementById(0);
    console.log("Chaning substract on",planets);

    switch (Number(id)) {
        case 0:
            for(let i = 0; i<planets.children.length; i++){
                planets.children[i].style.backgroundColor = "#FFD029";
                if(i != 0){
                    planets.children[i].style.display = "none";
                }
            }
           
            break;

        case 1:
            console.log("chaning id", id);
            for (const planet of planets.children) {
                planet.style.backgroundColor = "#888888";
                if(window.getComputedStyle(planet).display === "none"){
                    console.log("Activating shadow");
                    planet.style.display = "block";
                }
            }

            break;

            case 2:

            for (const planet of planets.children) {
                planet.style.backgroundColor = "#E7CDCD";
                if(window.getComputedStyle(planet).display === "none"){
                    console.log("Activating shadow");
                    planet.style.display = "block";
                }
            }

            break;
            case 3:

            for (const planet of planets.children) {
                planet.style.backgroundColor = "#428ED4";
                if(window.getComputedStyle(planet).display === "none"){
                    console.log("Activating shadow");
                    planet.style.display = "block";
                }
            }

            break;
            case 4:

            for (const planet of planets.children) {
                planet.style.backgroundColor = "#EF5F5F";
                if(window.getComputedStyle(planet).display === "none"){
                    console.log("Activating shadow");
                    planet.style.display = "block";
                }
            }

            break;
            case 5:

            for (const planet of planets.children) {
                planet.style.backgroundColor = "#E29468";
                if(window.getComputedStyle(planet).display === "none"){
                    console.log("Activating shadow");
                    planet.style.display = "block";
                }
            }

            break;
            case 6:

            for (const planet of planets.children) {
                planet.style.backgroundColor = "#C7AA72";
                if(window.getComputedStyle(planet).display === "none"){
                    console.log("Activating shadow");
                    planet.style.display = "block";
                }
            }

            break;
            case 7:

            for (const planet of planets.children) {
                planet.style.backgroundColor = "#C9D4F1";
                if(window.getComputedStyle(planet).display === "none"){
                    console.log("Activating shadow");
                    planet.style.display = "block";
                }
            }

            break;
            case 8:

            for (const planet of planets.children) {
                planet.style.backgroundColor = "#7A91A7";
                if(window.getComputedStyle(planet).display === "none"){
                    console.log("Activating shadow");
                    planet.style.display = "block";
                }
            }

            break;

        default:
            console.log("Someting went wrong");
    }




}

const getPlanetInformation = async (id) => {



    if (isShowingInfo) {
        showStartSite();
        infoModule.style.display = "none";
        isShowingInfo = false;
    }

    else {
        isShowingInfo = true;
        changeSubstract(id);
        console.log(id);
        hideStartSite();

        let data = await fetchInformation();
        const planet = data[id];

        addInformation(planet);
        infoModule.style.display = "grid";

    }


}


sun.addEventListener("click", function () {
    getPlanetInformation(this.id)
});
mercury.addEventListener("click", function () {
    getPlanetInformation(this.id);

});
venus.addEventListener("click", function () {
    getPlanetInformation(this.id);

});

earth.addEventListener("click", function () {
    getPlanetInformation(this.id);

});
mars.addEventListener("click", function () {
    getPlanetInformation(this.id);

});
jupiter.addEventListener("click", function () {
    getPlanetInformation(this.id);

});

saturn.addEventListener("click", function () {
    getPlanetInformation(this.id);

});

uranus.addEventListener("click", function () {
    getPlanetInformation(this.id);

});
neptune.addEventListener("click", function () {
    getPlanetInformation(this.id);

});

