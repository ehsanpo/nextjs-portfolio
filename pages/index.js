import React from "react";
import InViewMonitor from "react-inview-monitor";
import Layout from "../components/layout";
import SeO from "../components/seo";
import Button from "../components/Button";
import Stack from "../components/Stack";
import Award from "../components/Award";
import Hero from "../components/Hero";
import PortfolioBlock from "../components/PortfolioBlock";
import fs from "fs";
import matter from "gray-matter";

const IndexPage = ({ portfolioBlockData }) => {
  return (
    <Layout>
      <SeO title="Digital Developer" />
      <Hero />
      <PortfolioBlock data={portfolioBlockData} onHome />
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
          <Stack />
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
      <Award />
    </Layout>
  );
};

export default IndexPage;

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
  let sources = posts.filter((post) => post.data.onHome === true);
  return { props: { portfolioBlockData: sources } };
}
