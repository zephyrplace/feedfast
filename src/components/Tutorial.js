import React from 'react'

const Tutorial = () => {
    return (
        <div>
            <hr />
            <h1 className="title">Choose a owner</h1>
            <h3 className="subtitle">Include the owner name on the URL</h3>
            <code>/feedfast/Microsoft</code>
            <hr />
            <h1 className="title">Choose a repository</h1>
            <h3 className="subtitle">Include the repository name on the URL</h3>
            <code>/feedfast/Microsoft/vscode</code>
            <hr />
            <h1 className="title">Choose a custom label</h1>
            <h3 className="subtitle">Include a custom label on the URL (optional, default = feedfast)</h3>
            <code>/feedfast/Microsoft/vscode/feature-request</code>
            <hr />
            <h1 className="title">See how it's easy! <i className="fas fa-rocket"></i></h1>

            <a href="/feedfast/Microsoft/vscode/feature-request">/feedfast/Microsoft/vscode/feature-request</a>
        </div>
    )
}

export default Tutorial