

export const formatPopulation = (population: number) => {
  const populationInMillions = population / 1000000;
  const formattedPopulation = populationInMillions.toFixed(3);
  return `${formattedPopulation} million`;
}
