
const BASE_URL = "https://majazocom.github.io/Data/solaris.json";
let apikey;
let dynamicTitles;
let isShowingInfo = false;

const infoModule = document.querySelector(".information-module");
const main = document.querySelector("main");

const sun = document.getElementById("0");
const merkurius = document.getElementById("1");
const venus = document.getElementById("2");
const earth = document.getElementById("3");
const mars = document.getElementById("4");
const jupiter = document.getElementById("5");
const saturnus = document.getElementById("6");
const uranus = document.getElementById("7");
const Neptunus = document.getElementById("8");

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

fetchInformation();

const hideStartSite = () => {

    const header = document.querySelector("header");
    const planetBox = document.querySelector(".planet-box");
    header.style.display = "none";
    planetBox.style.display = "none";



}

const showStartSite = () => {
    const header = document.querySelector("header");
    const planetBox = document.querySelector(".planet-box");
    header.style.display = "block";
    planetBox.style.display = "flex";
    changeSubstract(0);
}

const addInformation = (planet) =>{
    
    document.getElementById("radius").textContent = planet.circumference;
    document.getElementById("description").textContent = planet.desc;
    document.getElementById("distanceFromSun").textContent  = planet.distance;
    document.getElementById("maxTemp").textContent = planet.temp.day;
    document.getElementById("minTemp").textContent = planet.temp.night;
    document.getElementById("maxTemp").textContent = planet.temp.day;

    const moonsUl = document.getElementById("moons");

    if (planet.moons.length >= 1) {
        for (const moon of planet.moons) {
            const moonLi = document.createElement("li");
            moonLi.textContent = moon;
            moonsUl.appendChild(moonLi);
        }
        
    }
    else{
         const moonLi = document.createElement("p");
         moonLi.textContent ="Inga månar";
         moonsUl.appendChild(moonLi);   
    }

}


changeSubstract = (id) => {
   
    let path = `./images/Subtract_${id}.svg`;
    console.log(path);
    sun.setAttribute("src",path)


}

const getPlanetInformation = async (id) => {


  
    if(isShowingInfo){
        showStartSite();
        infoModule.style.display ="none";
        isShowingInfo = false;
    }

    else{
        isShowingInfo = true;
        changeSubstract(id);
        console.log(id);
        hideStartSite();
    
        let data = await fetchInformation();
        const planet = data[id];
       
        addInformation(planet);
        infoModule.style.display ="grid";

    }
    

}


sun.addEventListener("click", function () {  
    getPlanetInformation(this.id)  
});
merkurius.addEventListener("click", function () {
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
uranus.addEventListener("click", function () {
    getPlanetInformation(this.id);
    
});
Neptunus.addEventListener("click", function () {
    getPlanetInformation(this.id);
    
});

