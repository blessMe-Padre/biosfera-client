import { Breadcrumbs } from "@/app/components";
import fetchData from "@/app/utils/fetchData";
import ContentPage from "./ContentPage";
import { notFound } from "next/navigation";

type ServicesPageResponse = {
  data?: Array<Record<string, unknown>> | null;
};

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

  const url =
    `/api/shablon-uslugis?filters[slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate[prices][populate]=*` +
    `&populate[services_slider][populate]=*` +
    `&populate[items][populate]=*` +
    `&populate[section][populate]=*` +
    `&populate[faq][populate]=*` +
    `&populate[seo_block][populate]=*` +
    `&populate[gallery][populate]=*` +
    `&populate[hero_background][populate]=*`;

  const page = await fetchData<ServicesPageResponse>(url);

  if (!page?.data?.[0]) {
    return notFound();
  }

  return (
    <main>
      <div className="container">
        <Breadcrumbs
          secondLink="/services"
          secondLabel="Услуги"
          thirdLabel="Терапия"
        />
      </div>
      <h1 className="visually-hidden">Терапия</h1>
      <ContentPage data={page} />
    </main>
  );
}
