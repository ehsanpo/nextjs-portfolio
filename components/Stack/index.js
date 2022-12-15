import React from "react";
import style from "./Stack.module.scss";
import stacks_data from "../../data/stacks-data";

const Stack = () => {
  return (
    <>
      {stacks_data.map((Xstack) => {
        return (
          <div className={style.stackholder}>
            <img alt={Xstack.slug} src={Xstack.icon} />
            <h3>{Xstack.slug}</h3>
            <div className={style.stacks}>
              <ul>
                {Xstack.labels.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Stack;
