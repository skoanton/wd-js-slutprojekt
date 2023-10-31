
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

 const showStars = () =>{
    
    const spaceDiv = document.getElementById("space");
    spaceDiv.style.display = "block"
    console.log(document.getElementById("space"));
    console.log("visar stjärnor");

} 

const hideStars = ()=> {
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
    moonsP.textContent="";
    let currentRow = 0;
    
    for (const moon of planet.moons){
        if(currentRow > 5){
            moonsP.textContent += " ";
            
            currentRow = 0;
        }
        else{
            moonsP.textContent += `${moon}, `;
            currentRow++;
        }
        
    }





}


changeSubstract = (id) => {

    let path = `./images/Subtract_${id}.svg`;
    console.log(path);
    sun.setAttribute("src", path)


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

