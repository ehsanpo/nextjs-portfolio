import React from "react";
import Layout from "../layout";
import Seo from "../seo";
import Image from "next/image";
import md from "markdown-it";
import ReactMarkdown from "react-markdown";

const Post = ({ data, content }) => {
  console.log(content);
  return (
    <Layout>
      <Seo title={data.title} />
      <div className="page-header ">
        <div className="wrapper">
          <h1 className="display">{data.title}</h1>
        </div>
      </div>

      <section>
        <div className="wrapper">
          <div className="wrapper-m">
            <div className="blogContent">
              <ReactMarkdown
                components={{
                  img: (props) => (
                    <Image
                      src={props.src}
                      alt={props.alt}
                      width={1200}
                      height={200}
                    />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
              {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Post;
