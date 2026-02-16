import { Breadcrumbs } from "@/app/components";
import fetchData from "@/app/utils/fetchData";
import ContentPage from "./ContentPage";

type ServicesMetadata = {
  data: {
    meta_title: string;
    meta_description: string;
    hero_image: string;
  }[];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = (await fetchData(
    `/api/shablon-uslugis?filters[slug][$eq]=${encodeURIComponent(slug)}`,
  )) as ServicesMetadata;
  return {
    title: `Биосфера ДВ - ${page?.data?.[0]?.meta_title}`,
    description: page?.data?.[0]?.meta_description,
    openGraph: {
      title: "Услуги",
      description: "Услуги",
      image: page?.data?.[0]?.hero_image,
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await fetchData(
    `/api/shablon-uslugis?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
  );

  return (
    <main className="container">
      <Breadcrumbs
        secondLink="/services"
        secondLabel="Услуги"
        thirdLabel="Терапия"
      />
      <h1 className="visually-hidden">Терапия</h1>
      <ContentPage data={page} />
    </main>
  );
}
