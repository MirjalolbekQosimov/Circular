import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div className="home" id='home'>
            <div className='two_back'>
                <div className='home__contain home__container'>
                    <div className='home__main-box'>
                        <div className='home__info'>
                            <h1>Personalized <br />
                                Recipes</h1>
                            <div className='home__p'>
                                <p className="home__aobut-text">
                                    Some short description should be here about the product. It can be super short, two or three rows of text should be enough.
                                </p>
                            </div>
                            <button className="home__btn">
                                Book Free Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='scroll__down'>
                <div></div>
                <p>scroll down</p>
            </div>
        </div>
    )
}
