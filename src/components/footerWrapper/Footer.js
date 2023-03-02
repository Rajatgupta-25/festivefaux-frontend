import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './footer.css'

const Footer = () => {
    return (
        <>
            <Container fluid className='footer mt-5'>
                <Row>
                    <Col>
                        <Container className='mt-4 mb-5'>
                            <Row>
                                <Col md={5} className="text-white">
                                    <p className='footer-heading'>Help</p>
                                    <div>
                                        <p className='footer-content'>Contact Us</p>
                                    </div>
                                </Col>
                                <Col md={5} className="text-white">
                                    <p className='footer-heading'>Company</p>
                                    <div className='footer-content'>
                                        <p>About Us</p>
                                        <p>Blogs</p>
                                        <p>Policy and terms of use</p>
                                        <p>Cookie Policy</p>
                                    </div>
                                </Col>
                                <Col md={2} className='text-white'>
                                    <p className='footer-heading'>Social</p>
                                    <div className='footer-content'>
                                        <p>Instagram</p>
                                        <p>Facebook</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer