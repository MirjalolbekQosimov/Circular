import React from 'react'
import './Prices.css'
import Separator from '../img/separator.png'
import { FaCheck } from "react-icons/fa";
import FoodImage from '../img/food.png';

export default function Prices() {
    return (
        <div className='prices' id='pricing'>
            <h1 className='prices-heading'>Affordable Prices</h1>
            <div className='prices-cards'>
                <div className="prices-card">
                    <div className='monthly-recipes'>
                        <h3>3</h3>
                        <p>Monthly Recipes</p>
                    </div>
                    <img src={Separator} alt="" />
                    <div className='price'>
                        <span className='dollar'>$</span>
                        <p className='price-cena'>99</p>
                        <p className='motnth-text'>/ Per Month</p>
                    </div>
                    <div className="prices-info">
                        <p>
                            <FaCheck className='check-icon' />
                            Get tasty, healthy and unique recipes every month
                        </p>
                        <p>
                            <FaCheck className='check-icon' />
                            Weekly sessions with our nutritionists
                        </p>
                        <p>
                            <FaCheck className='check-icon' />
                            Advanced nutrion plans
                        </p>
                        <p>
                            <FaCheck className='check-icon' />
                            Paperback nutrition book
                        </p>
                    </div>
                    <button className='prices-btn'>
                        Get Started Now
                    </button>
                </div>
                <div className='prices-card plan-card'>
                    <img src={FoodImage} alt="" />
                    <h4 className='plan-text'>Are you looking for a customized plan?</h4>
                    <div className='contact-info'>
                        <div>
                            <p>Phone Number</p>
                            <p className='phone-number'>1-820-9320323</p>
                        </div>
                        <div>
                            <p>Email Address</p>
                            <p className='email-address'>hello@circular.com</p>
                        </div>
                    </div>
                    <p className='request-text'>Request a Quote</p>
                </div>
            </div>
        </div>
    )
}
