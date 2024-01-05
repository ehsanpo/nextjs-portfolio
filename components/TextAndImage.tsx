import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Heading from "./Heading";

interface ExperienceProps {
  headline?: string;
  subHeadline?: string;
  description?: string;
  img?: {
    src: string;
    alt: string;
  };
  imgComponent?: ReactNode;
  imgOnLeft?: boolean;
  className?: string;
}

const Experience: FC<ExperienceProps> = ({
  headline,
  subHeadline,
  description,
  img,
  imgComponent,
  imgOnLeft = false,
  className = "",
}) => {
  return (
    <section className={`body-font ${className}`}>
      <div className="text-image-container wrapper">
        <div className="mb-16 mt-2 flex flex-col items-center text-center md:mb-0 md:mt-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          {headline && (
            <>
              <Heading element="h1" size="xl">
                {headline}
              </Heading>
            </>
          )}
          {subHeadline && (
            <Heading element="h2" size="l">
              {subHeadline}
            </Heading>
          )}

          {description && (
            <p className="my-4 px-2 text-xl leading-relaxed md:px-0">
              {description}
            </p>
          )}
        </div>

        <div
          className={` ${
            imgOnLeft ? "-order-1 md:mr-6" : "md:ml-6"
          } w-5/6 md:w-1/2 lg:w-full lg:max-w-lg`}
        >
          {img && (
            <Image src={img.src} alt={img.alt} width={600} height={600} />
          )}
          {imgComponent && imgComponent}
        </div>
      </div>
    </section>
  );
};

export default Experience;
