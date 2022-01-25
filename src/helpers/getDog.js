export const getDog = async (breedId) => {

    const url = breedId === 0 || breedId === undefined
    ? "https://api.thedogapi.com/v1/images/search?breed_id=1"
    : `https://api.TheDogAPI.com/v1/images/search?breed_id=${breedId}`;
    
    const resp = await fetch(url);
    const [data] = await resp.json();

    const {url:image, breeds: [breed, life_span, temperamet]} = data;

    const dog = {
        image,
        breed,
        life_span,
        temperamet       
    }
    console.log(breed);
    return dog
};