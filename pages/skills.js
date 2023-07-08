import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SeO from "../components/seo";
import "chart.js/auto";
import { Radar } from "react-chartjs-2";
import chart_data_overall from "../data/skills-data";
import stacks_data from "../data/stacks-data";
import cert_data from "../data/cert-data";
import Button from "../components/Button";
import Stack from "../components/Stack";
import Image from "next/image";
import ImageAndText from "../components/ImageAndText";
import InViewMonitor from "react-inview-monitor";

const color_pattern = {
  Overall: "rgba(105, 248, 255, 0.8)",
  "Front-end": "rgba(245, 151, 64, 0.8)",
  Backend: "rgba(139, 204, 59, 0.8)",
  Database: "rgba(252, 238, 9, 0.8)",
  Design: "rgba(255, 255, 255, 0.8)",
  Cloud: "rgba(0, 64, 176, 0.8)",
  DevOps: "rgba(0, 0, 0, 0.8)",
};
const bgcolor = "rgba(254, 48, 72, 0.8)";

const chart_data_maker = (chart_data) => {
  let return_array = [];
  let slug;
  let skill;

  for (var i = 0; i < chart_data.length; i++) {
    skill = chart_data[i];
    slug = skill.slug;
    return_array[slug] = {
      labels: skill.labels,
      datasets: [
        {
          label: skill.slug,
          data: skill.data,
          pointBackgroundColor: "#fef900",
          pointHoverRadius: 5,
          borderWidth: 1,
          fill: true,
          scaleStartValue: 0,
          borderColor: bgcolor,
        },
      ],
    };
  }
  return return_array;
};

