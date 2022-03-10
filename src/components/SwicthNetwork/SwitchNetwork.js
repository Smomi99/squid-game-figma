import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import left1 from '../../images/left1.png'
import right1 from '../../images/right1.png';
import logo from '../../images/logo.png'
const SwitchNetwork = () => {
    return (
        <div className='background back '>
            <>

                <Link to="/"> <img className='logo' src={logo} alt="" /> </Link>\

            </>
            <div className='walletframe'>
                <p className='usdprice'>
                    <span className=''><img className='dolar' src="https://i.ibb.co/0yncGXb/dolar.png" alt="" /></span> 200,000 usd in prizes
                </p>
                <div className='semiwalletframe'>
                    <p className='leftright1 '>
                        iNCORRECT NETWORK                    </p>
                    <p className='startwallet1 '>To play Squid Moon games your wallet needs to be on Binance Smart Chain network </p>
                    <Link to="/leaderboard"><Button className='walletbtn mt-4 '><span className='p-2'> <img src="https://i.ibb.co/F03DRh4/mask.png" alt="" /> </span> <span className='walletbtn1'>Switch Network</span> </Button></Link>
                </div>

            </div>
            <img className='coin-img1' src={left1} alt="" />
            <img className='coin-img3' src={right1} alt="" />

        </div>
    );
};

export default SwitchNetwork;