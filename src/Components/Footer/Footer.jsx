import React from 'react'
import './Footer.css'
import Logo from '../img/circular-logo.png'
import { LuFacebook } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {
    return (
        <footer>
            <div className='footer-subscribe' id='subscribe'>
                <div className="footer-container">
                    <h1 className='subscribe-text'>
                        Start improving your life. <p>Subscribe now</p>
                    </h1>
                    <form className='subscribe-form'>
                        <input type="email" placeholder="Enter email address" className='subscribe-input' />
                        <button type="submit" className='subscribe-btn'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='footer'>
                <div className="footer-container2">
                    <div className='footer-main'>
                        <a href="#" className='footer-logo'>
                            <img src={Logo} alt="" />
                        </a>
                        <ul className='header__list'>
                            <li className='footer-list'>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#team">Team</a>
                            </li>
                            <li>
                                <a href="#recipes">Recipes</a>
                            </li>
                            <li>
                                <a href="#pricing">Pricing</a>
                            </li>
                            <li>
                                <a href="#subscribe">Subscribe</a>
                            </li>
                        </ul>
                        <div className='footer-social'>
                            <div>
                                <LuFacebook />
                            </div>
                            <div>
                                <FaTwitter />
                            </div>
                            <div>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                    <p className='copyright'>©Circular Copyright 2019. All rights reserved.</p></div>
            </div>
        </footer>
    )
}
