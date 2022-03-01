import React from 'react';
import rankboard from '../../images/rankboard.png';
const RankPay = () => {
    return (
        <div className='bgrankup pt-4 pb-4 container  '>
            <div className=' container bg-rank border-0 rounded-2 p-4'>
                <p className='usdprice text center p-2'>
                    200,000 usd in prizes
                </p>
                <p className='text-info'>The top 8% on the leaderboard will receive a prize</p>

            </div>
            <img className='rankboard pb-4' src={rankboard} alt="" />
        </div>
    );
};

export default RankPay;