import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./BnbAmount.css";
import enable from "../../images/enable.png";
import binance from "../../images/mask.svg";
import starsvg from "../../images/Vector.svg";
import dolarsvg from "../../images/dolar.svg";
import sign from "../../images/sign.png";
import { Link } from "react-router-dom";
const BnbAmount = () => {
  return (
    <div className="bnb-background">
      <Container>
        <Row className="bnbAm">
          <Col sm={12} lg={3} md={3}>
            {" "}
            <h2 className="text-info">Select BNB Amount</h2>
          </Col>
          <Col sm={12} lg={6} md={6} className="mb-4 mt-4">
            <Col className=" sqm row">
              <Col sm={12} md={12} lg={4} className="mt-2">
                <Button className="bnb2">
                  <div className="d-flex justify-content-start align-items-center ">
                    {" "}
                    <img src={binance} alt="" />{" "}
                    <span
                      className="text-white"
                      style={{ fontWeight: "600", fontSize: "24px" }}
                    >
                      1BNB
                    </span>
                  </div>
                  <div>
                    <img src={starsvg} alt="" />{" "}
                    <span className="text-white">+100</span>{" "}
                    <img src={dolarsvg} alt="" />{" "}
                    <span className="text-white">+$600 SQM</span>
                  </div>
                </Button>

                {/* <img className="sign" src={sign} alt="" /> */}
              </Col >
              <Col sm={12} md={12} lg={4} className="mt-2">
                <Button className="bnb2">
                  <div className="d-flex justify-content-start align-items-center ">
                    {" "}
                    <img src={binance} alt="" />{" "}
                    <span
                      className="text-white"
                      style={{ fontWeight: "600", fontSize: "24px" }}
                    >
                      1BNB
                    </span>
                  </div>
                  <div>
                    <img src={starsvg} alt="" />{" "}
                    <span className="text-white">+100</span>{" "}
                    <img src={dolarsvg} alt="" />{" "}
                    <span className="text-white">+$600 SQM</span>
                  </div>
                </Button>

                {/* <img className="sign" src={sign} alt="" /> */}
              </Col>
              <Col sm={12} md={12} lg={4} className="mt-2">
                <Button className="bnb2">
                  <div className="d-flex justify-content-start align-items-center ">
                    {" "}
                    <img src={binance} alt="" />{" "}
                    <span
                      className="text-white"
                      style={{ fontWeight: "600", fontSize: "24px" }}
                    >
                      1BNB
                    </span>
                  </div>
                  <div>
                    <img src={starsvg} alt="" />{" "}
                    <span className="text-white">+100</span>{" "}
                    <img src={dolarsvg} alt="" />{" "}
                    <span className="text-white">+$600 SQM</span>
                  </div>
                </Button>

                {/* <img className="sign" src={sign} alt="" /> */}
              </Col>
            </Col>
          </Col>
          <Col sm={12} lg={3} md={3}>
            <img src={enable} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BnbAmount;
