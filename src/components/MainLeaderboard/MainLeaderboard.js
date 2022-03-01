import React from 'react';
import './MainLeaderBoard.css'
import middledown from '../../images/middledown.png'
import first from '../../images/1st.png'
import users from '../../images/user1.png'
import secondnd from '../../images/2nd.png'
import third from '../../images/3rd.png'
import upleft from '../../images/upleft.png'
import downleft from '../../images/downleft.png'
import downright from '../../images/downright.png'
import topright from '../../images/topright.png'
import arrow from '../../images/arrow.png'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MainLeaderboard = () => {
    return (
        <div className='container'>
            <div className=' container bgLeader mt-4'>

                <Table className='text-white m-4 table1' >

                    <tbody >
                        <tr>
                            <td><img src={first} alt="" class="avatar" /></td>
                            <td><img src={users} alt="" class="avatar1" /></td>
                            <td><h3>Plyer Name</h3></td>
                            <td><h3>10293</h3></td>
                        </tr>
                        <tr>
                            <td><img src={secondnd} alt="" class="avatar" /></td>
                            <td><img src={users} alt="" class="avatar1" /></td>
                            <td><h3>Plyer Name</h3></td>
                            <td><h3>9786</h3></td>
                        </tr>
                        <tr>
                            <td><img src={third} alt="" class="avatar" /></td>
                            <td><img src={users} alt="" class="avatar1" /></td>
                            <td><h3>Plyer Name</h3></td>
                            <td><h3>6954</h3></td>
                        </tr>
                        <tr>
                            <td> <h2 className='ps-4'>4</h2></td>
                            <td><img src={users} alt="" class="avatar1" /></td>
                            <td><h3>Plyer Name</h3></td>
                            <td><h3>5325</h3></td>
                        </tr>


                    </tbody>
                </Table>
                <div className='leader1'>
                    <h1 className='leader p-2 m-2'>
                        leaderboard
                    </h1>
                </div>
                <div className='leader2'>
                    <img className='middledown img-fluid' src={middledown} alt="" />
                    <img className='downleft img-fluid' src={downleft} alt="" />
                    <img className='upleft img-fluid' src={upleft} alt="" />
                    <img className='topright img-fluid' src={topright} alt="" />
                    <img className='downright img-fluid' src={downright} alt="" />
                    im
                </div>

            </div>

            <Link to="leaderboards " className='text-decoration-none'>
                <h2 className='seefull text-center mt-4'>See Full LeaderBoard <img src={arrow} alt="" /></h2>

            </Link>
        </div>
    );
};

export default MainLeaderboard;