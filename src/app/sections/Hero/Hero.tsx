import styles from "./style.module.scss";
import Image from "next/image";
import { Popup } from "@/app/components";
import Link from "next/link";

export default function Hero() {

    return (
        <section>
            <div className={styles.hero_wrapper}>
                <Image
                    src="/images/hero-bg.webp"
                    alt="bg-image"
                    width={1740}
                    height={766}
                    className={`${styles.hero_bg} dsv-image}`}
                    priority
                />
                <div>
                    <h2 className={styles.hero_title}>«Биосфера ДВ» — забота о&nbsp;вашем здоровье на всех этапах</h2>
                    <button>222222222</button>
                </div>
            </div>
        </section>
    )
} 