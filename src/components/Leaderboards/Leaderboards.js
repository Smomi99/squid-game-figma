import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo1 from '../../images/logo1.png'
import austin from "../../images/austin.png"
import binance from "../../images/Binance-coin.png"
import dolar from "../../images/ssss.png"
import star from "../../images/Vector.png"
import music from "../../images/music.png"
import flag from "../../images/flag.png"
import user from "../../images/user.png"
import MainLeaderboard from '../MainLeaderboard/MainLeaderboard';


const Leaderboards = () => {
    return (
        <div>
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
                                    <Nav.Link className='navbar-item1' href="#action1"> <img src={binance} alt="" /><span className='text-white'> 1.2921 BNB</span></Nav.Link>
                                    <Nav.Link className='navbar-item1' href="#action1"> <img src={dolar} alt="" /><span className='text-white'> 7,721 SQM $51,263</span></Nav.Link>
                                    <Nav.Link className='navbar-item1' href="#action1"> <img src={star} alt="" /><span className='text-white'> Rank 23</span></Nav.Link>
                                    <Nav.Link className='navbar-item1' href="#action1"><span className='text-white'> Score 2032</span></Nav.Link>

                                </Nav>
                                <Form className="d-flex gap-4">
                                    <img src={music} alt="" />
                                    <img src={flag} alt="" />
                                    <img src={user} alt="" />
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>





                <div className='walletframe mb-4 mt-4'>
                    <p className='usdprice'>
                        <span className=''><img src="https://i.ibb.co/0yncGXb/dolar.png" alt="" /></span> 200,000 usd in prizes
                    </p>
                    <div className='semiwalletframe'>
                        <p className='leftright2 '>
                            The left right cames
                        </p>
                    </div>

                </div>
                <div className='bgrankup pt-4 pb-4 container  '>
                    <div className=' container bg-rank border-0 rounded-2 p-4'>
                        <p className='leftright text center p-2'>
                            WINNER ANNOUNCED                        </p>
                        <p className='text-info'>1932 players will devide prize of $200 000 based on their rank</p>

                    </div>
                </div>

            </div>

            <MainLeaderboard />
        </div>
    );
};

export default Leaderboards;