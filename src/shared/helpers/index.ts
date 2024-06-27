

export const formatPopulation = (population: number) => {
  const populationInMillions = population / 1000000;
  const formattedPopulation = populationInMillions.toFixed(3);
  return `${formattedPopulation} million`;
}

export const formatCountryLink = (country: string) => {
  return country.replace(/ /g,'_');
}

export const updateLink = (country: string) => {
  return country.replace(/_/g, ' ');
}
