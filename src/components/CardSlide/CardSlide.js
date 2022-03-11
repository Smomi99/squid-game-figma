import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./CardSlide.css";
import maskgr from '../../images/maskgr.png'
import timeclock from '../../images/clock.png'
const CardSlide = () => {

  return (
    <div className="container mt-4 ">
      <h2 className="text-white mb-4"> Yours previous games </h2>
      <div >
        <Row xs={1} md={4} sm={3} lg={4} className="gx-0">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Col className="card-size">
              <Card >
                <Card.Body>
                  <div className="bgBet text-white p-2">
                    <h1 className="text-white betfont" >Bet: Even</h1>
                    <small className="text-white betfont1"> <img src={maskgr} alt="" /> 1 BNB -512 SQM</small>
                  </div>
                  <Card.Text className="text-white bg-result p-2">
                    <h6 className="text-white">Result</h6>
                    <small > <img src={timeclock} alt="" /> Pending</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <hr style={{ height: '7px', color: 'rgba(0, 150, 255, 0.46)', borderRadius: '90px' }} />
    </div>
  );
};

export default CardSlide;
