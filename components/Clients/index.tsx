import React, { useState } from "react";
import Section from "@/components/Section";
import Heading from "../Heading";
import styles from "./Clients.module.css";

interface ClientsProps {
  clients: string[]; // Assuming clients is an array of strings
}

const Clients: React.FC<ClientsProps> = ({ clients }) => {
  return (
    <Section>
      <div>
        <Heading size="l" element="h2" padding="xl" center>
          Clients
        </Heading>

        <div className="wrapper Ohidden">
          <div className={styles.animateInfiniteSlider}>
            {clients.map((logo, index) => (
              <div className={styles.slide} key={index}>
                {logo}
              </div>
            ))}
            {clients.map((logo, index) => (
              <div className={styles.slide} key={index}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
