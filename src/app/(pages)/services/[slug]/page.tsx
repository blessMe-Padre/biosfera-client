import { Breadcrumbs } from "@/app/components";
import fetchData from "@/app/utils/fetchData";
import ContentPage from "./ContentPage";

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
