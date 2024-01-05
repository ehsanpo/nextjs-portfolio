import React from "react";
import Fade from "@/ulti/animation";
import Layout from "../components/layout";
import SeO from "../components/seo";
import Button from "../components/Button";
import Stack from "../components/Stack";
import Award from "../components/Award";
import Hero from "../components/Hero";
import PortfolioBlock from "../components/PortfolioBlock";
import Clients from "@/components/Clients";
import Testimonial from "@/components/Testimonial";
import fs from "fs";
import matter from "gray-matter";

const IndexPage = ({ portfolioBlockData, clients }) => {
  return (
    <>
      <SeO title="Digital Developer" />
      <Hero />
      <PortfolioBlock data={portfolioBlockData} onHome />
      <section className="no-bg">
        <Fade>
          <h2 className="title red">Developer Stacks</h2>
        </Fade>
        <div className="wrapper">
          <Stack />
        </div>
        <div className="center">
          <Fade>
            <Button to="/skills" type="link" sec>
              See Skills
            </Button>
          </Fade>
        </div>
      </section>
      <Award />
      <Testimonial />
      <Clients clients={clients} />
    </>
  );
};

export default IndexPage;

export async function getStaticProps() {
  const files = fs
    .readdirSync("content/Portfolio")
    .filter((f) => !f.includes(".DS_Store"));
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      `Content/Portfolio/${fileName}/${fileName}.md`,
      "utf-8",
    );
    const { data: frontmatter } = matter(readFile);
    frontmatter.fileName = fileName;
    return {
      slug: frontmatter.permalink,
      data: frontmatter,
    };
  });
  let clients = posts
    .map((post) => post.data.client[0])
    .filter((client, index, self) => self.indexOf(client) === index);

  let sources = posts.filter((post) => post.data.onHome === true);
  return { props: { portfolioBlockData: sources, clients } };
}
