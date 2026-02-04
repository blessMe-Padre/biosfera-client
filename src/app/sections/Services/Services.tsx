"use client";
import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

const servicesList = [
    { image: '/images/services-1.webp', title: 'Терапия', link: '#' },
    { image: '/images/services-2.webp', title: 'Неврология', link: '#' },
    { image: '/images/services-3.webp', title: 'Эндокринология', link: '#' },
    { image: '/images/services-4.webp', title: 'Диагностика', link: '#' },
]

export default function Services() {

    return (
        <section className={styles.services}>
            <div className="container">
                <div className={styles.services_wrapper}>
                    <div className={styles.services__header}>
                        <h2 className={styles.services__title}><span className="text-gradient">Медицинские услуги,</span> которые соответствуют вашим потребностям</h2>
                        <p>Мы сосредоточены на результатах и вашем комфорте, предоставляя широкий спектр медицинских услуг, основанных на&nbsp;передовых технологиях</p>
                    </div>

                    <ul className={styles.services_list}>
                        {servicesList.map((item, index) => (
                            <li key={index} className={styles.services_item}>
                                <Link className={styles.services_item_link} href={item.link}>
                                    <Image className={styles.services_item_svg} src={'/icons/arrow-icon.svg'} alt={item.title} width={30} height={30} />
                                    <Image className={styles.services_item_image} src={item.image} alt={item.title} width={337} height={347} />
                                    <h3 className={styles.services_item_title}>{item.title}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}