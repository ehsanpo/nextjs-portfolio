import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import EmailForm from "../components/EmailForm/EmailForm";

const Portfolio = () => (
  <Layout>
    <Seo title="Contact For a Job interview - Developer" />
    <div className="page-header">
      <div className="wrapper">
        <h1 className="display">Hire me</h1>
      </div>
    </div>
    <section className="no-pad no-marg ">
      <div className="wrapper-m">
        <div>
          <EmailForm />
          <br />
        </div>
      </div>
    </section>
  </Layout>
);
export default Portfolio;
