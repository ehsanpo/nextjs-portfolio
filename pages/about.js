/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Loadable from "@loadable/component";
import Layout from "../components/layout";
import SeO from "../components/seo";
import Award from "../components/Award";
import Button from "../components/Button";
import ImageAndText from "@/components/ImageAndText";
import TextAndImage from "@/components/TextAndImage";
import dynamic from "next/dynamic";
import Image from "next/image";
import Section from "@/components/Section";
import Heading from "@/components/Heading";

import Education from "@/components/Education";
import Experience from "@/components/Experience";

const Imagehover = dynamic(() => import("../components/Imagehover"), {
  ssr: false,
});

const NotFoundPage = () => {
  return (
    <>
      <SeO title="About Ehsan Pourhadi" />
      <ImageAndText noMarg left image={<Imagehover />}>
        <h2>About Ehsan</h2>
        <p className="lead-text ">
          Welcome to my digital world! I'm Ehsan Pourhadi, a versatile
          Developer, Designer, and Producer with over ten years of experience
          crafting innovative solutions for the digital realm.
        </p>
      </ImageAndText>
      <Section className="bg-color-2">
        <div className="flex-container flex">
          <Heading element="h2" size="xl">
            Background
          </Heading>
          <div className="md:w-3/5 md:pl-6">
            <div className="text-base leading-relaxed">
              <span className=" mt-4">
                My journey as a self-taught professional has equipped me with a
                profound understanding of software development, design, and
                multimedia. With a relentless drive for excellence, I have honed
                my expertise in delivering robust software architectures,
                seamless user experiences, and visually captivating designs.
                With a diverse skill set, I excel in various web development
                stacks, anchored by a robust command of WordPress and Laravel
                for backend excellence.
                <br />
                <br />
                My proficiency extends seamlessly to front-end mastery with
                Javascript and HTML/CSS. Beyond web development, I possess a
                profound comprehension of user interface design, intricacies of
                logo and identity creation, and the intricacies of search engine
                optimization.
                <br />
                <br />
                My extensive expertise also spans multimedia and mobile
                development, as I consistently seek novel ideas and
                methodologies to elevate my skills and enrich the user
                experience.
              </span>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex-container flex">
          <Heading element="h2" size="xl" className="md:w-2/5">
            Philosophy
          </Heading>
          <div className="md:w-3/5 md:pl-6">
            <ul className="text-base leading-relaxed">
              <li>
                <p>
                  <strong>Iterative Excellence:</strong> Code and art thrive
                  through iterative processes. I embrace trial, error, and rapid
                  iteration to create solutions that transcend boundaries.
                </p>
              </li>
              <li>
                <p>
                  <strong>Architects of Inclusivity:</strong> Developers shape a
                  virtual landscape where inclusivity and user-centric design
                  prevail. My goal is to create online spaces where every user
                  feels a sense of belonging.
                </p>
              </li>
              <li>
                <p>
                  <strong>Humility in Design:</strong> Ego has no place in
                  design. I approach work humbly, embracing failure to pave the
                  way for rapid success.
                </p>
              </li>
              <li>
                <p>
                  <strong>Problem Definition:</strong> Effective design starts
                  with clear problem definition. Understanding challenges leads
                  to purposeful solutions.
                </p>
              </li>
              <li>
                <p>
                  <strong>Diverse Solutions:</strong> No single solution fits
                  all. I explore creative possibilities to address unique
                  contexts and demands.
                </p>
              </li>
              <li>
                <p>
                  <strong>User-Centric Empathy:</strong> Guided by empathy, I
                  design from a user-centric perspective, ensuring solutions
                  resonate and provide value.
                </p>
              </li>
              <li>
                <p>
                  <strong>Ethics and Impact:</strong> I prioritize privacy,
                  security, and ethics, contributing to a digital landscape of
                  integrity.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section className="bg-color-3">
        <div className="flex-container flex">
          <Heading element="h2" size="xl" className="md:w-2/5">
            Motivators
          </Heading>
          <div className="md:w-3/5 md:pl-6">
            <div className="text-base leading-relaxed">
              <ul>
                <li>
                  <p>
                    Tackling <strong>complex</strong> problems.
                  </p>
                </li>
                <li>
                  <p>
                    Empowering colleagues to contribute
                    <strong> meaningful</strong> insights.
                  </p>
                </li>
                <li>
                  <p>
                    Constructing cohesive and{" "}
                    <strong>scalable software </strong>
                    architectures.
                  </p>
                </li>
                <li>
                  <p>
                    Optimizing workflows. <strong>Sharing expertise</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    Establishing <strong>credibility</strong> and reliability.
                  </p>
                </li>
                <li>
                  <p>
                    Code is not just functional; it molds
                    <strong>digital environments</strong>, driving innovation.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <section className="expe-block no-bg">
        <div className="wrapper">
          <Experience />
          <Education />
        </div>
      </section>

      {/* <section className="image-text-block-boxed no-bg add_padding">
        <Fade
          intoViewMargin="6%"
          classNameNotInView="vis-hidden"
          classNameInView="animated titleIn"
          toggleClassNameOnInView
        >
          <h2 className="title red">My Resume</h2>
        </Fade>
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
    </>
  );
};

export default NotFoundPage;
