import React from "react";
//import { Link } from "gatsby"
import Layout from "../components/layout";
import Seo from "../components/Seo";
import Parallax from "../components/ParallaxImage";

const Portfolio = () => (
  <Layout>
    <Seo title="Developer Portfolio" />
    <Parallax filename="x2.jpg" />
    <div className="page-header">
      <div className="wrapper">
        <h1 className="display">Gallery</h1>
      </div>
    </div>

    <section className="no-pad no-marg ">
      <iframe
        className="iframeGallery"
        src="https://ehsanpo.github.io/virtual-art-gallery/"
      />
    </section>
  </Layout>
);
export default Portfolio;
