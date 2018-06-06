import React from 'react'

const Tutorial = () => {
    return (
        <div>
            <hr />
            <h1 className="title">Use our #</h1>
            <h3 className="subtitle">Include the # in the URL, necessary for static website</h3>
            <code>/feedfast/#/</code>
            <hr />
            <h1 className="title">Choose a owner</h1>
            <h3 className="subtitle">Include the owner name in the URL</h3>
            <code>/feedfast/#/Microsoft</code>
            <hr />
            <h1 className="title">Choose a repository</h1>
            <h3 className="subtitle">Include the repository name in the URL</h3>
            <code>/feedfast/#/Microsoft/vscode</code>
            <hr />
            <h1 className="title">Choose a custom label</h1>
            <h3 className="subtitle">Include a custom label in the URL (optional, default = feedfast)</h3>
            <code>/feedfast/#/Microsoft/vscode/feature-request</code>
            <hr />
            <h1 className="title">See how it's easy! <i className="fas fa-rocket"></i></h1>
            <h3 className="subtitle">Click in the link below and refresh the page</h3>
            <a href="/feedfast/#/Microsoft/vscode/feature-request">/feedfast/#/Microsoft/vscode/feature-request</a>
        </div>
    )
}

export default Tutorial