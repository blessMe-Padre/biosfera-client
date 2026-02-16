"use client";
import { ContentRenderer } from "@/app/components";
import styles from "./style.module.scss";

export default function ContentPage({ data }: { data: any }) {
  console.log(data);
  const hero = data?.data?.[0];

  return (
    <section className={styles.services__hero}>
      <h2 className="services__title">{hero?.hero_title}222</h2>

      <ContentRenderer content={hero?.hero_description ?? []} />
    </section>
  );
}
