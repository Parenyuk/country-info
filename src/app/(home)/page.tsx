import { fetchAPI } from "@/api";
import { CardList } from "@/app/(home)/components/CardList";
import { Menu } from "@/app/(home)/components/Menu";
import { CountryType } from "@/shared/types";

export default async function Home() {
  const data = await fetchAPI<CountryType[]>({ url: 'https://restcountries.com/v3.1/all' });

  if (data.data) {
    return (
      <>
        <Menu data={data.data} />
        <CardList data={data.data} />
      </>
    )
  }

  return (<div>1</div>);
}
