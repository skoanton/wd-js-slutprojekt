
const BASE_URL = "https://majazocom.github.io/Data/solaris.json";


/* const fetchApiKey = async () => {

    const response = await fetch(`${BASE_URL}/keys`);
    console.log(response);
    const data = await response.json();

    console.log(data);
    return data;

} */

const showBodies = async()=>{
    const response = await fetch(`${BASE_URL}` );
    const data = await response.json();

    console.log(data);

}

showBodies();