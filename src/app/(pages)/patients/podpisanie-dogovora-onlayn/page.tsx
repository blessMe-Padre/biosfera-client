import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import styles from "../style.module.scss";
import { SideBarMenu, DogovorForm } from "@/app/components";

export const metadata = {
  title: "Подписание договора онлайн",
  description: "Подписание договора онлайн",
};

export default async function Patients() {
  return (
    <main className="container">
      <Breadcrumbs secondLabel="control_item_image" />

      <div className={styles.page_wrapper}>
        <SideBarMenu />
        <div className={styles.content} id="section">
          <h1 className={styles.content__title}>Подписание договора онлайн</h1>

          <DogovorForm />
        </div>
      </div>
    </main>
  );
}
