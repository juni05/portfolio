import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/junaid.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            <span className="purple"> ABOUT </span>
            </h1>
            <p className="home-about-body">
              Self-driven, focused, and efficient with strong attention to detail. Able to troubleshoot and learn problems quickly. Looking to gain further experience in
              <i>
                <b className="purple"> Backend Development </b>
              </i>
              along with
              <i>
                <b className="purple"> Cloud Development </b>
              </i>
              and 
              <i>
                <b className="purple"> Mobile Application Development </b>
              </i>
              .
              <br />
              <br />
              {/* My field of Interest's are Managing and Optimizing &nbsp;
              <i>
                <b className="purple">RESTful API's </b> and
                also in areas related to{" "}
                <b className="purple">
                  Cloud Development and Mobile Application Development.
                </b>
              </i> */}
              <br />
              </p>
              <h2 style={{ fontSize: "2.6em" }}>
                <span className="purple"> SKILLS </span>
              </h2>
              <p>
              <br />
              <br />
              <i>
                <b className="purple">
                Node.js, 			
                Express.js,
                boto3,
                swagger.io,
                Redis,
                ZeroMQ,
                Flutter,
                Dart,
                Python,
                Django,
                Docker,
                Solidity,
                Blockchain,
                ERC721,
                AWS,
                React.js,
                SQL,
                MySQL,
                PostgreSQL,
                Oracle,
                Hosting,
                Deployment,
                C++,
                Data Structures,
                Algorithms,
                OOP.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/juni05"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/junii101"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/junaidejaz05/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
