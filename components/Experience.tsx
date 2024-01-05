import React from "react";
import experienceData from "@/data/experienceData";

import Heading from "./Heading";
import { Fade } from "react-awesome-reveal";

const Experience = () => (
  <div>
    <Heading element="h2" size="l" className="md:w-2/5">
      Education
    </Heading>
    <ul className="timeline">
      {experienceData.map((item, index) => (
        <li key={index}>
          <div className="timelineUnit">
            <h4>
              {item.title}
              <span className="timelineDate">{item.date}</span>
            </h4>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
export default Experience;
