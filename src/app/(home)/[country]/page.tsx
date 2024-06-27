import { fetchAPI } from "@/api";
import { DetailedPage } from "@/app/(home)/[country]/components/DetailedPage";
import { updateLink } from "@/shared/helpers";
import { CountryType } from "@/shared/types";

type CountryPageType = {
    params: {
        country: string;
    }
}

export default async function CountyPage({ params: { country } }: CountryPageType) {
  const { data, error } = await fetchAPI<CountryType[]>({ url: `https://restcountries.com/v3.1/name/${updateLink(country)}` });

  if (error || !data || data.length === 0) {
    return <div>Something went wrong</div>
  }

  return (<DetailedPage country={data[0]} />);
}
