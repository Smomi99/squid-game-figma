import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BnbAmount.css';
import enable from '../../images/enable.png';
import binance from '../../images/mask.svg';
import starsvg from '../../images/Vector.svg';
import dolarsvg from '../../images/dolar.svg';
import sign from '../../images/sign.png';
import { Link } from 'react-router-dom';
const BnbAmount = () => {
    return (
        <div className='bnb-background'>
            <Container>
                <Row className="bnbAm">
                    <Col> <h2 className='text-info'>Select BNB Amount</h2></Col>
                    <Col xs={6} className='mb-4 mt-4'>
                        <Col className='gap-4 row'>
                            <Col className='bnb1'>
                                <div className='d-flex justify-content-start align-items-center '><Link className='text-decoration-none' to="/transaction"> <img src={binance} alt="" /> <h3 className='text-white'>1 BNB</h3></Link></div>
                                <div>
                                    <img src={starsvg} alt="" /> <span className='text-white'>+100</span> <img src={dolarsvg} alt="" /> <span className='text-white'>+$600 SQM</span>
                                </div>
                                <img className='sign' src={sign} alt="" />
                            </Col>
                            <Col className='bnb2'>
                                <div className='d-flex justify-content-start align-items-center '> <img src={binance} alt="" /> <h3 className='text-info'>2 BNB</h3></div>
                                <div>
                                    <img className='text-info' style={{ fill: 'blue' }} src={starsvg} alt="" /> <span className='text-white'>+100</span> <img src={dolarsvg} alt="" /> <span className='text-white'>+$600 SQM</span>
                                </div>
                            </Col>
                            <Col className='bnb2'>
                                <div className='d-flex justify-content-start align-items-center '> <img src={binance} alt="" /> <h3 className='text-info'>3 BNB</h3></div>
                                <div>
                                    <img className='change-my-color' src={starsvg} alt="" /> <span className='text-white'>+100</span> <img src={dolarsvg} alt="" /> <span className='text-white'>+$600 SQM</span>
                                </div>
                            </Col>


                        </Col>
                    </Col>
                    <Col>
                        <img src={enable} alt="" /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default BnbAmount;