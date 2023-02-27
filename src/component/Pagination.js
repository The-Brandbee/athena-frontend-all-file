import React, { Component } from "react";
import { Link } from "react-router-dom";



class Pagination extends React.Component {
    render() {
        return (
            <>
                <div className="bread-crma-last-frame">
                    <ul>
                        <li className="active">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </>
        );
    }
}
export default Pagination;
