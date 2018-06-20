import React from 'react'
import logo from '../assets/logotype.png'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" width="40%" style={{ minWidth: 270 }} />
            <hr />
            <h3 className="subtitle is-3">Open-source solution to receive feedback, start to understand what your users really need.</h3>
            <small>Feedback + Fast</small>
        </header>
    )
}

export default Header