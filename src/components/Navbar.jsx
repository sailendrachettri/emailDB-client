import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SERVER_URI } from '../config';
import {UserContext} from '../UserContext';
import {toast} from 'react-hot-toast';

const Navbar = () => {
    // VARIABLES
    const linkToThisProject = "https://github.com/sailendrachettri/emailDB-client";
    const navigate = useNavigate();
    
    // context
    const { userInfo, setUserInfo } = useContext(UserContext);

    // methods
    useEffect(() => {
        (async () => {
            const response = await fetch(`${SERVER_URI}/api/auth/user/profile`, {
                credentials: 'include'
            });

            if (response.ok) {
                const userData = await response.json();
                setUserInfo(userData.userInfo);
            }

        })();

    }, [setUserInfo])

    const handleLogout = async()=>{
        const response = await fetch(`${SERVER_URI}/api/auth/user/logout`, {
            method: 'POST',
            credentials: 'include'
        });
        const data = await response.json();

        if(response.ok){
            toast.success(data.message);
            setUserInfo(null);
            navigate("/");

        } else{
            toast.error(data.message);
        }
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <span><i className="bi bi-boxes fs-4 pe-2"></i>emailDB</span>
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
                            {!userInfo?.username && <span>
                                <Link className="nav-link me-2 hover-btn" to="/adminlogin">Admin</Link>
                            </span>}

                            {
                                userInfo?.username && <span className='d-flex justify-content-center align-items-center'>
                                    <span>Welcome, <span className='fw-bold'> {userInfo?.username? userInfo?.username : "Guest"}</span></span>
                                    <Link className="nav-link me-2 hover-btn ps-2" to="/logout" onClick={handleLogout}>Logout</Link>
                                </span>
                            }

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