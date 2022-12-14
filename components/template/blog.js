import React from "react";
import Layout from "../layout";
import Seo from "../seo";
import Image from "next/image";
import md from "markdown-it";

const Post = ({ data, content }) => {
  return (
    <Layout>
      <Seo title={data.title} />
      <div className="page-header ">
        <div className="wrapper">
          <h1 className="display">{data.title}</h1>
        </div>
      </div>
      {htmlContent}
      <section>
        <div className="wrapper">
          <div className="wrapper-m">
            <div className="blogContent">
              <div
                dangerouslySetInnerHTML={{ __html: md().render(content) }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Post;
