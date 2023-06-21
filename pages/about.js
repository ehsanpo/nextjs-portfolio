import * as React from "react";
import Layout from "../components/layout";
import SeO from "../components/seo";
import Award from "../components/Award";
import dynamic from "next/dynamic";
import Link from "next/link";

const Imagehover = dynamic(() => import("../components/Imagehover"), {
  ssr: false,
});

const NotFoundPage = () => {
  return (
    <Layout>
      <SeO title="About Ehsan Pourhadi" />
      <div className="page-header ">
        <div className="wrapper">
          <h1 className="display">About</h1>
        </div>
      </div>
      <section>
        <div className="wrapper wrapper-l">
          <div style={{ flex: 4 }}>
            <h2>Hej Hej, I’m Ehsan Pourhadi.</h2>
            <p>
              I am a self-taught software developer, designer, and producer with
              over 10 years of experience in the industry.
            </p>
            <p>
              I am passionate about creating enjoyable and meaningful digital
              experiences for my clients and strive to provide the best possible
              solutions. My skill set includes web development using LAMP/NodeJS
              stacks, with a strong foundation in WordPress and Laravel for the
              backend and expertise in Javascript and HTML/CSS for the
              front-end.
            </p>
            <p>
              In addition to web development, I have a deep understanding of
              user interface design, logo and identity creation, and search
              engine optimization. I also have extensive knowledge of multimedia
              and mobile development, and am always seeking out new concepts and
              techniques to enhance my skills and the user experience.
            </p>
            <p>
              Thank you for visiting my website and I hope to have the
              opportunity to work with you soon.
            </p>
          </div>
          <div>
            <Imagehover />
          </div>
        </div>
      </section>
      <section className="expe-block no-bg">
        <div className="wrapper">
          <div className="list-box">
            <h2>Experience</h2>
            <ul className="timeline">
              <li data-aos="fade-left" className="aos-init aos-animate">
                <div className="timelineUnit">
                  <h4>
                    Software developer at Bredband2
                    <span className="timelineDate">2020</span>
                  </h4>
                  <p>
                    Working with Gatsby, NextJs &amp; Ruby on Rails.
                    <br />
                    <Link href="/portfolio/bredband2/">
                      Read more here &gt;
                    </Link>
                  </p>
                </div>
              </li>
              <li data-aos="fade-left" className="aos-init aos-animate">
                <div className="timelineUnit">
                  <h4>
                    Software developer With Front-end focus at Skymill
                    <span className="timelineDate">2020</span>
                  </h4>
                  <p>
                    Working with React and writing end to end test for the user
                    flow.
                  </p>
                </div>
              </li>
              <li data-aos="fade-left" className="aos-init aos-animate">
                <div className="timelineUnit">
                  <h4>
                    Frilansande Webbutvecklare
                    <span className="timelineDate">2019</span>
                  </h4>
                  <p>
                    As a freelance web developer, I develop and manage modern
                    responsive websites and web applications.
                  </p>
                </div>
              </li>
              <li data-aos="fade-left" className="aos-init">
                <div className="timelineUnit">
                  <h4>
                    Web Developer/ Tech-lead at Guts &amp; Glory{" "}
                    <span className="timelineDate">2017 - 2019</span>
                  </h4>
                  <p>
                    Working as Tech lead for an advertisement agancy, offering
                    clients strategic and digital communication tools in order
                    to reach more clients and new markets.
                  </p>
                </div>
              </li>
              <li data-aos="fade-left" className="aos-init">
                <div className="timelineUnit">
                  <h4>
                    Full Stack Developer at Whitespace
                    <span className="timelineDate">2013 - 2017</span>
                  </h4>
                  <p>
                    Full-stack developer for a web agancy that offers web
                    development, UX/UI design, digital marketing and strategies
                    to clients all over the world.
                  </p>
                </div>
              </li>
              <li data-aos="fade-left" className="aos-init">
                <div className="timelineUnit">
                  <h4>
                    Web Developer/Designer at The Fan Club
                    <span className="timelineDate">2012 - 2013</span>
                  </h4>
                  <p>Web Producer in The Fan Club.</p>
                </div>
              </li>
              <li data-aos="fade-left" className="aos-init">
                <div className="timelineUnit">
                  <h4>
                    Freelance <span className="timelineDate">2012</span>
                  </h4>
                  <p>
                    I Worked as freelancer for about a year. The whole idea was
                    started with big ambition to help local businesses.
                  </p>
                </div>
              </li>
              <li data-aos="fade-left" className="aos-init">
                <div className="timelineUnit">
                  <h4>
                    Developer/Designer at Next Generation Design
                    <span className="timelineDate">2011 - 2010</span>
                  </h4>
                  <p>
                    I worked as a designer/developer and also took care of
                    management of servers and webhosting.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="list-box">
            <h2>Education</h2>
            <ul className="timeline">
              <li data-aos="fade-right" className="aos-init">
                <div className="timelineUnit">
                  <h4>
                    Ruby on Rails
                    <span className="timelineDate">2021</span>
                  </h4>
                  <p>BredBand2</p>
                </div>
              </li>
              <li data-aos="fade-right" className="aos-init">
                <div className="timelineUnit">
                  <h4>
                    Linux Academy / A Cloud Guru
                    <span className="timelineDate">2018</span>
                  </h4>
                  <p>AWS Certified Solutions Architect</p>
                </div>
              </li>
              <li data-aos="fade-right" className="aos-init">
                <div className="timelineUnit">
                  <h4>
                    Hermods
                    <span className="timelineDate">2011</span>
                  </h4>
                  <p>Programming A and Database management course.</p>
                </div>
              </li>
              <li data-aos="fade-right" className="aos-init">
                <div className="timelineUnit">
                  <h4>
                    Glokala Folkshögskola
                    <span className="timelineDate">2009</span>
                  </h4>
                  <p>
                    Music production(Recording, Mixing, Mastering), Event
                    planning and general working process in music industry.
                  </p>
                </div>
              </li>
              <li data-aos="fade-right" className="aos-init">
                <div className="timelineUnit">
                  <h4>
                    Universitetsholmen's High School
                    <span className="timelineDate">2008</span>
                  </h4>
                  <p>
                    Electricity Program with focus on Automation (PLC
                    programming, Control engineering &amp; Pneumatic). I also
                    took a Webdesign course.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section className="image-text-block-boxed no-bg add_padding">
        <InViewMonitor
          intoViewMargin="6%"
          classNameNotInView="vis-hidden"
          classNameInView="animated titleIn"
          toggleClassNameOnInView
        >
          <h2 className="title red">My Resume</h2>
        </InViewMonitor>
        <div className="wrapper-m">
          <div className=" center">
            <Button
              type="link"
              to="https://ehsan-pourhadi.com/site/uploads/2019/04/CV-19-SV.pdf"
            >
              PDF - English
            </Button>
            <Button
              to="https://ehsan-pourhadi.com/site/uploads/2019/04/CV-19-EN.pdf"
              type="link"
            >
              PDF - Svenska
            </Button>
            <Button to="https://www.linkedin.com/in/ehsanp/" type="link">
              My Linkedin
            </Button>
          </div>

          <div className="itb-image">
            <img
              src="https://ehsan-pourhadi.com/site/uploads/2020/06/wsi-imageoptim-Free-A4-Paper-in-Male-Hand-Mockup-PSD-scaled.jpg"
              alt=""
            />
          </div>
        </div>
      </section> */}
      <Award />
    </Layout>
  );
};

export default NotFoundPage;
