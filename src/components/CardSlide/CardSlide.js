import React from 'react';
import { Card } from 'react-bootstrap';
import Slider from "react-slick";
import './CardSlide.css'
const CardSlide = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='container mt-4'>
            <h2 className='text-white mb-4'> Yours previous games </h2>
            <Slider {...settings}>

                <div className='card-size '>
                    <div style={{ width: '90%' }}>
                        <div className='bgBet p-1'>
                            <h3 className='text-white'>Bet: Evan</h3>
                            <small className='text-white'>1 BNB -512 SQM</small>
                        </div>
                        <div className='bg-result p-2'>
                            <h5 className='text-white'>Result</h5>
                            <small className='text-white'>Pending</small>
                        </div>
                    </div>
                </div>
                <div className='card-size'>
                    <div style={{ width: '90%' }}>
                        <div className='bgBet p-1'>
                            <h3 className='text-white'>Bet: Evan</h3>
                            <small className='text-white'>1 BNB -512 SQM</small>
                        </div>
                        <div className='bg-result p-2 mb-4'>
                            <h5 className='text-white'>Result</h5>
                            <small className='text-white'>Pending</small>
                        </div>
                        <div>
                            .
                        </div>
                    </div>
                </div>
                <div className='card-size '>
                    <div style={{ width: '90%' }}>
                        <div className='bgBet p-1'>
                            <h3 className='text-white'>Bet: Evan</h3>
                            <small className='text-white'>1 BNB -512 SQM</small>
                        </div>
                        <div className='bg-result p-2'>
                            <h5 className='text-white'>Result</h5>
                            <small className='text-white'>Pending</small>
                        </div>
                    </div>
                </div>
                <div className='card-size '>
                    <div style={{ width: '90%' }}>
                        <div className='bgBet p-1'>
                            <h3 className='text-white'>Bet: Evan</h3>
                            <small className='text-white'>1 BNB -512 SQM</small>
                        </div>
                        <div className='bg-result p-2'>
                            <h5 className='text-white'>Result</h5>
                            <small className='text-white'>Pending</small>
                        </div>
                    </div>
                </div>
                <div className='card-size '>
                    <div style={{ width: '90%' }}>
                        <div className='bgBet p-1'>
                            <h3 className='text-white'>Bet: Evan</h3>
                            <small className='text-white'>1 BNB -512 SQM</small>
                        </div>
                        <div className='bg-result p-2'>
                            <h5 className='text-white'>Result</h5>
                            <small className='text-white'>Pending</small>
                        </div>
                    </div>
                </div>
                <div className='card-size '>
                    <div style={{ width: '90%' }}>
                        <div className='bgBet p-1'>
                            <h3 className='text-white'>Bet: Evan</h3>
                            <small className='text-white'>1 BNB -512 SQM</small>
                        </div>
                        <div className='bg-result p-2'>
                            <h5 className='text-white'>Result</h5>
                            <small className='text-white'>Pending</small>
                        </div>
                    </div>
                </div>
                <div className='card-size '>
                    <div style={{ width: '90%' }}>
                        <div className='bgBet p-1'>
                            <h3 className='text-white'>Bet: Evan</h3>
                            <small className='text-white'>1 BNB -512 SQM</small>
                        </div>
                        <div className='bg-result p-2'>
                            <h5 className='text-white'>Result</h5>
                            <small className='text-white'>Pending</small>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default CardSlide;