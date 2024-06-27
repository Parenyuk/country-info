"use client"
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

import styles from './BackButton.module.scss';

type ComponentType = {

}

export const BackButton = ({}: ComponentType) => {
  const router = useRouter()

  return (<button className={styles.buttonWrapper} onClick={() => router.back()} >
    <FaArrowLeftLong />
    <p className={styles.text}>Back</p>
  </button>)
};
