import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './venueSearch.css'


const VenueSearchFilter = () => {

    return (
        <>
            <Container fluid className="mt-5 mb-5">
                <Row>
                    <Col xs={10}>
                        <Container fluid>
                            <Form>
                                <Row>
                                    <Col xs={5} className="input-field">
                                        <Form.Control className="input-item" type="text" placeholder="Search by city, hotel, or neighbourhood" />
                                    </Col>
                                    <Col xs={3} className="input-field">
                                        <Form.Control className="input-item" type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
                                    </Col>
                                    <Col xs={2} className="input-field">
                                        <Form.Control className="input-item" type="text" placeholder="Number of guest" />
                                    </Col>
                                    <Col xs={2} className="input-field">
                                        <Button className="search-input-button">Search</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default VenueSearchFilter