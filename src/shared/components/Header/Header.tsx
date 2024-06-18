import styles from './Header.module.scss';

type ComponentType = {

}

export const Header = ({}: ComponentType) => {
  return (<header className={styles.header}>
    <p>Where is the world?</p>
    <p>DarkMode</p>
  </header>)
};
