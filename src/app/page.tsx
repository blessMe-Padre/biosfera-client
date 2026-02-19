import {
  Hero,
  Services,
  About,
  Gallery,
  Doctors,
  News,
  Owner,
  Map,
} from "./sections";

import styles from "./page.module.css";
import fetchData from "./utils/fetchData";

type GalleryImage = {
  id: number;
  image: { url: string };
};

export default async function Home() {
  const url =
    `/api/shablon-uslugis?filters[slug][$eq]=therapy` +
    `&populate[gallery][populate]=*`;

  const data = await fetchData(url);
  const gallery = data?.data?.[0]?.gallery ?? ([] as GalleryImage[]);

  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <About />
      <Gallery images={gallery} />
      <Owner />
      <Doctors />
      <News />
      <Map />

      {/* <Image
        src="/Item.png"
        alt="VDS"
        width={460}
        height={425}
        className="dsv-image"
        priority
      /> */}

      {/* <p className="text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id adipisci,
        temporibus nesciunt cumque deleniti, quas eligendi est esse,
        reprehenderit aperiam quasi quo nisi accusantium aspernatur soluta
        doloribus eos nemo molestiae!
      </p>

      <AnimateElement element="p">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id adipisci,
        temporibus nesciunt cumque deleniti, quas eligendi est esse,
        reprehenderit aperiam quasi quo nisi accusantium aspernatur soluta
        doloribus eos nemo molestiae!
      </AnimateElement> */}
    </main>
  );
}
