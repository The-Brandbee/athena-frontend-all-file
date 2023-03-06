import React, { Component } from "react";
import { Link } from "react-router-dom";
import SliderIconNM from '../../img/slider--icon.png';


class SliderTwo extends React.Component {

    render() {
        return (
            <>
                <div className='second-banner-changehover-right-img-inner Two'>
                    <img src={SliderIconNM} alt="" />
                    <div className='second-banner-changehover-right-img-cont'>
                        <h4>Ashish Mittal2</h4>
                        <p>University of Oxford, Batch of 24</p>
                    </div>
                </div>
            </>

        );
    }
}

export default SliderTwo;