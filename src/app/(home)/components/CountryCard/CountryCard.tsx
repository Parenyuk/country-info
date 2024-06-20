import Image from 'next/image';

import styles from './CountryCard.module.scss';

type ComponentType = {
    card: CountryType;
}

export const CountryCard = ({ card }: ComponentType) => {
  return (<div className={styles.cardWrapper}>
    <div className={styles.imageContainer}>
      <Image src={card.flags.png} layout={'fill'} alt={card.name.common} className={styles.image} />
    </div>
    <div className={styles.bottomWrapper}>
      <p className={styles.title}>{card.name.common}</p>
      <div>
        <p>{card.population}</p>
        <p>{card.region}</p>
        <p>{card.capital}</p>
      </div>
    </div>
  </div>)
};
