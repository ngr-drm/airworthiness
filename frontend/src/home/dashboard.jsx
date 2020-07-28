import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import './dashboard.style.css'

export default () => {


    return (
        <div>

            <article className="article">
                <h3><strong>AWT</strong> Airworthiness</h3>
                <strong>A simple way to build a centralized history of information relevant to aviation companies.</strong>


                <p>AWT airworthiness is a system for recording information and storing documents linked to the National Civil Aviation Agency ANAC.</p>

            </article>

            <h1 className="welcome">WELCOME</h1>

            <div className="plane">
                <h1><FontAwesomeIcon icon={faPlane}></FontAwesomeIcon></h1>
            </div>

        </div>
    )
}