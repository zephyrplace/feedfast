import React from 'react'

import arrow from './arrow-start-here.png';

const EmptyIssues = (props) => {
    return (
        <div className="columns is-vcentered">
            <div className="column">
                <p>Oh no! It's looks like there is no issues with the selected label, suggest a new feature or send a feedback with <code>{props.label}</code> label and be the first one!</p>
            </div>
            <div className="column is-narrow is-hidden-mobile">
                <img src={arrow} alt="start here arrow indicates a button to create a new" className="" />
            </div>
        </div>
    )
}

export default EmptyIssues