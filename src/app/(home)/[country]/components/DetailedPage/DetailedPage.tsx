import Image from "next/image";

import styles from './DetailedPage.module.scss';

import { BorderCountry } from "@/app/(home)/[country]/components/BorderCountry";
import { BackButton } from "@/shared/components/BackButton";
import { ContainerComponent } from "@/shared/components/ContainerComponent";
import { CountryType } from "@/shared/types";
import {formatPopulation} from "@/shared/helpers";

type ComponentType = {
    country: CountryType;
}

export const DetailedPage = ({ country }: ComponentType) => {
  console.log('country111', country.borders);

  // const currencyKey = Object.keys(country.currencies)[0];
  // const currencyDetails = country.currencies[currencyKey];

  return (
    <ContainerComponent tag={'section'} className={styles.pageContainer}>
      <BackButton />
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <Image src={country.flags.png} layout={'fill'} alt={country.name.common} className={styles.image} />
        </div>
        <div className={styles.infoBlock}>
          <h2 className={styles.title}>{country.name.common}</h2>
          <div className={styles.infoBlockContent}>
            <div className={styles.leftInfoBlock}>
              <div className={styles.infoRow}>
                <p className={styles.rowTitle}>Official name: </p>
                <p className={styles.rowValue}>{country.name.official}</p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.rowTitle}>Population: </p>
                <p className={styles.rowValue}>{formatPopulation(country.population) }</p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.rowTitle}>Region: </p>
                <p className={styles.rowValue}>{country.region}</p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.rowTitle}>Sub Region:</p>
                <p className={styles.rowValue}>{country.subregion}</p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.rowTitle}>Capital:</p>
                <p className={styles.rowValue}>{country.capital}</p>
              </div>
            </div>
            <div className={styles.rightInfoBlock}>
              <div className={styles.infoRow}>
                <p className={styles.rowTitle}>Currencies: </p>
                {Object.keys(country.currencies).map((currencyKey, index) => (
                  <p key={index} className={styles.rowValue}>{country.currencies[currencyKey].name} ({currencyKey})</p>
                ))}
              </div>
              <div className={styles.infoRow}>
                <p className={styles.rowTitle}>Languages: </p>
                {Object.values(country.languages).map((languageKey, index) => (
                  <p key={index} className={styles.rowValue}>{languageKey}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.infoBlockBottom}>
            <div className={styles.infoRow}>
              <p className={styles.borderTitle}>Border Countries: </p>
              {
                country?.borders?.length > 0 ? (
                  <p className={styles.borders}>{country.borders.map((item, index) => {
                    return <BorderCountry key={index} item={item} />
                  })}</p>
                ) : (
                  'No border countries founds'
                )
              }

            </div>
          </div>
        </div>
      </div>
    </ContainerComponent>
  )
};
