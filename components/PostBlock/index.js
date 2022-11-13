import React from "react";
import Box from "../Box";
import Button from "../Button";

const Index = ({ data, onHome = false }) => {
  return (
    <section className="no-bg">
      <div className="wrapper">
        {data.map((node) => {
          return <Box key={node.data.id} node={node.data} image />;
        })}
      </div>
      {onHome && (
        <div className="center">
          <Button className="btn--3">See Portfolio</Button>
        </div>
      )}
    </section>
  );
};

export default Index;
