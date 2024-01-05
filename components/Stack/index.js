import React from "react";
import style from "./Stack.module.scss";
import stacks_data from "../../data/stacks-data";
import Image from "next/image";

const Stack = () => {
  return (
    <>
      {stacks_data.map((Xstack) => {
        return (
          <div className={style.stackholder} key={Xstack.slug}>
            <Image alt={Xstack.slug} src={Xstack.icon} height={85} width={85} />
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
