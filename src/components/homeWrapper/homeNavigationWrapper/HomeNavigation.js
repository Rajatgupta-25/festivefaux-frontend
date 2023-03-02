import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GalleryComponent from '../galleryComponent/GalleryComponent';
import './homeNavigation.css'

const HomeNavigation = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <>
            <Container fluid className="home-heading">
                <Row>
                    <Col className="text-center mt-4 headingNavigate">
                        <p>Your One-Stop Destination<br /> for Venue, Invitations and Gifts!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container className="search-container">
                            <Form>
                                <Row>
                                    <Col xs={2}>
                                        <Form.Group controlId="form.ControlCategory">
                                            <Form.Control
                                                className="input"
                                                name="category"
                                                as="select"
                                            >
                                                <option value="">All</option>
                                                <option value="Venues">Venues</option>
                                                <option value="Invitation Card">Invitation Card</option>
                                                <option value="Entertainment">Entertainment</option>
                                                <option value="Catering">Catering</option>
                                                <option value="Gifts">Gifts</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={9} className="pr-0">
                                        <Form.Group className="input-search" controlId="form.ControlInput">
                                            <Form.Control className='input' type="text" placeholder="Search Venues, Gifts, Invitaion..." />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={1} className="search-button">
                                        <Button className="fas fa-search icon"></Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-3 mb-5'>
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col md={3} className='home-box home-box-venues'>
                                    <span className='fas fa-hotel'></span>
                                    <p>Venues</p>
                                </Col>
                                <Col md={3} className='home-box home-box-invitation-card'>
                                    <span className="fas fa-archive"></span>
                                    <p>Invitation<br /> Card</p>
                                </Col>
                                <Col md={3} className='home-box home-box-entertainment'>
                                    <span className='fas fa-guitar' ></span>
                                    <p>Entertainment</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2} />
                                <Col md={3} className='home-box home-box-catering'>
                                    <span className='fas fa-hamburger'></span>
                                    <p>Catering</p>
                                </Col>
                                <Col md={3} className='home-box home-box-gifts'>
                                    <span className="fas fa-gift gift-box"></span>
                                    <p>Gifts</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2} className="successfull-box successfull-box-party">
                                    <p>100+ successful Corporate party</p>
                                </Col>
                                <Col md={2} className="successfull-box successfull-box-birthdays">
                                    <p>150+ successful birthdays</p>
                                </Col>
                                <Col md={2} className="successfull-box successfull-box-partners">
                                    <p>100+ partners</p>
                                </Col>
                                <Col md={2} className="successfull-box successfull-box-anniversary">
                                    <p>100+ successful anniversary</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="p-2">
                                    <h5 className='text-muted'>Gallery</h5>
                                    <div className='mt-5 gallery-carousel'>
                                        <Carousel responsive={responsive}>
                                            <GalleryComponent />
                                            <GalleryComponent />
                                            <GalleryComponent />
                                            <GalleryComponent />
                                            <GalleryComponent />
                                            <GalleryComponent />
                                        </Carousel>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col className="p-2">
                                    <h5 className='text-muted'>Why Festivefaux</h5>
                                    <div className='mt-5 gallery-carousel'>
                                        <Carousel responsive={responsive}>
                                            <GalleryComponent />
                                            <GalleryComponent />
                                            <GalleryComponent />
                                            <GalleryComponent />
                                            <GalleryComponent />
                                            <GalleryComponent />
                                        </Carousel>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col className="p-2">
                                    <h5 className='text-muted'>Customer <span style={{ color: '#7873f5' }}>Reviews</span></h5>
                                    <div className='mt-5 gallery-carousel'>
                                        <Carousel responsive={responsive}>
                                            <GalleryComponent />
                                            <GalleryComponent />
                                            <GalleryComponent />
                                            <GalleryComponent />
                                            <GalleryComponent />
                                            <GalleryComponent />
                                        </Carousel>
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

export default HomeNavigation