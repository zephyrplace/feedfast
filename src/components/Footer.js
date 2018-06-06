import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p>Powered by</p>
                    <p><a href="https://zephyrplace.com/">
                        <img src="https://zephyrplace.com/assets/zp-logo.svg" alt="Powered by Zephyr Place" width="128" height="24" />
                    </a></p>
                    <a href="https://bulma.io">
                        <img src="https://bulma.io/images/made-with-bulma--semiblack.png" alt="Made with Bulma" width="128" height="24" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer