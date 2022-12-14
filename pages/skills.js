import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SeO from "../components/seo";
import "chart.js/auto";
import { Radar } from "react-chartjs-2";
import chart_data from "../data/skills-data";
import cert_data from "../data/cert-data";
import Button from "../components/Button";
import Stack from "../components/Stack";
import Image from "next/image";
import ImageAndText from "../components/ImageAndText";
import InViewMonitor from "react-inview-monitor";

let list;
const Skills = () => {
  const bgcolor = "rgba(254, 48, 72, 0.8)";

  const chart_data_maker = () => {
    let return_array = [];
    let slug;
    let skill;

    for (var i = 0; i < chart_data.length; i++) {
      skill = chart_data[i];
      slug = skill.slug;
      // debugger;
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
            // backgroundColor: bgcolor,
            borderColor: bgcolor,
          },
        ],
      };
    }
    return return_array;
  };

  const return_array = chart_data_maker();

  const [skdata, setSkdata] = useState(return_array["Overall"]);

  const options = {
    responsive: true,
    fontSize: 40,
    backgroundColor: bgcolor,
    // backgroundColor:"#fff",
    pointBorderColor: "#fff",
    scale: {
      ticks: {
        showLabelBackdrop: true,
        //backdropColor: "#fef900",
        fontColor: "#ffffff",
        //backgroundColor: "#fef900",
        min: 0,
        max: 10,
        stepSize: 2,
      },
    },
    scales: {
      r: {
        // title: {
        // 	text: "red",
        // },
        beginAtZero: true,
        grid: {
          color: "##41bf50",
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
          // This more specific font property overrides the global property
          color: "#fef900",
          font: {
            size: 18,
            family: "Tomorrow, sans-serif",
          },
        },
      },
    },
  };
  list =
    typeof document !== `undefined`
      ? document.getElementsByTagName("button")
      : [];
  const handleClick = (chart_op, e) => {
    for (var i = 0; i < list.length; i++) {
      list[i].classList.remove("active", "Overall");
    }
    e.target.classList.add("active");
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
        <div className="wrapper-m">
          <div className="radar-right">
            {chart_data.map((skill) => (
              <Button
                className={`${skill.slug} `}
                onClick={(e) => {
                  handleClick(skill.slug, e);
                }}
                key={skill.slug}
              >
                {skill.slug}
              </Button>
            ))}
            <div className="radarholder">
              <Radar data={skdata} options={options} />
            </div>
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
          <Stack type="LNMP" />
          <Stack type="nodejs" />
          <Stack type="cloud" />
          <Stack type="wordpress" />
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
                <img src={`/images/cert/${cert.img}`}></img>
                <h4>{cert.name}</h4>
              </div>
            );
          })}
        </div>
      </section>

      <ImageAndText
        image={
          <Image
            src="/images/cloudpractitioner2.jpg"
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
          <Image
            src="/images/agile.jpeg"
            alt="agile"
            width={700}
            height={390}
          />
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
            src="/images/continuous-delivery.jpg"
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
