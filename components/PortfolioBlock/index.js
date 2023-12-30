import React from "react";
import Fade from "@/ulti/animation";
import Box from "../Box";
import Card from "@/components/Card/Card";
import Button from "../Button";
import Grid from "@/components/Grid";

const currentYear = new Date().getFullYear();

const Index = ({ data, onHome = false }) => {
  return (
    <section className={`${!onHome && "no-bg"}`}>
      {onHome && (
        <>
          <Fade>
            <h2 className="title blue">Selceted Works</h2>
          </Fade>
        </>
      )}

      <div className="wrapper">
        <Grid columns={3}>
          {data.map((item) => {
            return (
              <Card
                key={item.slug}
                title={item.data.title}
                desc={item.data.tagline}
                img={{
                  src:
                    "/images/" +
                    item.data.fileName +
                    "/" +
                    item.data.background_image[0],
                  alt: item.data.title,
                }}
                aspectRatio
                tags={item.data.tag}
                new={item.data.port_date[0] === currentYear.toString()}
                link={item.data.permalink}
              />
            );
          })}
        </Grid>
      </div>
      {onHome && (
        <div className="center">
          <Button type="link" to="/portfolio" className="btn--3">
            See Portfolio
          </Button>
        </div>
      )}
    </section>
  );
};

export default Index;
