import fs from "fs";
import matter from "gray-matter";
import Template from "../../components/template/blog.js";

export async function getStaticPaths() {
  const files = fs.readdirSync("Content/blog");
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
  const fileName = fs.readFileSync(`Content/blog/${slug}/${slug}.md`, "utf-8");
  const { data: data, content } = matter(fileName);
  data.fileName = slug;

  return {
    props: {
      data,
      content,
    },
  };
}

export default function PostPage({ data, content }) {
  return <Template data={data} content={content} />;
}
