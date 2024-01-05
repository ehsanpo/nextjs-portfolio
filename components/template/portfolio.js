import React, { useState, useEffect } from "react";
import Layout from "../layout";
import Seo from "@/components/Seo";
import { Link } from "next/link";
import Button from "../Button";
import Image from "next/image";
import Box from "../Box/EmptyBox";
import NextImage from "next/image";

const IndexPage = ({ data, content }) => {
  const portfolioBlockData = data.post;
  const permalink = "/images/" + data.post.fileName + "/";
  const portfolioBlockBody = content;
  const [headerClose, setHeaderClose] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [video, setVideo] = useState(false);

  // const { next, previous } = pageContext;
  // const nextArticle = next && (
  // 	<Link to={next.frontmatter.permalink} className="next">
  // 		<span>Next</span> <br />
  // 		{next.frontmatter.title}
  // 	</Link>
  // );

  // const prevArticle = previous && (
  // 	<Link to={previous.frontmatter.permalink}>
  // 		<span>Previous</span> <br />
  // 		{previous.frontmatter.title}
  // 	</Link>
  // );

  function extractYouTubeVideoId(url) {
    const regex =
      /(?:\?v=|\/embed\/|\/v\/|\/vi\/|\/e\/|\/watch\?v=|\/watch\?feature=player_embedded&v=|\/watch\?feature=player_embedded&v=|\/watch\?v=|\/watch\?feature=player_embedded&v=|\/embed\/videoseries\?list=)([^#\&\?]*).*/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  }

  useEffect(() => {
    if (portfolioBlockData.video) {
      setVideo(extractYouTubeVideoId(portfolioBlockData.video[0]));
    }

    let open = setTimeout(function () {
      setHeaderClose("portfolio-header--close");
      clearTimeout(open);
    }, 1000);
  }, [portfolioBlockData.video]);

  const inputChange = (e) => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    let open = setTimeout(function () {
      setHeaderClose("portfolio-header--close");
      clearTimeout(open);
    }, 1000);
  }, []);

  return (
    <>
      <Seo title={portfolioBlockData.title} />
      <div className="portfolio-page page">
        <div
          className={`portfolio-header ${headerClose} ${
            permalink + portfolioBlockData.background_image[0] === ""
              ? "no-header"
              : "header"
          } `}
        >
          <div className={`portfolio-header-top`}>
            <div className="wrapper">
              <h1 className="portfolio-header-title display invert">
                {portfolioBlockData.client}
              </h1>
            </div>
          </div>
          <div className="portfolio-header-mid v-center">
            <div className="portfolio-topImage">
              {portfolioBlockData.logo && (
                <Image
                  objectFit="cover"
                  alt={portfolioBlockData.title}
                  className="portfolio-image"
                  width={350}
                  height={216}
                  src={permalink + portfolioBlockData.logo[0]}
                />
              )}
            </div>
            <h2 className="display">{portfolioBlockData.title}</h2>
            <h3>{portfolioBlockData.tagline}</h3>
            {video && (
              <div
                className={`video-wrapper mr-4 ${
                  isPlaying ? "video-wrapper--fullscreen" : ""
                }`}
              >
                <input type="checkbox" onChange={() => inputChange()} />
                <div className="video">
                  <iframe
                    className="bg-video"
                    src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&controls=1&loop=1`}
                    allowFullScreen
                    allow="autoplay"
                  />
                </div>
                <div className="text my-3 mr-2 max-w-md">
                  <span data-text="Watch the video"></span>
                </div>
              </div>
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
          <Image
            className="portfolio-image-bg"
            objectFit="cover"
            width={1920}
            height={1080}
            alt={portfolioBlockData.title}
            src={permalink + portfolioBlockData.background_image[0]}
          />

          <div className="portfolio-header-bot">
            <div className="wrapper">
              <div className="portfolio-header-date">
                <h3>{portfolioBlockData.port_date}</h3>
              </div>
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
                      <span key={tag}>{tag} </span>
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
                    <div className="image-wrapper" key={bild.id}>
                      <NextImage
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

          {/* <div className="wrapper pagination">
            {prevArticle}
            {nextArticle}
          </div> */}
        </section>
      </div>
    </>
  );
};

export default IndexPage;
