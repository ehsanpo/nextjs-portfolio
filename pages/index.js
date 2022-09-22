import React from "react";
import InViewMonitor from "react-inview-monitor";
import Layout from "../components/layout";
import SeO from "../components/seo";
import Button from "../components/Button";
// import Box from "../components/Card";
import Stack from "../components/Stack";
import Award from "../components/Award";
import Parallax from "../components/ParallaxImage";
import Hero from "../components/Hero";
import PortfolioBlock from "../components/PortfolioBlock";
import fs from "fs";

import matter from "gray-matter";

import Image from "next/image";

import Link from "next/link";

const IndexPage = ({ data }) => {
  const portfolioBlockData = data?.allMarkdownRemark.edges;
  return (
    <Layout>
      <SeO title="Digital Developer" />
      <Hero />
      {/* <PortfolioBlock data={portfolioBlockData} onHome /> */}
      <section className="no-bg">
        <InViewMonitor
          intoViewMargin="6%"
          classNameNotInView="vis-hidden"
          classNameInView="animated titleIn"
          toggleClassNameOnInView
        >
          <h2 className="title red">Developer Stacks</h2>
        </InViewMonitor>

        <div className="wrapper">
          <Stack type="LNMP" />
          <Stack type="nodejs" />
          <Stack type="cloud" />
          <Stack type="wordpress" />
        </div>
        <div className="center">
          <InViewMonitor
            intoViewMargin="3%"
            classNameNotInView="vis-hidden"
            classNameInView="animated titleIn"
            toggleClassNameOnInView
          >
            <Button to="/skills" type="link" sec>
              See Skills
            </Button>
          </InViewMonitor>
        </div>
      </section>
      <Parallax filename="QX17.jpg" />

      <Award />
      <Parallax filename="QX10.jpg" />
    </Layout>
  );
};

export default IndexPage;
export async function getStaticProps() {
  const files = fs.readdirSync("Content");
  console.log(files);
  return { props: { files: files } };
  // Get all our posts
}

// export const query = graphql`
//   query PortfolioBlock {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___port_date], order: DESC }
//       filter: { frontmatter: { onHome: { eq: true } } }
//     ) {
//       edges {
//         node {
//           id
//           __typename
//           frontmatter {
//             title
//             category
//             tag
//             permalink
//             id
//             logo {
//               childImageSharp {
//                 gatsbyImageData(width: 200)
//               }
//             }
//           }
//           excerpt(pruneLength: 280)
//         }
//       }
//     }
//   }
// `;
