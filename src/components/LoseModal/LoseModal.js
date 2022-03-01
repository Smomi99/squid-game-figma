import React from 'react';
import { Button } from 'react-bootstrap';
import './LoseModal.css'
import close from '../../images/close.png'
import lose from '../../images/losemodal.png'
import { Link } from 'react-router-dom';
const LoseModal = () => {
    return (
        <div className='losemodal border'>
            <div style={{ marginTop: '82px' }}>
                <img src={lose} alt="" />
                <h2 className='leader'>LOSE MODAL</h2>
                <p className='text-white'>lose you game</p>

                <Link to="/win"><Button>Play Again</Button></Link>
                <img className='close' src={close} alt="" />
            </div>
        </div>
    );
};

export default LoseModal;