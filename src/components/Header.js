import React from 'react'
import store from 'store'

const Header = () => {
    const handleUser = () => {
        store.remove('token')
    }

    return (
        <header>
            <h1 className="title is-1">feedfast #</h1>
            <h3 className="subtitle is-3">Open-source solution to receive feedback, start to understand what your users really need.</h3>
            <small>Feedback + Fast</small>
            <br />
            <a onClick={handleUser}>{store.get('token') && 'Logout'}</a>
        </header>

    )
}

export default Header