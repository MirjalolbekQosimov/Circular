import React from 'react'
import './Team.css'
import Human1 from '../img/member-image.png';
import Human2 from '../img/member-image2.png';
import Human3 from '../img/member-image3.png';


export default function Team() {
    return (
        <div className='team-conatiner' id='team'>
            <h1>A Team of Professionals</h1>
            <div className='team-images'>
                <div className='team-card'>
                    <div className='back-image'>
                        <img src={Human1} alt="" />
                    </div>
                    <div className='team-name'>
                        <h3>David Matthews</h3>
                        <p>Outpatient Gastrointestinal Dietitian</p>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='back-image'>
                        <img src={Human2} alt="" />
                    </div>
                    <div className='team-name'>
                        <h3>Kaley Simpson</h3>
                        <p>Fitness Dietitian</p>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='back-image'>
                        <img src={Human3} alt="" />
                    </div>
                    <div className='team-name'>
                        <h3>Elaine Richards</h3>
                        <p>Functional Dietitian</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
