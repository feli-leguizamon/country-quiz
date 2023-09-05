export const questionGenerator = (countries: any) => {
  const random = () => {
    return Math.floor(Math.random() * 251);
  };

  const randomNumber = random();
  const secondRandomNumber = random();
  const thirdRandomNumber = random();
  const fourthRandomNumber = random();

  const selectedCountry = countries && countries[randomNumber];
  const secondRandomCountry = countries && countries[secondRandomNumber];
  const thirdRandomCountry = countries && countries[thirdRandomNumber];
  const fourthRandomCountry = countries && countries[fourthRandomNumber];

  const selectedCapital = selectedCountry && selectedCountry.capital;
  const selectedCountryName = selectedCountry && selectedCountry.name && selectedCountry.name.common;

  const secondCountryName = secondRandomCountry && secondRandomCountry.name && secondRandomCountry.name.common;
  const thirdCountryName = thirdRandomCountry && thirdRandomCountry.name && thirdRandomCountry.name.common;
  const fourthCountryName = fourthRandomCountry && fourthRandomCountry.name && fourthRandomCountry.name.common;

  function shuffleArray(array: string[]): string[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const options = shuffleArray([secondCountryName, thirdCountryName, fourthCountryName, selectedCountryName]);
  const selectedCountryNameIndex = options.indexOf(selectedCountryName);
  const letters = ['A', 'B', 'C', 'D'];

  const data = {
    capital: selectedCapital,
    correctAnswerCode: letters[selectedCountryNameIndex],
    options,
  };

  return data;
};
