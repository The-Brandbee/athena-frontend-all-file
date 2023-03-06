import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentOne from './img/student-1.png';
import StudentTwo from './img/student-2.png';
import StudentThree from './img/student-3.png';
import StudentFour from './img/student-4.png';
import SliderOne from './Count/Slide/SliderOne.js';
import SliderTwo from './Count/Slide/SliderTwo.js';
import SliderThree from './Count/Slide/SliderThree.js';
import SliderFour from './Count/Slide/SliderFour.js';

class SliderRight extends React.Component {

    render() {
        return (
            <div>
                <div className='second-banner-changehover-right-img'>
                    <div className='student-list-banner'>
                        <ul>
                            <li><a href="#"><img src={StudentOne} alt="" /> </a></li>
                            <li><a href="#"> <img src={StudentTwo} alt="" /> </a></li>
                            <li><a href="#"> <img src={StudentThree} alt="" /> </a></li>
                            <li><a href="#"> <img src={StudentFour} alt="" /> </a></li>
                        </ul>
                    </div>
                    <div className="">
                        <SliderOne />
                        <SliderTwo />
                        <SliderThree />
                        <SliderFour />
                    </div>
                </div>


            </div>

        );
    }
}

export default SliderRight;