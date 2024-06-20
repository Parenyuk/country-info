"use client"


type ComponentType = {
  data: CountryType[];
}

export const Menu = ({ data }: ComponentType) => {
  console.log('data', data);
  return (<div>
    {/*<p>{card.name.helpers}</p>*/}
  </div>)
};
