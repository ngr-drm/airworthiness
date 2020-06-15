import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons'

export default () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <FontAwesomeIcon icon={faPlane} ></FontAwesomeIcon><h5><strong>AWT</strong> Airworthiness</h5>
            </nav>
        </>
    )
}