const Skills = () => {
  const chart_data = [...chart_data_overall, ...stacks_data];

  const return_array = chart_data_maker(chart_data);
  const [skdata, setSkdata] = useState(return_array["Overall"]);
  const [current_button, setCurrentButton] = useState("Overall");

  const options = (current_lable = "Overall") => {
    return {
      responsive: true,
      fontSize: 40,
      backgroundColor: color_pattern[current_lable],
      opacity: 0.5,
      pointBorderColor: "#fff",
      scale: {
        ticks: {
          showLabelBackdrop: true,
          fontColor: "#ffffff",
          min: 0,
          max: 10,
          stepSize: 2,
        },
      },
      scales: {
        r: {
          beginAtZero: true,
          grid: {
            color: "#fff",
          },
          pointLabels: {
            color: "#fff",
            font: {
              size: 16,
              family: "Tomorrow, sans-serif",
            },
          },
        },
      },
      pointLabelFontColor: "rgba(255,255,255,1)",

      legend: {
        labels: {
          color: "#fff",
        },
      },

      plugins: {
        legend: {
          labels: {
            color: "#fef900",
            font: {
              size: 18,
              family: "Tomorrow, sans-serif",
            },
          },
        },
      },
    };
  };
  const [radarOptions, setRadarOptions] = useState(options());

  const handleClick = (chart_op, index, e) => {
    const current_lable = return_array[chart_op].datasets[0].label;
    setRadarOptions(options(current_lable));
    setCurrentButton(index);
    setSkdata(return_array[chart_op]);
  };

  return (
    <Layout>
      <SeO title="Skills" />
      <div className="page-header">
        <div className="wrapper">
          <h1 className="display">Skills</h1>
        </div>
      </div>
      <section className="bg-color-3">
        <div className="wrapper">
          <div className="radar-right">
            {chart_data.map((skill, index) => (
              <Button
                className={`${skill.slug} ${
                  current_button == index ? "active" : ""
                }`}
                onClick={(e) => {
                  handleClick(skill.slug, index, e);
                }}
                key={skill.slug}
              >
                {skill.slug}
              </Button>
            ))}
          </div>
        </div>
        <div className="wrapper-m">
          <div className="radarholder">
            <Radar data={skdata} options={radarOptions} />
          </div>
        </div>
      </section>

      <section className="no-bg">
        <InViewMonitor
          intoViewMargin="6%"
          classNameNotInView="vis-hidden"
          classNameInView="animated titleIn"
          toggleClassNameOnInView
        >
          <h2 className="title red">Developer Stacks</h2>
        </InViewMonitor>
        <div className="wrapper">
          <Stack />
        </div>
      </section>

      <section className="bg-color-1 cert-wrap">
        <InViewMonitor
          intoViewMargin="6%"
          classNameNotInView="vis-hidden"
          classNameInView="animated titleIn"
          toggleClassNameOnInView
        >
          <h2 className="title red">Certifications</h2>
        </InViewMonitor>
        <div className="wrapper">
          {cert_data.map((cert) => {
            return (
              <div>
                <img src={`/img/cert/${cert.img}`}></img>
                <h4>{cert.name}</h4>
              </div>
            );
          })}
        </div>
      </section>

      <ImageAndText
        image={
          <Image
            src="/img/cloudpractitioner2.jpg"
            alt="Self-Educated"
            width={700}
            height={390}
          />
        }
      >
        <h2>Online Self-Educated</h2>
        <p>
          I usually watch a lot of youtube tutorials, I alltså use other sites
          like, Udemy, Lynda & Treehouse.
        </p>
      </ImageAndText>
      <ImageAndText
        left
        image={
          <Image src="/img/agile.jpeg" alt="agile" width={700} height={390} />
        }
      >
        <h2>Agile Development Processes</h2>
        <p>
          I believe that agility is about moving quickly and adapting to change
          at a sustainable pace..
        </p>
      </ImageAndText>
      <ImageAndText
        image={
          <Image
            src="/img/continuous-delivery.jpg"
            alt="continuous-delivery"
            width={700}
            height={390}
          />
        }
      >
        <h2>Continuous Development</h2>
        <p>
          Ability to get changes of all types—including new features,
          configuration changes, bug fixes and experiments—into production, or
          into the hands of users, safely and quickly in a sustainable way.
        </p>
      </ImageAndText>
      <section className="bg-color-2">
        <div className="wrapper">
          <img
            width="1400"
            height="700"
            src="https://cr-skills-chart-widget.azurewebsites.net/api/api?username=ehsanpo&skills=JavaScript,HTML,CSS,JSON,Less,NodeJS,PHP,Python,ReactJS,Ruby,SCSS,SQL,Shell,TypeScript&bg=transparent"
          />
        </div>
      </section>

      <section className="links-block">
        <InViewMonitor
          intoViewMargin="6%"
          classNameNotInView="vis-hidden"
          classNameInView="animated titleIn"
          toggleClassNameOnInView
        >
          <h2 className="title red">Stats</h2>
        </InViewMonitor>
        <div className="wrapper">
          <div className="link">
            <div className="content">
              <h3
                data-aos="fade-up"
                data-aos-delay="200"
                className="aos-init aos-animate"
              >
                Total commits this year
              </h3>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="aos-init aos-animate"
              >
                <p>1100</p>
              </div>
            </div>
          </div>
          <div className="link">
            <div className="content">
              <h3
                data-aos="fade-up"
                data-aos-delay="300"
                className="aos-init aos-animate"
              >
                Daytime
              </h3>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="aos-init aos-animate"
              >
                <p>I’m most productive during daytime</p>
              </div>
            </div>
          </div>
          <div className="link">
            <div className="content">
              <h3
                data-aos="fade-up"
                data-aos-delay="400"
                className="aos-init aos-animate"
              >
                Tuesdays
              </h3>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="aos-init aos-animate"
              >
                <p>I’m most productive on Tuesdays</p>
              </div>
            </div>
          </div>
          <div className="link">
            <div className="content">
              <h3
                data-aos="fade-up"
                data-aos-delay="500"
                className="aos-init aos-animate"
              >
                snake_case
              </h3>
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="aos-init aos-animate"
              >
                <p>I prefer snake_case for naming variables</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Skills;
