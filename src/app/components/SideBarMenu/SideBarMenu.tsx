"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";

const items = [
  {
    label: "Документы",
    href: "/patients",
  },
  {
    label: "Юридические данные",
    href: "/patients/yuridicheskie-dannye",
  },
  {
    label: "Лицензии",
    href: "/patients/licenzii",
  },
  {
    label: "Контролирующие органы",
    href: "/patients/kontroliruyushchie-organi",
  },
  {
    label: "Подписание договора онлайн",
    href: "/patients/podpisanie-dogovora-onlayn",
  },
  {
    label: "Карта парковок",
    href: "/patients/karta-parkovok",
  },
  {
    label: "Обслуживание по ДМС",
    href: "/patients/obsluzhivanie-po-dms",
  },
  {
    label: "Документы на налоговый вычет",
    href: "/patients/dokumenty-na-nalogovyy-vychet",
  },
  {
    label: "Отзывы",
    href: "/patients/otzyvy",
  },
];

export default function SideBarMenu() {
  const pathname = usePathname();
  return (
    <div className={styles.side_bar_menu}>
      <ul className={styles.menu__list}>
        {items.map((item) => (
          <li className={styles.menu__item} key={item.label}>
            <Link
              href={item.href}
              className={pathname === item.href ? "text-gradient" : ""}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
