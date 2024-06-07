import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const reportBug = "mailto:sailendra9083@gmail.com";
    const portfolioLink = "https:sailendra.onrender.com";
    return (
        <>
            <div className='d-flex justify-content-center text-center mt-5'>
                <div className='d-flex justify-content-center flex-column text-muted'>
                    <p><Link to={reportBug} className='text-decoration-none text-muted fw-bold'>Report a Bug <i className="bi bi-bug-fill ps-1"></i></Link></p>
                    <p>Developed by <Link to={portfolioLink} className='text-decoration-none text-muted fw-bold'>Sailendra </Link>Chettri </p>
                </div>
            </div>
        </>
    )
}

export default Footer