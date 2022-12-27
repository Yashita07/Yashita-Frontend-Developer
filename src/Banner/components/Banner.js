import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../../assets/img/header-img.svg";

export const Banner = () => {


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col align= 'center'>
            <span className="tagline">SpaceX</span>
           <p>
           SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.
            </p>

            {/* </div>}
            </TrackVisibility> */}
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};
