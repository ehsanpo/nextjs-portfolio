import React from "react";
import Layout from "../layout";
import Seo from "../seo";
import Image from "next/image";
import reactStringReplace from "react-string-replace";

const Post = ({ data, content }) => {
  const imgLink = data.post.permalink.replace("/notes/", "/images/");
  const regex = /(!\[(.*?)\]\((.*?)\))/g;
  let cleanContent = reactStringReplace(content, regex, (match, i) => {
    if (match[0] == "!") return null;
    return (
      <Image
        src={imgLink + match.replace(".", "")}
        alt={match}
        width={1200}
        height={200}
      />
    );
  });

  cleanContent = reactStringReplace(cleanContent, /<iframe\s*/, (match, i) => {
    const text = match.match(/src="([^"]+)"/);
    if (text) {
      const srcValue = text[1];
      return <iframe width="100%" src={srcValue} />;
    }
  });

  return (
    <Layout>
      <Seo title={data.post.title} />
      <div className="page-header ">
        <div className="wrapper">
          <h1 className="display">{data.post.title}</h1>
        </div>
      </div>

      <section>
        <div className="wrapper">
          <div className="wrapper-m">
            <div className="blogContent">{cleanContent}</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Post;
