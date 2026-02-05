"use client";
import type { ComponentType, Key } from "react";
import styles from "./style.module.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import SwiperNavButtons from "../SwiperNavButtons/SwiperNavButtons";

import 'swiper/css';
import 'swiper/css/navigation';

type SliderBreakpoints = Record<
    number,
    {
        slidesPerView?: number;
        spaceBetween?: number;
        [key: string]: any;
    }
>;

type SliderProps<TItem> = {
    data: TItem[];
    Card: ComponentType<{ data: TItem }>;
    getKey?: (item: TItem, index: number) => Key;
    breakpoints?: SliderBreakpoints;
    slidesPerView?: number;
    spaceBetween?: number;
    loop?: boolean;
};

const DEFAULT_BREAKPOINTS: SliderBreakpoints = {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1023: { slidesPerView: 3 },
    1440: { slidesPerView: 4 },
};

export default function Slider<TItem>({
    data,
    Card,
    slidesPerView,
 }: SliderProps<TItem>) {

    console.log(data);

    return (
        <div className={`${styles.about_wrapper}`}>
            <Swiper
                spaceBetween={20}
                loop={true}
                modules={[Navigation]}
                slidesPerView={slidesPerView}
                breakpoints={DEFAULT_BREAKPOINTS}
            >
                {data?.length > 0 && data?.map((item, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        <Card data={item} />
                    </SwiperSlide>
                ))}


                <SwiperNavButtons
                    addClass={'buttons_bottom'}
                />
            </Swiper>
        </div>
    )
}