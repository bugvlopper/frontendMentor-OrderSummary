import React from "react";
import iconMusic from "../images/icon-music.svg";
import illustration from "../images/illustration-hero.svg";
import "../css/Card.css";

class Card extends React.Component {

    render() { 
        return (
            <div>
                <div id="card">
                    <img className="mainImg" src={illustration} alt="illustration" />
                    <div className="info">
                        <h2>Order Summary</h2>
                        <p className="capsule ">You can now listen to millions of songs, audiobooks, and productions on any device anywhere you like!</p>
                        <div id="price">
                            <img src={iconMusic} alt="" />
                            <div className="subInfo">
                                <p className="sellTitle">Annual Plan</p>
                                <p>$59.99/year</p>
                            </div>
                            <a href="/">Change</a>
                        </div>
                        <a  className="button" href="/">Proceed to Payment</a>
                        <a  className="cancel" href="/">Cancel Order</a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Card;