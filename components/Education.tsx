import React from "react";
import educationData from "@/data/educationData.js";
import Heading from "./Heading";

const Education = () => (
  <div>
    <Heading element="h2" size="l" className="md:w-2/5">
      Education
    </Heading>
    <ul className="timeline">
      {educationData.map((item, index) => (
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
export default Education;
