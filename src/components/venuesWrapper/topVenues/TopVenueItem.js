import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Images from '../../global/Images'
import './topVenue.css'
const TopVenueItem = () => {
    return (
        <>
            <Card className='card'>
                <Card.Img variant="top" src={Images.image} />
                <Container>
                    <Row className="mb-2">
                        <Col>
                            <small className='text-muted'>3 days (approx.)</small><br />
                            <strong className="card-title">3-Day Private Taj Mahal, Agra and Delhi Tour from Goa or Mumbai</strong><br />
                            <span className='card-item-rating mr-5'>
                                <span className='fas fa-star' />
                                <span className='fas fa-star' />
                                <span className='fas fa-star' />
                                <span className='fas fa-star' />
                                <span className='fas fa-star' />
                                <span className='card-item-rating-value ml-1'><b>5.0</b><span className='text-muted ml-1'>(1)</span></span>
                            </span>
                            <span className="card-item-price justify-content-end ml-5"><b>Rs. 40,903.29</b></span>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </>
    )
}

export default TopVenueItem