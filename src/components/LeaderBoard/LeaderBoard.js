import React from 'react';

import BnbAmount from '../BnbAmount/BnbAmount';
import CardSlide from '../CardSlide/CardSlide';
import RankPay from '../RankPay/RankPay';
import MainLeaderboard from '../MainLeaderboard/MainLeaderboard';
import Header from '../Header/Header';
const LeaderBoard = () => {
    return (
        <div>
            <Header />

            <BnbAmount></BnbAmount>
            <CardSlide></CardSlide>
            <RankPay />
            <MainLeaderboard />
        </div>
    );
};

export default LeaderBoard;