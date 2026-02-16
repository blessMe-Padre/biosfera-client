"use client";
import Image from "next/image";
import { ContentRenderer } from "@/app/components";
import styles from "./style.module.scss";

export default function ContentPage({ data }: { data: any }) {
  const hero = data?.data?.[0];

  return (
    <section className={styles.services__hero}>
      <h2 className="services__title">{hero?.hero_title}</h2>
      <ContentRenderer content={hero?.hero_description ?? []} />

      <div className={styles.services__hero_image}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_SERVER}${hero?.hero_background?.url}`}
          alt={hero?.hero_title}
          width={1740}
          height={639}
          className="dsv-image"
          priority
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+"
        />
      </div>
    </section>
  );
}
