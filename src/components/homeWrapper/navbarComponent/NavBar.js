import React, { useContext, useState } from 'react'
import { Navbar, Container, Button, Image, Modal } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Images from '../../global/Images';
import SignIn from '../signinModal/SignIn';
import './navbar.css';
import { userContext } from '../../global/userContext';

const NavBar = () => {

    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const [userDropdown, setUserDropdown] = useState(false);

    const { user, setLogin } = useContext(userContext);

    const userData = JSON.parse(user.data === undefined ? '{"": ""}' : user.data);

    console.log("userData", userData)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout = () => {
        console.log("heyy")
        localStorage.clear();
        window.location.reload();
        navigate('/');
    }

    return (
        <>
            <Navbar className="navbar" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><Link to="/"><Image src={Images.festiveFauxLogo} width="220px" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end">
                        <Link to="/venues" className="nav-link">Venues</Link>
                        <Link to="/services" className="nav-link">Services</Link>
                        <Link to="/gallery" className="nav-link">Gallery</Link>
                        <Link to="/about" className="nav-link mr-5">About</Link>
                        {
                            user.isLogin ||
                            <>
                                <Button className="signupHandler">Register as Partner</Button>
                                <Button className='ml-3 signinHandler' onClick={handleShow} >Sign in</Button>
                            </>
                        }
                        {
                            user.isLogin &&
                            <>
                                <h6 className="username-dropbtn mt-2" onClick={() => setUserDropdown(!userDropdown)}><span className='fas fa-user-circle'></span> {userData.userName}</h6>
                                {
                                    userDropdown &&
                                    <>
                                        <div className="dropdownProfile">
                                            <p><span className='list-profile'><i className="fas fa-user-circle"></i> <span className='ml-2'>My Profile</span></span></p>
                                            <p className="mt-1"><span className='list-profile'><i className='fas fa-heart'></i> <span className='ml-2'>Wishlist</span></span></p>
                                            <p className="mt-1"><span className='list-profile'><i className='far fa-calendar-alt'></i> <span className='ml-2'>Calendar</span></span></p>
                                            <p className="mt-1"><span className='list-profile'><i className='fas fa-bell'></i> <span className='ml-2'>Notification</span></span></p>
                                            <p className="mt-1"><span className='list-profile' onClick={handleLogout()}><i className='fas fa-power-off'></i></span> <span className='ml-2'>Logout</span></p>
                                        </div>
                                    </>
                                }
                            </>
                        }

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Body>
                                <div>
                                    <span className='fas fa-times close-button' onClick={handleClose}></span>
                                </div>
                                <div className='text-center'>
                                    <span className='modal-title'>SignIn/SignUp</span>
                                </div>
                                <div>
                                    <SignIn />
                                </div>
                            </Modal.Body>
                        </Modal>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar