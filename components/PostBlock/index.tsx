import React from "react";
import Card from "@/components/Card/Card";
import Button from "@/components/Button";
import reactStringReplace from "react-string-replace";
import Image from "next/image";
import Link from "next/link";

const Index = ({ data, onHome = false, excerpt = false }: BlogProps) => {
  return (
    <div className="container mx-auto  mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto  lg:max-w-none">
        <div className="mb-4">
          {data.map((item) => {
            const imgLink = item.data.permalink.replace("/notes/", "/images/");
            const permalink = "/notes" + item.data.permalink;
            const content = excerpt
              ? item.content.substr(0, 170)
              : item.content;
            const regex = /(!\[(.*?)\]\((.*?)\))/g;
            let cleanContent = reactStringReplace(
              content,
              regex,
              (match, i) => {
                if (match[0] == "!") return null;
                return " ";
              },
            );

            cleanContent = reactStringReplace(
              cleanContent,
              /<iframe\s*/,
              (match, i) => {
                const text = match.match(/src="([^"]+)"/);
                if (text) {
                  const srcValue = text[1];
                  return <iframe width="100%" src={srcValue} />;
                }
              },
            );

            return (
              <article
                key={item.data.id}
                className="relative mx-2 mt-4 pt-4 lg:mx-0
               "
              >
                <span
                  className=" bg-accent-focus 
                  absolute   
                left-0 top-0 h-[2px] 
                w-3
                "
                />
                <span
                  className=" bg-accent 
                absolute left-4
                right-0 top-0 
                h-[1px]
                "
                />

                <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                  <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="text-2xl font-semibold text-neutral-950">
                      <Link href={permalink}>{item.data.title}</Link>
                    </h2>
                    <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                      <dt className="sr-only">Published</dt>
                      <dd className=" left-0 top-0 text-sm text-neutral-950 lg:static">
                        <time dateTime={item.data.date}> {item.data.date}</time>
                      </dd>
                      <dt className="sr-only">Author</dt>
                      <dd className="mt-2 flex gap-x-2">
                        <div className="bg-base-200 flex-none overflow-hidden rounded-xl">
                          <Image
                            alt="Ehsan Pourhadi"
                            loading="lazy"
                            width="48"
                            height="48"
                            className="h-5 w-5 object-cover"
                            src="/img/ehsan1.jpg"
                          />
                        </div>
                        <div className="text-base-content text-sm">
                          <div className="font-semibold">
                            {item.data.author}
                          </div>
                          <div>Senior Developer</div>
                        </div>
                      </dd>
                    </dl>
                    <p className="text-base-content mt-2 max-w-2xl ">
                      {cleanContent}
                    </p>
                    <Link
                      className="btn mt-4"
                      aria-label={item.data.title}
                      href={permalink}
                    >
                      <span className="relative top-px">Read more</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
          {onHome && (
            <div className="center">
              <Button className="btn--3">See Portfolio</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
