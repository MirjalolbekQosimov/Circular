import React from 'react'
import './Recipes.css'

export default function Recipes() {
    return (
        <div className='recipes' id='recipes'>
            <div className="food-back">
                <div className='recipes-container'>
                    <h1 className='recipes-heading'>Popular Recipes</h1>
                    <span className='recipes-small-text'>recommended for losing weight</span>
                    <p className='recipes-information'>Scrambled eggs with humus, focaccia and garlic.</p>
                    <div className='recipes-benofet'>
                        <div className="benifet">
                            <h3>993</h3>
                            <p>Calories (kcal)</p>
                        </div>
                        <div className="benifet">
                            <h3>20.50</h3>
                            <p>Protein (g)</p>
                        </div>
                        <div className="benifet">
                            <h3>18.50</h3>
                            <p>Carbs (g)</p>
                        </div>
                        <div className="benifet">
                            <h3>8.60</h3>
                            <p>Fat (g)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
