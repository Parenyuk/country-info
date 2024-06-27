import cn from "classnames";
import Image from 'next/image';
import Link from "next/link";

import styles from './CountryCard.module.scss';

import { formatCountryLink, formatPopulation } from "@/shared/helpers";
import { CountryType } from "@/shared/types";

type ComponentType = {
    card: CountryType;
}

export const CountryCard = ({ card }: ComponentType) => {
  return (<Link href={`/${formatCountryLink(card.name.common)}`} className={cn(styles.cardWrapper, 'card')}>
    <div className={styles.imageContainer}>
      <Image src={card.flags.png} layout={'fill'} alt={card.name.common} className={styles.image} />
    </div>
    <div className={styles.bottomWrapper}>
      <p className={styles.title}>{card.name.common}</p>
      <div>
        <div className={styles.cardRow}>
          <p className={styles.cardRowTitle}>Population:</p>
          <p> {formatPopulation(card.population) }</p>
        </div>
        <div className={styles.cardRow}>
          <p className={styles.cardRowTitle}>Region:</p>
          <p> {card.region}</p>
        </div>
        <div className={styles.cardRow}>
          <p className={styles.cardRowTitle}>Capital:</p>
          <p>{card.capital}</p>
        </div>
      </div>
    </div>
  </Link>)
};
