"use client"

import styles from './Header.module.scss';

import { ContainerComponent } from "@/shared/components/ContainerComponent";
import { DarkModeButton } from "@/shared/components/DarkMode";

export const Header = () => {
  return (<header>
    <ContainerComponent className={styles.container}>
      <p>Where is the world?</p>
      <DarkModeButton />
    </ContainerComponent>
  </header>)
};
