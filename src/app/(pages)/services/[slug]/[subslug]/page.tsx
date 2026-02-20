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
  params: Promise<{ subslug: string }>;
}) {
  const { subslug } = await params;
  const page = (await fetchData(
    `/api/shablon-pod-uslugas?filters[slug][$eq]=${encodeURIComponent(subslug)}`,
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
  params: Promise<{ subslug: string }>;
}) {
  const { subslug } = await params;

  const url =
    `/api/shablon-pod-uslugas?filters[slug][$eq]=${encodeURIComponent(subslug)}` +
    `&populate[prices][populate]=*` +
    `&populate[section][populate]=*` +
    `&populate[faq][populate]=*` +
    `&populate[seo_block][populate]=*` +
    `&populate[hero_background][populate]=*`;

  const page = await fetchData(url);

  return (
    <main>
      <div className="container">
        <Breadcrumbs
          secondLink="/services"
          secondLabel="Услуги"
          thirdLabel="Терапия"
        />
      </div>
      <ContentPage data={page} />
    </main>
  );
}
