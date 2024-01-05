import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "../Heading";
import style from "./Card.module.scss";

interface CardProps {
  title: string;
  img?: { src: string; alt: string; width?: number; height?: number };
  desc: React.ReactNode;
  tags?: string[];
  new?: boolean;
  link?: string;
  sec?: boolean;
  aspectRatio?: boolean;
  children?: React.ReactNode;
  className?: string;
  center?: boolean;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  glow?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  img,
  desc,
  tags,
  new: isNew,
  link,
  aspectRatio,
  children,
  sec,
  className = "",
  center,
  as = "article",
  glow = false,
}) => {
  const cardContent = React.createElement(
    as,
    {
      className: `${style.card} ${center ? "text-center" : ""}`,
    },
    <>
      {glow && (
        <div className={`card-glow  ${sec ? "bg-primary" : " bg-accent"} `} />
      )}

      <div
        className={`card ${className} ${
          sec
            ? "bg-primary text-primary-content hover:border-secondary"
            : " hover:border-accent"
        } border-base-300 bg-base-300  h-full border shadow-xl  transition`}
      >
        {img && (
          <figure>
            <Image
              style={{ aspectRatio: aspectRatio ? "16/9" : "unset" }}
              className={!aspectRatio ? "mt-4 " : "w-full"}
              src={img.src}
              alt={img.alt}
              width={img.width ? img.width : 400}
              height={img.height ? img.height : 200}
            />
          </figure>
        )}

        <div className={style.cardBody}>
          {title && (
            <header>
              <Heading
                className={` ${center ? "text-center" : ""}`}
                element="h3"
                size="m"
                padding="none"
              >
                {title}
                {isNew && (
                  <div className="tags badge-secondary ml-1 align-text-top ">
                    NEW
                  </div>
                )}
              </Heading>
            </header>
          )}
          {children}
          {desc && <div>{desc}</div>}
          {tags && (
            <div className={style.tagsWrapper}>
              {tags.slice(0, 3).map((tag) => (
                <div
                  key={tag}
                  className="tags badge-outline  hover:text-primary-content"
                >
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>,
  );

  if (link) {
    return <Link href={link}>{cardContent}</Link>;
  } else {
    return cardContent;
  }
};

export default Card;
