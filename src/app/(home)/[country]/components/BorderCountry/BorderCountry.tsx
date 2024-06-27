import styles from './BorderCountry.module.scss';

type ComponentType = {
    item: string;
}

export const BorderCountry = ({ item }: ComponentType) => {
  return (<div className={styles.wrapper}>{item} </div>)
};
