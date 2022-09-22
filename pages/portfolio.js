import React from "react";
import Layout from "../components/layout";
import SeO from "../components/seo";
import PortfolioBlock from "../components/PortfolioBlock";

const Portfolio = ({ data }) => {
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
      {/* <PortfolioBlock data={data.allMarkdownRemark.edges} /> */}
    </Layout>
  );
};
export default Portfolio;

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
