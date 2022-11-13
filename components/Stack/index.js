import React from "react";
import style from "./Stack.module.scss";

const Stack = ({ type = "nodejs" }) => {
  const types = {
    LNMP: {
      headline: "LNMP",
      tools: ["Linux", "Nginx", "Mysql", "PHP"],
      icon: "/servers.svg",
    },
    nodejs: {
      headline: "Node.js",
      tools: ["React", "Gastby", "Webpack", "MongoDb"],
      icon: "/nodejs.svg",
    },
    cloud: {
      headline: "Cloud",
      tools: ["AWS API Gateway", "AWS Dynamo DB", "Lambda", "Node.js"],
      icon: "/cs.svg",
    },
    wordpress: {
      headline: "Wordpres",
      tools: ["Blockpress Theme", "Content Blocks", "Sass", "Webpack"],
      icon: "/wordpress.svg",
    },
  };
  let toRender = types[type];

  return (
    <div className={style.stackholder}>
      <img alt={toRender.headline} src={toRender.icon} />
      <h3>{toRender.headline}</h3>
      <div  className={style.stacks} >
        <ul>
          {toRender.tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stack;
