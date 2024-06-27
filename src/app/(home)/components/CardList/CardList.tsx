import styles from './CardList.module.scss';

import { CountryCard } from "@/app/(home)/components/CountryCard";
import { ContainerComponent } from "@/shared/components/ContainerComponent";
import { CountryType } from "@/shared/types";

type ComponentType = {
    data: CountryType[];
}

export const CardList = ({ data }: ComponentType) => {
  return (<ContainerComponent className={styles.cardWrapper}>{
    data.map((card, index) => {
      return <CountryCard key={index} card={card} />
    })
  } </ContainerComponent>)
};
