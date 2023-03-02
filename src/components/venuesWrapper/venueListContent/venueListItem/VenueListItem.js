import React from 'react'
import Images from '../../../global/Images'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import './venueListItem.css'

const VenueListItem = ({ currentItems }) => {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <>
                        <Container fluid className="list-container">
                            <Row>
                                <Col md={3}>
                                    <Image src={Images.hotel} width="260px" height="220px" />
                                </Col>
                                <Col md={9}>
                                    <Container fluid>
                                        <Row>
                                            <Col xs={8}>
                                                <h6 className='text-muted'>Townhouse 610 Derawal Nagar</h6>
                                                <h6 className='text-muted'>Near lopium, Delhi, 3.4 Km</h6>
                                            </Col>
                                            <Col xs={4} className="text-right">
                                                <span className='card-item-rating mr-5'>
                                                    <span className='fas fa-star' />
                                                    <span className='fas fa-star' />
                                                    <span className='fas fa-star' />
                                                    <span className='fas fa-star' />
                                                    <span className='fas fa-star' />
                                                    <span className='card-item-rating-value ml-1'><b>5.0</b><span className='text-muted ml-1'>(1)</span></span>
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={2}>
                                                <strong className="additional-items">Pure Veg</strong>
                                            </Col>
                                            <Col xs={2}>
                                                <strong className="additional-items">Entertainment</strong>
                                            </Col>
                                            <Col xs={2}>
                                                <strong className="additional-items">Swimming Pool</strong>
                                            </Col>
                                            <Col xs={2}>
                                                <strong className="additional-items">Valet Parking</strong>
                                            </Col>
                                            <Col xs={2}>
                                                <strong className="additional-items">+11 more</strong>
                                            </Col>
                                        </Row>
                                        <Row className="list-item-detail">
                                            <Col xs={3}>
                                                <h5 className="list-item-price">Rs. 3945</h5>
                                                <strong className='text-muted'>one 6 hour event</strong>
                                            </Col>
                                            <Col xs={3}>
                                                <p className='text-muted'>50-150 guest</p>
                                            </Col>
                                            <Col xs={3} className="text-right">
                                                <Button className='add-to-cart'>Add to Cart</Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button className='book-now'>Book Now</Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </>
                ))}
        </>
    )
}

export default VenueListItem