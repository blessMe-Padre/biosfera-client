"use client";

import { useEffect, useMemo } from "react";

type ProdoctorovFooterWidgetProps = {
  doctorId: string | number;
  lpuId: string | number;
  doctorUrl?: string;
  doctorName?: string;
};

const WIDGET_SRC_BASE = "https://prodoctorov.ru/static/js/widget_footer.js?v06";
const SCRIPT_MARKER_ATTR = "data-pd-widget-footer";

export default function ProdoctorovFooterWidget({
  doctorId,
  lpuId,
  doctorUrl,
  doctorName,
}: ProdoctorovFooterWidgetProps) {
  const doctorIdStr = String(doctorId ?? "").trim();
  const lpuIdStr = String(lpuId ?? "").trim();

  const ids = useMemo(() => {
    const suffix = `d${doctorIdStr}`;
    return {
      rootId: `pd_widget_footer${suffix}`,
      middleId: `pd_widget_footer_content_middle${suffix}`,
      rightId: `pd_widget_footer_content_right${suffix}`,
    };
  }, [doctorIdStr]);

  useEffect(() => {
    if (!doctorIdStr || !lpuIdStr) return;
    if (typeof document === "undefined") return;

    document.querySelectorAll(`script[${SCRIPT_MARKER_ATTR}]`).forEach((el) => {
      el.parentNode?.removeChild(el);
    });

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute(SCRIPT_MARKER_ATTR, "1");

    // Скрипт у продокторов один и тот же; добавляем query, чтобы при SPA-переходах
    // он гарантированно исполнялся заново для нового врача.
    script.src = `${WIDGET_SRC_BASE}&doctor=${encodeURIComponent(
      doctorIdStr,
    )}&lpu=${encodeURIComponent(lpuIdStr)}&_=${Date.now()}`;

    document.body.appendChild(script);
    return () => {
      script.parentNode?.removeChild(script);
    };
  }, [doctorIdStr, lpuIdStr]);

  if (!doctorIdStr || !lpuIdStr) return null;

  return (
    <>
      <div
        id={ids.rootId}
        data-filters={`lpu=${lpuIdStr}`}
        className="pd_widget_footer  pd_widget_gap"
        data-doctor={doctorIdStr}
      >
        <div className="pd_left">
          {doctorUrl ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="pd_doctor_name"
              href={doctorUrl}
            >
              {doctorName ?? ""}
            </a>
          ) : (
            <span className="pd_doctor_name">{doctorName ?? ""}</span>
          )}
        </div>
        <div className="pd_middle">
          <div id={ids.middleId}></div>
        </div>
        <div className="pd_right">
          <div id={ids.rightId}></div>
        </div>
      </div>

      <div className="pd_powered_by">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://prodoctorov.ru/"
        >
          {/* biome-ignore lint: логотип виджета ProDoctorov */}
          <img
            className="pd_logo"
            width="132"
            src="https://prodoctorov.ru/static/_v1/pd/logos/logo-pd-widget.png"
            alt="ProDoctor"
          />
        </a>
      </div>
    </>
  );
}

