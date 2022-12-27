import React, { Component } from "react";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import { useState, useEffect } from "react";
import { Loading } from "../../Loader";

export const Capsules = () => {
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTitle, setSearchTitle] = useState("")

  useEffect(() => {
    const fetchCapsules = async () => {
      setLoading(true)
      const res = await fetch("https://api.spacexdata.com/v4/capsules");
      const data = await res.json();
      setCapsules(data);
      console.log(data, "-------data");
      setLoading(false);
    };
    fetchCapsules();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {!capsules ? (
        <Loading />
      ) : (
        <section className="Capsules" id="Capsules">
          <div></div>&nbsp;&nbsp;&nbsp;
          <div className="container">
            <div className="row">
              <div></div>&nbsp;&nbsp;&nbsp;
              <div className="col-12">
                <div></div>&nbsp;&nbsp;&nbsp;
                <div className="skill-bx wow zoomIn">
                  <h2>Capsules</h2>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider justify-content-center align-items-center"
                  >
                    {capsules.map(
                      ({
                        id,
                        type,
                        status,
                        serial,
                        launches,
                        last_update,
                        land_landings,
                        water_landings,
                        reuse_count,
                      }) => (
                        <article key={id} className="articles">
                          <h2 className="text-xl font-bold mb-5">
                            {type},{" "}
                            <span className="text-base opacity-75 font-light">
                              {serial}
                            </span>
                          </h2>
                          <ul>
                            <li className="mb-1">{launches.length} launches</li>
                            <li className="mb-1">
                              {land_landings} land landings
                            </li>
                            <li className="mb-1">
                              {water_landings} water landings
                            </li>
                            <li className="mb-1">Reused {reuse_count} times</li>
                            {status === "active" ? (
                              <li className="text-emerald-500">Active</li>
                            ) : (
                              <li className="text-rose-500">Retired</li>
                            )}
                          </ul>

                          <p className="mt-5 opacity-75">{last_update}</p>
                        </article>
                      )
                    )}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div></div>&nbsp;&nbsp;&nbsp;
          <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )}
    </>
  );
};
export default Capsules;
