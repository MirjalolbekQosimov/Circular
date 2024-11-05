import React from 'react'
import Logo from '../img/circular-logo.png'
import './Header.css'
import { HiMiniBars2 } from "react-icons/hi2";

export default function Header() {
    return (
        <div className='header__container'>
            <div className='header'>
                <a href="#" className='header__logo'>
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                </a>
                <ul className='header__list'>
                    <li className='active__list'>
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
                <div className='header__flex'>
                    <button className='header__btn'>Contact us</button>
                    <HiMiniBars2 className='hide__bars' />
                </div>
            </div >
        </div>
    )
}
