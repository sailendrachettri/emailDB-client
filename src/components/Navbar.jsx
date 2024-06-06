import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // VARIABLES
    const linkToThisProject = "https://github.com/sailendrachettri/emailDB-client";

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <span><i class="bi bi-boxes fs-4 pe-2"></i>emailDB</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`mailto:sailendra9083@gmail.com`}>Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex align-items-center">
                            <span>
                                <Link className="nav-link me-2 hover-btn" to="/adminlogin">Admin</Link>
                            </span>

                            <span className='d-flex'>
                                <Link className="nav-link" to={linkToThisProject}>Github</Link>
                                <i className="bi bi-github ps-2"></i>
                            </span>
                        </form>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar