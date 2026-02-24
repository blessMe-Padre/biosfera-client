import fetchData from "@/app/utils/fetchData";
import formatDate from "@/app/utils/formatDate";

import styles from "../style.module.scss";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import type { NewsItemType } from "@/app/types";
import { notFound } from "next/navigation";
import { ContentRenderer } from "@/app/components";
import { ContentItem } from "@/app/components/ContentRenderer/ContentRenderer";
import Image from "next/image";
import { Doctors } from "@/app/sections";

interface ApiResponse {
  data: NewsItemType;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const page = await fetchData<ApiResponse>(`/api/novostis/${id}?populate=*`);

  return {
    title: `Биосфера ДВ | ${page?.data?.title}`,
    description: page?.data?.description,
    openGraph: {
      title: `Биосфера ДВ | ${page?.data?.title}`,
      description: page?.data?.description,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_SERVER}${page?.data?.image?.url}`,
          width: 600,
          height: 300,
          alt: page?.data?.title,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const page: ApiResponse = await fetchData(`/api/novostis/${id}?populate=*`);
  const domain = process.env.NEXT_PUBLIC_API_SERVER ?? "";

  const imageSrc = page?.data?.image?.url
    ? `${domain}${page?.data?.image?.url}`
    : "/placeholder1.svg";

  if (!page) {
    return notFound();
  }

  return (
    <>
      <div className="container">
        <Breadcrumbs
          secondLink="/news"
          secondLabel="Новости"
          thirdLabel={page?.data?.title}
        />
        <h1 className={styles.title}>{page?.data?.title}</h1>
        <article className={styles.article}>
          <div className="relative">
            <div className={styles.article__image}>
              <Image
                className="dsv-image"
                src={imageSrc}
                alt="News"
                width={500}
                height={500}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+"
              />
            </div>
          </div>

          <div className={styles.article__info}>
            <div className={styles.article__date}>
              {formatDate(page?.data?.publishedAt)}
            </div>
            <h2 className={styles.article__title}>{page?.data?.title}</h2>
            <ContentRenderer
              content={page?.data?.content as unknown as ContentItem[]}
            />
          </div>
        </article>
      </div>
      <Doctors />
    </>
  );
}
