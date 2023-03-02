import React from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import NavBar from '../homeWrapper/navbarComponent/NavBar'
import VenueFeatures from './venueFeatures/VenueFeatures'
import VenueSearchFilter from './venueSearchFilter/VenueSearchFilter'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TopVenueItem from './topVenues/TopVenueItem'
import VenueListContent from './venueListContent/VenueListContent'
import Footer from '../footerWrapper/Footer'

const Venue = () => {

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
            <NavBar />
            <Container fluid>
                <Row>
                    <Col xs={3} />
                    <Col xs={9}>
                        <VenueSearchFilter />
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <VenueFeatures />
                    </Col>
                    <Col xs={9}>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Carousel responsive={responsive}>
                                        <TopVenueItem />
                                        <TopVenueItem />
                                        <TopVenueItem />
                                        <TopVenueItem />
                                        <TopVenueItem />
                                    </Carousel>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <VenueListContent itemsPerPage={4} />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Venue