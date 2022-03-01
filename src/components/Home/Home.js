import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import left1 from '../../images/left1.png'
import right1 from '../../images/right1.png';
const Home = () => {
    return (
        <div className='background back '>
            <>

                <Link className='logo' to="/"></Link>\

            </>
            <div className='walletframe'>
                <p className='usdprice'>
                    <span className=''><img src="https://i.ibb.co/0yncGXb/dolar.png" alt="" /></span> 200,000 usd in prizes
                </p>
                <div className='semiwalletframe'>
                    <p className='leftright '>
                        The left right cames
                    </p>
                    <p className='startwallet semiwalletframe'>Start by connecting you wallet </p>
                    <Link to="/incorrectnetwork"><Button className='walletbtn mt-4 '> <img src="https://i.ibb.co/F03DRh4/mask.png" alt="" />  <span className='walletbtn1'>Connect Wallet</span> </Button></Link>
                    <Link to="/home" className='text-decoration-none'><h6 className='text-white mt-2 p-2'>CONNECT LATER</h6></Link>
                </div>

            </div>
            <img className='coin-img1' src={left1} alt="" />
            <img className='coin-img2' src={right1} alt="" />

        </div>
    );
};

export default Home;