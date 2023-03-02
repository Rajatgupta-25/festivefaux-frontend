import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import './venueFeature.css'

const VenueFeatures = () => {

    const [isDistance, setDistance] = useState(false);
    const [isServices, setServices] = useState(false);
    const [isCategory, setCategory] = useState(false);
    const [isPrices, setPrices] = useState(false);
    const [isCapacity, setCapacity] = useState(false);
    const [isRating, setRating] = useState(false);
    const [isUserRating, setUserRating] = useState(false);
    const [isAvailability, setAvailability] = useState(false);

    return (
        <>
            <Container >
                <Form>
                    <Row>
                        <Col xs={6} className="text-center">
                            <h6>FILTER</h6>
                        </Col>
                        <Col xs={6} className="text-center">
                            <Form.Control type="reset" className="clear-all-button" value="Clear All" />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Container className='border p-3 feature-box' >
                                <Row onClick={() => {
                                    setDistance(!isDistance)
                                }}>
                                    <Col>
                                        <span className="feature">Distance</span>
                                        <span className={isDistance ? 'fas fa-angle-up feature-icon' : 'fas fa-angle-down feature-icon'}></span>
                                    </Col>
                                </Row>
                                <Row style={{ display: `${isDistance ? 'block' : 'none'}` }} className="mt-3">
                                    <Col>
                                        <Form.Control className='distance-input' min="0" max="100" defaultValue="0" type="range" />
                                        <span>0 Km</span>
                                        <span className='max-distance'>100 Km</span>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col>
                            <Container className='border p-3 feature-box' >
                                <Row onClick={() => {
                                    setCategory(!isCategory)
                                }}>
                                    <Col>
                                        <span className="feature">Category</span>
                                        <span className={isCategory ? 'fas fa-angle-up feature-icon' : 'fas fa-angle-down feature-icon'}></span>
                                    </Col>
                                </Row>
                                <Row style={{ display: `${isCategory ? 'block' : 'none'}` }} className="mt-2">
                                    <Col>
                                        {['checkbox'].map((type) => (
                                            <div key={`inline-${type}`} className="p-1">
                                                <Form.Check
                                                    label="Restaurants"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                                <Form.Check
                                                    label="Bars and nightclubs"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="Hotels"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="Villa"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="Guest House"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="Resort"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="Conference"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="Historical Fort"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col>
                            <Container className='border p-3 feature-box' >
                                <Row onClick={() => {
                                    setServices(!isServices)
                                }}>
                                    <Col>
                                        <span className="feature">Services</span>
                                        <span className={isServices ? 'fas fa-angle-up feature-icon' : 'fas fa-angle-down feature-icon'}></span>
                                    </Col>
                                </Row>
                                <Row style={{ display: `${isServices ? 'block' : 'none'}` }} className="mt-2">
                                    <Col>
                                        {['checkbox'].map((type) => (
                                            <div key={`inline-${type}`} className="p-1">
                                                <Form.Check
                                                    label="Vegitarian"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                                <Form.Check
                                                    label="Non-Vegitarian"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="North Indian Cuisine"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="South Indian Cuisine"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="Italian"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col>
                            <Container className='border p-3 feature-box' >
                                <Row onClick={() => {
                                    setPrices(!isPrices)
                                }}>
                                    <Col>
                                        <span className="feature">Prices</span>
                                        <span className={isPrices ? 'fas fa-angle-up feature-icon' : 'fas fa-angle-down feature-icon'}></span>
                                    </Col>
                                </Row>
                                <Row style={{ display: `${isPrices ? 'block' : 'none'}` }} className="mt-2">
                                    <Col>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="p-1">
                                                <Form.Check
                                                    label="Hight to Low"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                                <Form.Check
                                                    label="Low to High"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col>
                            <Container className='border p-3 feature-box'>
                                <Row onClick={() => {
                                    setCapacity(!isCapacity)
                                }}>
                                    <Col>
                                        <span className="feature">Capacity</span>
                                        <span className={isCapacity ? 'fas fa-angle-up feature-icon' : 'fas fa-angle-down feature-icon'}></span>
                                    </Col>
                                </Row>
                                <Row style={{ display: `${isCapacity ? 'block' : 'none'}` }} className="mt-2">
                                    <Col>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="p-1">
                                                <Form.Check
                                                    label="1 to 25"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                                <Form.Check
                                                    label="25 to 50"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="50 to 75"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="75 to 100"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="100 to 200"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="200 to 300"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label=">300"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col>
                            <Container className='border p-3 feature-box'>
                                <Row onClick={() => {
                                    setRating(!isRating)
                                }}>
                                    <Col>
                                        <span className="feature">Rating</span>
                                        <span className={isRating ? 'fas fa-angle-up feature-icon' : 'fas fa-angle-down feature-icon'}></span>
                                    </Col>
                                </Row>
                                <Row style={{ display: `${isRating ? 'block' : 'none'}` }} className="mt-2">
                                    <Col>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="p-1">
                                                <Form.Check
                                                    label="1"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                                <Form.Check
                                                    label="2"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="3"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="4"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="5"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col>
                            <Container className='border p-3 feature-box'>
                                <Row onClick={() => {
                                    setUserRating(!isUserRating)
                                }}>
                                    <Col>
                                        <span className="feature">User Rating</span>
                                        <span className={isUserRating ? 'fas fa-angle-up feature-icon' : 'fas fa-angle-down feature-icon'}></span>
                                    </Col>
                                </Row>
                                <Row style={{ display: `${isUserRating ? 'block' : 'none'}` }} className="mt-2">
                                    <Col>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="p-1">
                                                <Form.Check
                                                    label="3+"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                                <Form.Check
                                                    label="4+"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    label="4.5+"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col>
                            <Container className='border p-3 feature-box'>
                                <Row onClick={() => {
                                    setAvailability(!isAvailability)
                                }}>
                                    <Col>
                                        <span className="feature">Availability</span>
                                        <span className={isAvailability ? 'fas fa-angle-up feature-icon' : 'fas fa-angle-down feature-icon'}></span>
                                    </Col>
                                </Row>
                                <Row style={{ display: `${isAvailability ? 'block' : 'none'}` }} className="mt-2">
                                    <Col>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="p-1">
                                                <Form.Check
                                                    label="Online show available"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                                <Form.Check
                                                    label="Show all"
                                                    name="grou1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default VenueFeatures