import React, { useState, useEffect } from "react";
import Layout from "../layout";
import Seo from "../seo";
import Link from "next/link";
import Button from "../Button";
import Image from "next/image";
import Box from "../Box/EmptyBox";
import NextImage from "next/image";

const NextArticle = ({ data }) => {
  if (Object.keys(data.nextPost).length === 0) {
    return null;
  }
  return (
    <Link href={data.nextPost.permalink} className="next">
      <span>Next</span> <br />
      {data.nextPost.title}
    </Link>
  );
};

const PrevArticle = ({ data }) => {
  if (Object.keys(data.prevPost).length === 0) {
    return null;
  }
  return (
    <Link href={data.prevPost.permalink}>
      <span>Previous</span> <br />
      {data.prevPost.title}
    </Link>
  );
};

const IndexPage = ({ data, content }) => {
  const portfolioBlockData = data.post;
  const permalink = "/images/" + data.post.fileName + "/";
  const portfolioBlockBody = content;
  const [headerClose, setHeaderClose] = useState("");

  useEffect(() => {
    let open = setTimeout(function () {
      setHeaderClose("portfolio-header--close");
      clearTimeout(open);
    }, 1000);
  }, []);

  return (
    <Layout>
      <Seo title={portfolioBlockData.title} />
      <div className="portfolio-page page">
        <div
          className={`portfolio-header ${headerClose} ${
            portfolioBlockData.background_image[0] === ""
              ? "no-header"
              : "header"
          } `}
        >
          <div className={`portfolio-header-top`}>
            <div className="wrapper">
              {/* <h1 className="portfolio-header-title display invert">
                {portfolioBlockData.client}
              </h1> */}
            </div>
          </div>

          <div className="portfolio-header-mid v-center">
            {/* {portfolioBlockData.logo && (
                <Image
                  className="portfolio-image"
                  width={350}
                  height={216}
                  src={permalink + portfolioBlockData.logo[0]}
                />
              )} */}

            <div className="wrapper">
              <div>
                <h2 className="display">{portfolioBlockData.title}</h2> <br />
                {portfolioBlockData.tagline && (
                  <h3>{portfolioBlockData.tagline}</h3>
                )}
                <div className="links">
                  {portfolioBlockData.case_link_url && (
                    <Button
                      className="btn--3"
                      type="link"
                      to={portfolioBlockData.case_link_url[0]}
                    >
                      Visit Site
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Image
            className="portfolio-image"
            fill
            objectFit="cover"
            src={permalink + portfolioBlockData.background_image[0]}
          />

          <div className="portfolio-header-bot">
            <div className="wrapper">
              <div className="portfolio-header-date"></div>
            </div>
          </div>
        </div>
        <section>
          <div className="wrapper">
            <div className="portfolioBlockBody ">
              <div className="sticky">
                <Box
                  empty
                  headline={
                    <>
                      <span>01</span> Info
                    </>
                  }
                >
                  <h4>
                    <span>Date</span>

                    {portfolioBlockData.port_date}
                  </h4>
                  <h4>
                    <span>Client</span>

                    {portfolioBlockData.client}
                  </h4>
                  {portfolioBlockData.agancy && (
                    <h4>
                      <span>Agancy</span>

                      {portfolioBlockData.agancy}
                    </h4>
                  )}
                </Box>
                <Box
                  empty
                  headline={
                    <>
                      <span>01</span> Roles
                    </>
                  }
                >
                  <div className="tags">
                    {portfolioBlockData.category.map((cat) => (
                      <span key={cat}>{cat} </span>
                    ))}
                  </div>
                </Box>
                <Box
                  empty
                  headline={
                    <>
                      <span>02</span> Tech
                    </>
                  }
                >
                  <div className="tags">
                    {portfolioBlockData.tag.map((tag) => (
                      <Link href={`/portfolio/tags/${tag}`}>
                        <span key={tag}>{tag} </span>
                      </Link>
                    ))}
                  </div>
                </Box>
              </div>
              <div className=" gallery-wrapper">
                {portfolioBlockBody && (
                  <Box
                    empty
                    headline={
                      <>
                        <span>4</span> About
                      </>
                    }
                  >
                    <div
                      className="blog-content"
                      dangerouslySetInnerHTML={{ __html: portfolioBlockBody }}
                    />
                  </Box>
                )}

                <Box
                  empty
                  max
                  headline={
                    <>
                      <span>5</span> Gallery
                    </>
                  }
                >
                  {portfolioBlockData.bilder.map((bild) => (
                    <div className="image-wrapper">
                      <NextImage
                        key={bild.id}
                        // style={{
                        // //   color: bild.colors.vibrant,
                        //   boxShadow: "0 0 30px " + bild.colors.vibrant,
                        // }}
                        // width={1200}

                        fill
                        src={permalink + bild}
                      />
                    </div>
                  ))}
                </Box>
              </div>
            </div>
          </div>

          <div className="wrapper pagination">
            <NextArticle data={data} />
            <PrevArticle data={data} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
