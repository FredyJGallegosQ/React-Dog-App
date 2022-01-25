export const getRaza = async () => {
    const url = "https://api.thedogapi.com/v1/breeds";
    const resp = await fetch(url);
    const Raza = await resp.json();
    return Raza
};