import React from "react";
import Layout from "../components/layout";
import SeO from "../components/seo";
import PortfolioBlock from "../components/PortfolioBlock";
import fs from "fs";
import matter from "gray-matter";

const Portfolio = ({ portfolioBlockData }) => {
  return (
    <Layout>
      <SeO title="Developer Portfolio" />
      <div className="page-header">
        <div className="wrapper">
          <h1 className="display">Portfolio</h1>
        </div>
      </div>
      <section className="bg-color-1">
        <div className="wrapper">
          <div className="wrapper-m">
            <div>
              Here are my best work put forth for you to see. I do various
              projects, and my concept is that focusing on the complete
              satisfaction of the end user. I see things from both, as a
              developer’s perspective and the end user’s perspective.
              <br />I do front-end, back-end, and site maintenance and also work
              as a system admin. Please have a look below into my current
              portfolio. I am sure you’ll love the work that I have created, and
              if you have any questions, please do not hesitate to ask.
            </div>
          </div>
        </div>
      </section>
      <PortfolioBlock data={portfolioBlockData} />
    </Layout>
  );
};
export default Portfolio;

export async function getStaticProps() {
  const files = fs.readdirSync("Content/Portfolio");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      `Content/Portfolio/${fileName}/${fileName}.md`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);
    frontmatter.fileName = fileName;
    return {
      slug: frontmatter.permalink,
      data: frontmatter,
    };
  });

  const sortedpost =  posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  console.log('date', sortedpost[0])
  return { props: { portfolioBlockData: sortedpost } };
  // Get all our posts
}

// export const query = graphql`
// 	query AllPortfolioBlock {
// 		allMarkdownRemark(
// 			filter: { frontmatter: { type: { eq: "portfolio" } } }
// 			sort: { order: DESC, fields: frontmatter___port_date }
// 		) {
// 			edges {
// 				node {
// 					id
// 					__typename
// 					frontmatter {
// 						title
// 						category
// 						tag
// 						permalink
// 						id
// 						logo {
// 							childImageSharp {
// 								gatsbyImageData(
// 									layout: CONSTRAINED
// 									placeholder: BLURRED
// 									formats: [AUTO, WEBP, AVIF]
// 									width: 200
// 								)
// 							}
// 						}
// 						type
// 					}
// 				}
// 			}
// 		}
// 	}
// `;
