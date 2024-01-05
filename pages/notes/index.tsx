import React from "react";
//import { Link } from "gatsby"

import Seo from "@/components/Seo";
import PostBlock from "@/components/PostBlock";
import fs from "fs";
import matter from "gray-matter";
import Section from "@/components/Section";

const Portfolio = ({ data }: BlogProps) => (
  <>
    <Seo title="Developer Blog" description="Web development journey" />

    <div className="page-header">
      <div className="wrapper">
        <h1 className="display">Blog</h1>
      </div>
    </div>
    <section className="bg-color-1">
      <div className="wrapper">
        <div className="wrapper-m">
          <div>
            My tech-focused blog shares my web development journey, insights on
            modern/future tech, and tools for an enhanced internet experience.
            Join the knowledge journey!
          </div>
        </div>
      </div>
    </section>
    <div className="wrapper">
      <PostBlock data={data} excerpt />
    </div>
  </>
);
export default Portfolio;

export async function getStaticProps() {
  const files = fs
    .readdirSync("content/Blog")
    .filter((f) => !f.includes(".DS_Store"));
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      `content/Blog/${fileName}/${fileName}.md`,
      "utf-8",
    );
    const { data: frontmatter, content } = matter(readFile);
    frontmatter.fileName = fileName;

    frontmatter.date = new Date(frontmatter.date).toISOString();

    return {
      slug: "/notes/" + frontmatter.permalink,
      data: frontmatter,
      content,
    };
  });
  const sortedpost = posts.sort(
    (a, b) =>
      (new Date(b.data.date).getTime() as number) -
      (new Date(a.data.date).getTime() as number),
  );
  return { props: { data: sortedpost } };
}
