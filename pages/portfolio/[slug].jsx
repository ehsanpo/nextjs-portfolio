import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Template from "@/components/template/portfolio.js";

export async function getStaticPaths() {
  const files = fs
    .readdirSync("content/Portfolio")
    .filter((f) => !f.includes(".DS_Store"));
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const files = fs
    .readdirSync("content/Portfolio")
    .filter((f) => !f.includes(".DS_Store"));
  // find the index of the current slug in files
  const index = files.findIndex((file) => file.replace(".md", "") === slug);

  // get the next and previous slugs
  const next = files[index + 1] || files[0];
  const nextPostFile = fs.readFileSync(
    `content/Portfolio/${next}/${next}.md`,
    "utf-8",
  );
  const prev = files[index - 1] || files[files.length - 1];
  const prevPostFile = fs.readFileSync(
    `content/Portfolio/${prev}/${prev}.md`,
    "utf-8",
  );
  const currentPost = fs.readFileSync(
    `content/Portfolio/${slug}/${slug}.md`,
    "utf-8",
  );

  const { data: post, content } = matter(currentPost);
  post.fileName = slug;
  const { data: prevPost } = matter(prevPostFile);
  const { data: nextPost } = matter(nextPostFile);

  return {
    props: {
      data: { post, prevPost, nextPost },
      content,
    },
  };
}

export default function Portfolio({ data, content }) {
  return <Template data={data} content={content} />;
}
