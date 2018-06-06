import React from 'react'

const Tutorial = () => {
    return (
        <div>
            <hr />
            <h1 className="title">Choose a owner</h1>
            <h3 className="subtitle">Include the owner name on the URL</h3>
            <code>/Microsoft</code>
            <hr />
            <h1 className="title">Choose a repository</h1>
            <h3 className="subtitle">Include the repository name on the URL</h3>
            <code>/Microsoft/vscode</code>
            <hr />
            <h1 className="title">Choose a custom label</h1>
            <h3 className="subtitle">Include a custom label on the URL (optional, default = feedfast)</h3>
            <code>/Microsoft/vscode/feature-request</code>
            <hr />
            <h1 className="title">Check the result</h1>
            <a href="/Microsoft/vscode/feature-request">/Microsoft/vscode/feature-request</a>
        </div>
    )
}

export default Tutorial