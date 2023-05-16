import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg main">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="/">Destinations</a>
                            <a className="nav-link" href="/">Speciality Tours</a>
                            <a className="nav-link" href="/">Customized Holidays</a>
                            <a className="nav-link" href="/">Corporate Travel</a>
                            <a className="nav-link" href="/">Forex</a>
                            <a className="nav-link" href="/">Inbound</a>
                            <a className="nav-link" href="/">Contact Us</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
