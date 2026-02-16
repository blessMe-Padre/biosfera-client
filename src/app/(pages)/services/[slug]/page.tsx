import { Breadcrumbs } from "@/app/components";
import fetchData from "@/app/utils/fetchData";
import ContentPage from "./ContentPage";

type ServicesMetadata = {
  data: {
    hero_title: string;
    hero_description: string;
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
    title: `Биосфера ДВ - ${page?.data?.[0]?.hero_title}`,
    description: "Услуги",
    openGraph: {
      title: "Услуги",
      description: "Услуги",
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
    `/api/shablon-uslugis?filters[slug][$eq]=${encodeURIComponent(slug)}`,
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
