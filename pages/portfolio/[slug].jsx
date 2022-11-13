import fs from "fs";
import matter from "gray-matter";
import Template from "../../components/template/portfolio.js";

export async function getStaticPaths() {
  const files = fs.readdirSync("Content/Portfolio");
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
  const fileName = fs.readFileSync(
    `Content/Portfolio/${slug}/${slug}.md`,
    "utf-8"
  );
  const { data: data, content } = matter(fileName);

  console.log(content);
  return {
    props: {
      data,
      content,
    },
  };
}

export default function PostPage({ data }) {
  console.log(data);
  return <Template data={data} />;
}
