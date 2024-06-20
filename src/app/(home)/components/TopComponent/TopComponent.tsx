"use client"


type ComponentType = {
  data: CountryType[];
}

export const TopComponent = ({ data }: ComponentType) => {
  console.log('data', data);
  return (<div>
    {/*<p>{card.name.common}</p>*/}
  </div>)
};
