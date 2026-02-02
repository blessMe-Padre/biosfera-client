"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { VdsButton, VdsPanel, Search } from "@/app/components";

export default function Header() {
  const [panel, setPanel] = useState(false);
  const [panelBtn, setPanelBtn] = useState(true);
  const [searchOpened, setSearchOpened] = useState(false);


  // закрываем поиск при клике вне попапа
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
      if (!searchOpened) return;

      // const isClickOutsideMenu = !menuRef.current || !menuRef.current.contains(event.target as Node);
      const isClickOutsideButton = !buttonRef.current || !buttonRef.current.contains(event.target as Node);

      // if (isClickOutsideMenu && isClickOutsideButton) {
      //     setSearchOpened(false);
      // }
      if (isClickOutsideButton) {
          setSearchOpened(false);
      }
  };

  const handleSliderClick = () => {
      setSearchOpened(false);
  };

  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("sliderClick", handleSliderClick);
  return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("sliderClick", handleSliderClick);
  };
}, [searchOpened]);

const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="relative">
      <div className="container">
        {panel && <VdsPanel setPanel={setPanel} setPanelBtn={setPanelBtn} />}

        <div className={styles.header__inner}>
          <a href="/">
            <Image src="/logo.svg" className='dsv-image' alt="logo" width={310} height={66} />
          </a>

          <div className="flex">
            <Image src="/icons/pin-icon.svg" className='dsv-image' alt="logo" width={22} height={22} />
            <p>Пр-т 100-летия Владивостока, 84а</p>
          </div>

            <a href="tel:+79243388189" className="flex">
              <Image src="/icons/phone.svg" className='dsv-image' alt="logo" width={22} height={22} />
              <span>+7 (924) 338-81-89</span>
            </a>

            <button className={styles.primary_button}>Записаться на прием</button>

            <div className={styles.header_social}>
              <button className={styles.item__button} title="Личный кабинет">
                <Image src="/icons/account-icon.svg" className='dsv-image' alt="logo" width={22} height={22} />
              </button>

              {panelBtn && <VdsButton setPanel={setPanel} setPanelBtn={setPanelBtn} />}

              <button 
                className={styles.item__button} 
                ref={buttonRef}
                onClick={() => setSearchOpened(!searchOpened)}
                title="Поиск"
                >
                <Image src="/icons/search-icon.svg" className='dsv-image' alt="logo" width={22} height={22} />
              </button>
            </div>
        </div>

        {searchOpened && <Search />}
      </div>
    </header>
  );
}
