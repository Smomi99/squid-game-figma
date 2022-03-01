import React from 'react';
import { Button, Col, Container, Form, FormControl, Modal, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import logo1 from '../../images/logo1.png'
import or from '../../images/or.png'
import austin from "../../images/austin.png"
import binance from "../../images/Binance-coin.png"
import dolar from "../../images/ssss.png"
import star from "../../images/Vector.png"
import music from "../../images/music.png"
import flag from "../../images/flag.png"
import user from "../../images/user.png"
import LoseModal from '../LoseModal/LoseModal';
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <LoseModal />
        </Modal>
    );
}

const Header = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='background1 back '>
            <div>
                <Navbar className='nav ' expand="lg">
                    <Container fluid className='ms-4'>
                        <Navbar.Brand href="/"><img src={logo1} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto ps-4 semi-nav my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link className='navbar-item' href="#action1"> <img src={austin} alt="" /><span className='text-white'> 0x71C...8976F</span></Nav.Link>
                                <Nav.Link className='navbar-item1' href="/binance"> <img src={binance} alt="" /><span className='text-white'> 1.2921 BNB</span></Nav.Link>
                                <Nav.Link className='navbar-item1' href="#action1"> <img src={dolar} alt="" /><span className='text-white'> 7,721 SQM $51,263</span></Nav.Link>
                                <Nav.Link className='navbar-item1' href="#action1"> <img src={star} alt="" /><span className='text-white'> Rank 23</span></Nav.Link>
                                <Nav.Link className='navbar-item1' href="#action1"><span className='text-white'> Score 2032</span></Nav.Link>

                            </Nav>
                            <Form className="d-flex gap-4">
                                <img style={{ height: '50px' }} src={music} alt="" />
                                <img style={{ height: '50px' }} src={flag} alt="" />
                                <img style={{ height: '50px' }} src={user} alt="" />
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>





            <div className='walletframe'>
                <p className='usdprice'>
                    <span className=''><img src="https://i.ibb.co/0yncGXb/dolar.png" alt="" /></span> 200,000 usd in prizes
                </p>
                <div className='semiwalletframe'>
                    <p className='leftright2 '>
                        The left right cames
                    </p>
                </div>

            </div>

            <Container className='hell '>
                <Row >
                    <Col>
                        <Button className='bigbtn2 ' onClick={() => setModalShow(true)}><span className='btnsize'>left</span></Button>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                    <Col>
                        <Button className='bigbtn2 ' onClick={() => setModalShow(true)}><span className='btnsize'>right</span></Button>
                    </Col>


                </Row>
                <img className='or' src={or} alt="" />
            </Container>

        </div>
    );
};

export default Header;