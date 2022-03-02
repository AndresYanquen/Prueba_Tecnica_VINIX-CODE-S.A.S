import React from 'react'
import style from './style.css'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <p>Go REST</p>
                    </div>
                    <div className='col-12 d-flex justify-content-end' id='author-class'> 
                        <p>
                        by Andrés Yanquén
                        </p> 
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header