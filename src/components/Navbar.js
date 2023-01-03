// import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/NewsMonkey/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/NewsMonkey/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/NewsMonkey/Business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/NewsMonkey/Entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/NewsMonkey/General">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/NewsMonkey/Health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/NewsMonkey/Science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/NewsMonkey/Sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/NewsMonkey/Technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar