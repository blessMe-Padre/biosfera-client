import { SideBarMenu } from "@/app/components";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import styles from "../style.module.scss";

export const metadata = {
  title: "Оформление больничного листа",
  description: "Оформление больничного листа для пациентов",
};

export default async function Patients() {
  return (
    <main className="container">
      <Breadcrumbs secondLabel={"Оформление больничного листа"} />

      <div className={styles.page_wrapper}>
        <SideBarMenu />
        <div className={styles.content} id="section">
          <h1>Оформление больничного листа</h1>
          <p>
            В медицинском центре «Биосфера ДВ» пациенты имеют возможность
            оформить листок нетрудоспособности (больничный лист) при наличии
            медицинских показаний.
          </p>
        </div>
      </div>
    </main>
  );
}
