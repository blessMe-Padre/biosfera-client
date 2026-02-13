import fetchData from "@/app/utils/fetchData";
import ContentPage from "./ContentPage";
import { Services } from "@/app/sections";
import styles from "./style.module.scss";
import { Accordion, Breadcrumbs } from "@/app/components";

export const metadata = {
  title: "Биосфера ДВ | Услуги",
  description: "Услуги для сайта Биосфера ДВ",
};

const apiUrl = `/api/stranicza-uslugi?populate=*`;

export default async function ServicesPage() {
  return (
    <div className="container">
      <Breadcrumbs secondLabel="Услуги" />
      <h1 className="visually-hidden">Услуги</h1>
      <Services className={"mt-0"} />
      <Accordion />
    </div>
  );
}
