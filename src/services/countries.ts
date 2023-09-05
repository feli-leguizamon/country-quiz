export const getCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    return response;
  } catch (e) {
    console.log(e);
  }
};
