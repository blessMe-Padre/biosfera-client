"use client";

import { useState } from "react";
import { ReviewsPopup } from "@/app/components";
import styles from "./style.module.scss";

export default function ContentPage() {
  const [active, setActive] = useState(false);

  return (
    <>
      <section className={`${styles.price} ${styles.section}`}>
        <div className="container">
          <header className={styles.header_wrapper}>
            <h1 className={styles.title}>
              <span className="text-gradient">Что говорят </span>
              наши пациенты
            </h1>
            <button className={styles.button} onClick={() => setActive(true)}>Оставить отзыв</button>
          </header>
          <p className={styles.text}>Мы ценим доверие наших пациентов и внимательно относимся к каждому отзыву. Обратная связь помогает нам становиться лучше и поддерживать высокий уровень медицинской помощи и сервиса.</p>
        </div>
      </section>

      <ReviewsPopup setActive={setActive} active={active} />
    </>
  );
}
