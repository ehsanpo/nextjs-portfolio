/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Layout from "../components/layout";
import SeO from "../components/seo";
import SpotifyPlayer from "react-spotify-player";
import Fade from "@/ulti/animation";
// import { LazyIframe } from "react-lazy-media";

const NotFoundPage = () => {
  const size = {
    width: "100%",
    height: 152,
  };
  const sizeSingel = {
    width: "100%",
    height: 80,
  };

  return (
    <>
      <SeO title="Music Producent" />
      <div className="page-header ">
        <div className="wrapper">
          <h1 className="display">Music</h1>
        </div>
      </div>
      <section className="bg-color-3">
        <div className="wrapper">
          <div className="wrapper-m ">
            Welcome to my music page! Music has always been a part of my life
            and I am passionate about creating and sharing it with the world. To
            me, music is more than just a form of entertainment - it has the
            power to connect and heal us, to take us to another world and help
            us be the best versions of ourselves.
            <br />
            <br />
            As a professional music producer, I have had the opportunity to
            create songs for various companies and artists, and while my music
            may not always be at the top of the charts, it is always made with
            heart and soul.
            <br />
            <br />I hope you will take a moment to listen and enjoy the music
            that I have created. Thank you for visiting and I hope you find
            something that speaks to you.
          </div>
        </div>
      </section>
      <section className="no-bg">
        <Fade>
          <h2 className="title red">Albums</h2>
        </Fade>
        <div className="wrapper">
          <div>
            <h3>2020 - 2020</h3>
            <SpotifyPlayer
              uri="spotify:album:5PUExiuXHdh71FCOME9eVA"
              size={size}
              view="coverart"
              theme="black"
            />
          </div>
          <div>
            <h3>Future - 2020</h3>
            <SpotifyPlayer
              uri="spotify:album:0AxIzHIcCeyu8z6JqidQtX"
              size={size}
              view="list"
              theme="black"
            />
          </div>
        </div>

        <div className="wrapper">
          <div>
            <h3>Present - 2020</h3>
            <SpotifyPlayer
              uri="spotify:album:0e5MIP4vPxL2DtADJFD301"
              size={size}
              view="coverart"
              theme="black"
            />
          </div>
          <div>
            <h3>The Past - 2019</h3>
            <SpotifyPlayer
              uri="spotify:album:1ewlhbOoQAHakrgaEuXWry"
              size={size}
              view="list"
              theme="black"
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <h3>The Wind - 2019</h3>
            <SpotifyPlayer
              uri="spotify:album:5VIhDY0sy0rKd2z68T2yRD"
              size={size}
              view="coverart"
              theme="black"
            />
          </div>
          <div>
            <h3>Life Goes On - 2003</h3>
            <SpotifyPlayer
              uri="spotify:album:2nz5ZaS4XeSXO5D9jNP9cD"
              size={size}
              view="list"
              theme="black"
            />
          </div>
        </div>
      </section>
      <section>
        <Fade
          intoViewMargin="6%"
          classNameNotInView="vis-hidden"
          classNameInView="animated titleIn"
          toggleClassNameOnInView
        >
          <h2 className="title red">Singels & EP</h2>
        </Fade>
        <div className="wrapper">
          <div>
            <h3>Noor - 2022</h3>
            <SpotifyPlayer
              uri="spotify:album:7oGREogIXr9kBU6cVvTytF"
              size={sizeSingel}
              view="coverart"
              theme="black"
            />
          </div>
          <div></div>
        </div>
        <div className="wrapper">
          <div>
            <h3>Bellerina - 2022</h3>
            <SpotifyPlayer
              uri="spotify:album:2avKo7p73VQlQZuZ5AhdsX"
              size={sizeSingel}
              view="coverart"
              theme="black"
            />
          </div>
          <div>
            <h3>"20" - 2022</h3>
            <SpotifyPlayer
              uri="spotify:album:4VzPczlIoeB84Nn1HsuFq6"
              size={sizeSingel}
              view="list"
              theme="black"
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <h3>Divane - 2021</h3>
            <SpotifyPlayer
              uri="spotify:album:15gO287YrDb4sNHckk5wiJ"
              size={sizeSingel}
              view="coverart"
              theme="black"
            />
          </div>
          <div>
            <h3>Malmö Syndrome - 2021</h3>
            <SpotifyPlayer
              uri="spotify:album:1SVNdrRPEto1RXbmX9Oyy9"
              size={sizeSingel}
              view="list"
              theme="black"
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <h3>Infinity - 2021</h3>
            <SpotifyPlayer
              uri="spotify:album:04RmkiqoBN6VFU5XQvS0CE"
              size={sizeSingel}
              view="coverart"
              theme="black"
            />
          </div>
          <div>
            <h3>Spaced out - 2020</h3>
            <SpotifyPlayer
              uri="spotify:album:3i4AVKxg8Znjot9NlO6ie8"
              size={sizeSingel}
              view="list"
              theme="black"
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <h3>Fallen Angels - 2019</h3>
            <SpotifyPlayer
              uri="spotify:album:2nKd39bGTeA5MTq0z21c0I"
              size={sizeSingel}
              view="coverart"
              theme="black"
            />
          </div>
          <div>
            <h3>Getaway - 2019</h3>
            <SpotifyPlayer
              uri="spotify:album:5SuRJpmUEks2akEQx9qWAl"
              size={sizeSingel}
              view="list"
              theme="black"
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <h3>Hope - 2017</h3>
            <SpotifyPlayer
              uri="spotify:album:4etfZNUXJ0DljYEvpKIWxy"
              size={sizeSingel}
              view="coverart"
              theme="black"
            />
          </div>
          <div>
            <h3>The Demo - 2010</h3>
            <SpotifyPlayer
              uri="spotify:album:1aDI4c4U1vQQy9mXbUIiIN"
              size={sizeSingel}
              view="list"
              theme="black"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
