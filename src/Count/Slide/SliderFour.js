import React, { Component } from "react";
import { Link } from "react-router-dom";
import SliderIconNM from '../../img/slider--icon.png';


class SliderFour extends React.Component {

    render() {
        return (
            <>
                <div className='second-banner-changehover-right-img-inner Four'>
                    <img src={SliderIconNM} alt="" />
                    <div className='second-banner-changehover-right-img-cont'>
                        <h4>Ashish Mittal 4</h4>
                        <p>University of Oxford, Batch of 24</p>
                    </div>
                </div>
            </>

        );
    }
}

export default SliderFour;