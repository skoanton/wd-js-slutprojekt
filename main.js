
const BASE_URL = "https://majazocom.github.io/Data/solaris.json";
let apikey;


const showBodies = async () => {
    try {

        const response = await fetch(`${BASE_URL}`);

        const data = await response.json();
        console.log(data);

        if (!response.ok) {
            throw new error("Failed to catch bodies");
        }

    }

    catch (error) {
        console.error(error);
    }
}



showBodies();

/* fetchApiKey().then((data) => console.log(data.key)); */

