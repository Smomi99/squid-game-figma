import React from 'react';
import { Button } from 'react-bootstrap';
import close from '../../images/close.png'
import fail from '../../images/fail.png'

const Fail = () => {
    return (
        <div className='losemodal border'>
            <div style={{ marginTop: '82px' }}>
                <img src={fail} alt="" />
                <h2 className='leader'>LOSE MODAL</h2>
                <p className='text-white'>lose you game</p>

                <Button>Play Again</Button>
                <img className='close' src={close} alt="" />
            </div>
        </div>
    );
};

export default Fail;