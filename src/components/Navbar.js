// import PropTypes from 'prop-types'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
    let location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="logo2.jpg" alt="Logo" className='mx-4' style={{
                        height: "29px",
                        width: "38px"
                    }} />NewsMedia</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/Business" ? "active" : ""}`} to="/Business">Business</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/Entertainment" ? "active" : ""}`} to="/Entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/General" ? "active" : ""}`} to="/General">General</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/Health" ? "active" : ""}`} to="/Health">Health</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/Science" ? "active" : ""}`} to="/Science">Science</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/Sports" ? "active" : ""}`} to="/Sports">Sports</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/Technology" ? "active" : ""}`} to="/Technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar