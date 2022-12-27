import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../Loader";

export const Launches = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const fetchLaunches = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/launches");
      const data = await res.json();
      setLaunches(data);
      console.log(data, "-------dataLaunches");
    }; //success : false
    fetchLaunches();
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
    <div>
      {!launches ? (
        <Loading />
       ) : (
        <section className="Launches" id="Launches">
          <div></div>&nbsp;&nbsp;&nbsp;
          <div className="container">
            <div className="row">
              <div></div>&nbsp;&nbsp;&nbsp;
              <div className="col-12">
                <div></div>&nbsp;&nbsp;&nbsp;
                <div className="skill-bx wow zoomIn">
                  <h2>Launches</h2>
                  <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider justify-content-center align-items-center">
                    {launches.map(({ id, name, links, details }) => (
                      <div>
                      <div
                        to={`/launches/${id}`}
                        key={id}
                        className="p-5 bg-zinc-900"
                      >
                        {links.patch.large ? (
                          <img src={links.patch.large} width={5} height={5} alt={name} />
                        ) : (
                          <img
                            width={5} 
                            height={5}
                            src="https://images2.imgbox.com/40/e3/GypSkayF_o.png"
                            alt=""
                          />
                        )}
                        <h2>
                          {name}
                        </h2>
                        {details && (
                          <p className="text-white opacity-75">{`${details.substring(
                            0,
                            50
                          )}...`}</p>
                        )}
                      </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div></div>&nbsp;&nbsp;&nbsp;
          <img className="background-image-left" src={colorSharp} width={5} height={5} alt="Image" />
        </section>
      )}
    </div>
  );
};
