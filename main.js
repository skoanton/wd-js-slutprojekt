
const BASE_URL = "https://majazocom.github.io/Data/solaris.json";
let apikey;
let dynamicTitles;
let isShowingInfo = false;

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

const createTitleElements = (planet,infoDiv) => {
    console.log("Creating Static Elements");
    const title = document.createElement("h1");

    const titleLatin = document.createElement("h2");
    
    const radiusTitle = document.createElement("h3");
    const distanceFromSunTitle = document.createElement("h3");
    const maxTempTitle = document.createElement("h3");
    const minTempTitle = document.createElement("h3");
    const moonsTitle = document.createElement("h3");

    const description = document.createElement("p");

    //Put concent inside titles
    title.textContent = planet.name;

    titleLatin.textContent = planet.latinName;

    radiusTitle.textContent = "Omkrets";
    distanceFromSunTitle.textContent = "km från solen";
    maxTempTitle.textContent = "max tempratur";
    minTempTitle.textContent = "min tempratur";
    moonsTitle.textContent = "Månar";
    
    description.textContent = planet.desc;
    // Add elements to site

    let elements = [radiusTitle,distanceFromSunTitle,maxTempTitle,minTempTitle,moonsTitle];
    dynamicTitles = elements;
    elements = [title,titleLatin,description,radiusTitle,distanceFromSunTitle,maxTempTitle,minTempTitle,moonsTitle]
    console.log("Dynmaic titles length", dynamicTitles.length);
    addElementsToSite(elements,infoDiv);

}

const CreateDynamicElements = (planet) => {

    console.log("Creating Dynamic Elements");
     // Create dynamic elements for information
     
     const radius = document.createElement("p");
     const distanceFromSun = document.createElement("p");
     const maxTemp = document.createElement("p");
     const minTemp = document.createElement("p");
     const moons = document.createElement("ul");
 
     if (planet.moons > 1) {
        for (const moon of planet.moons) {
            const moonLi = document.createElement("li");
            moonLi.textContent = moon;
            moons.appendChild(moonLi);
        }
        
    }
    else{
         const moonLi = document.createElement("p");
         moonLi.textContent ="None";
         moons.appendChild(moonLi);   
    }
 
     // Add dynamic values to elements
     radius.textContent = planet.circumference;
     distanceFromSun.textContent = planet.distance;
     maxTemp.textContent = planet.temp.day;
     minTemp.textContent = planet.temp.night;


     const elements = [radius,distanceFromSun,maxTemp,minTemp,moons];
     addElementsToSite(elements,dynamicTitles);

}

const addElementsToSite = (elements,parents) =>{

    if(parents.length > 1){
        for(let i = 0; i<parents.length;i++){
            console.log("Appending",parents[i], "to",elements[i]);
            parents[i].appendChild(elements[i]);
        }
    }
    else{
        console.log("no Object");
        elements.forEach(element => {
            parents.appendChild(element);
        });
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
        const infoDiv = document.querySelector(".information");
       while(infoDiv.hasChild){
        infoDiv.removeChild(infoDiv.firstChild);
       }
        infoDiv.remove();
        isShowingInfo = false;
    }

    else{
        isShowingInfo = true;
        changeSubstract(id);
        console.log(id);
        hideStartSite();
    
        let data = await fetchInformation();
        const planet = data[id];
        const infoDiv = document.createElement("div");
        main.appendChild(infoDiv);
        infoDiv.setAttribute("class", "information");
       
    
        createTitleElements(planet,infoDiv);
        CreateDynamicElements(planet);
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

