// import BlogPosts from '@/components/BlogPosts'
// import SiteContainer from '@/components/SiteContainer'
// import { getAllPostsWithFrontMatter, getTags } from "@/lib/utils";
import React from "react";
import fs from "fs";
import matter from "gray-matter";

async function collateTags(dataType) {
  const files = fs.readdirSync("Content/Portfolio");
  let allTags = new Set(); // to ensure only unique tags are added

  files.map((postSlug) => {
    const source = fs.readFileSync(
      `Content/portfolio/${postSlug}/${postSlug}.md`,
      "utf8"
    );
    const { data } = matter(source);
    data.tag.forEach((tag) => allTags.add(tag));
  });

  return Array.from(allTags);
}

export async function getTags(dataType) {
  const tags = {
    blog: await collateTags("blog"),
  };
  return tags[dataType];
}
export async function getAllPostsWithFrontMatter(dataType, filterByTag = null) {
  const files = fs.readdirSync("Content/Portfolio");

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      `Content/portfolio/${postSlug}/${postSlug}.md`,
      "utf8"
    );

    const { data } = matter(source);
    // console.log(data);

    if (filterByTag) {
      if (data.tags.includes(filterByTag)) {
        return [
          {
            frontMatter: data,
            slug: postSlug.replace(".md", ""),
          },
          ...allPosts,
        ];
      } else {
        return allPosts;
      }
    }

    return [
      {
        frontMatter: data,
        slug: postSlug.replace(".md", ""),
      },
      ...allPosts,
    ];
  }, []);
}

export default function BlogTag({ posts, title, description, tag }) {
  return (
    <div className="mb-6">
      <section>
        <h3>✍🏼 Blog posts tagged "{tag}"</h3>
        {/* <BlogPosts posts={posts} /> */}
      </section>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getAllPostsWithFrontMatter("blog", params.tag);
  console.log(posts.length);
  console.log(params);

  return {
    props: {
      posts,
      tag: params.tags,
    },
  };
}

export async function getStaticPaths() {
  const tags = await getTags("blog");
  console.log(tags);

  const paths = tags.map((tag) => ({
    params: {
      tags: tag,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
