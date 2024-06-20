import { fetchAPI } from "@/api";
import { CardList } from "@/app/(home)/components/CardList";
import { TopComponent } from "@/app/(home)/components/TopComponent";

export default async function Home() {
  //'https://restcountries.com/v3.1/all?fields=name, population, region, capital, flags, languages'

  const data = await fetchAPI<CountryType[]>({ url: 'https://restcountries.com/v3.1/all' });

  if (data.data) {
    return (
      <>
        <TopComponent data={data.data} />
        <CardList data={data.data} />
      </>
    )
  }

  return (<div>1</div>);
}
