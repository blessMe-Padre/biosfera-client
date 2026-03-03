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
              <span>{item.label}</span>
              {pathname === item.href && (
                <svg
                  width="4"
                  height="9"
                  viewBox="0 0 4 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Arrow</title>
                  <path
                    d="M0.417997 8.2168L3.15168 4.43854L0.417969 0.274551"
                    stroke="url(#paint0_linear_352_11869)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_352_11869"
                      x1="1.78482"
                      y1="8.2168"
                      x2="1.78482"
                      y2="0.274551"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3170B4" />
                      <stop offset="1" stopColor="#5CCCC2" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
