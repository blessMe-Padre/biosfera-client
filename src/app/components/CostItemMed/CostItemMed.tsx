"use client";

import Link from "next/link";
import { usePopupStore } from "@/app/store/popupStore";
import styles from "./style.module.scss";

export default function CostItemMed({ data }: { data: any }) {
  const { togglePopupState } = usePopupStore();

  return (
    <li className={styles.item}>
      <div className={styles.item__wrapper}>
        <h3 className={styles.item_title}>{data.name}</h3>
        <p className={styles.item_price}>от {data.price} ₽</p>
      </div>
      <button
        type="button"
        className={styles.item__link}
        onClick={togglePopupState}
      >
        Записаться на&nbsp;прием
      </button>
    </li>
  );
}
