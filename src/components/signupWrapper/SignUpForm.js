import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import base_url from '../../api/boot_api';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';
import './SignUpForm.css';
import { userContext } from '../global/userContext';


const SignupForm = () => {

    const [userDetail, setUserDetail] = useState({});

    const navigate = useNavigate();

    const { user, setLogin } = useContext(userContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit")
        postDataToServer(userDetail);
        console.log(userDetail);
    }
    const postDataToServer = (data) => {
        axios.post(`${base_url}/register`, data).then(
            (response) => {
                const d = response.data;
                if (d === "saved") {
                    swal({
                        title: "Registered Successfully",
                        text: "Registration Completed",
                        icon: "success",
                        button: "Okay",
                    }).then((value) => {
                        navigate('/');
                        setLogin(data);
                    });

                } else if (data === "already exist") {
                    swal({
                        title: "Error Occured",
                        text: "Email Id which you have entered is already available.",
                        icon: "error",
                        button: "Okay",
                    });
                } else {
                    swal({
                        title: "Error Occured",
                        text: "Server Issue",
                        icon: "error",
                        button: "Try Again",
                    });
                }
                console.log("response", response)
            },
            (error) => {
                swal({
                    title: "Error Occured",
                    text: "Server Issue occured",
                    icon: "error",
                    button: "Try Again",
                });
                console.log("error", error)
            }
        );
    }

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col className="text-center">
                        <h3>Google</h3>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col className='text-center'>
                        <h6>Or</h6>
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <Row className="mt-3">
                        <Col md={1} />
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="form.ControlFirstName">
                                <Form.Control name="firstName" type="text" placeholder="First Name" required onChange={
                                    (e) => {
                                        setUserDetail({ ...userDetail, firstName: e.target.value });
                                    }} />
                            </Form.Group>
                        </Col>
                        <Col md={2} />
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="form.ControlLastName">
                                <Form.Control name="lastName" type="text" placeholder="Last Name" required onChange={
                                    (e) => {
                                        setUserDetail({ ...userDetail, lastName: e.target.value });
                                    }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={1} />
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="form.ControlEmail">
                                <Form.Control name="email" type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email"
                                    onChange={
                                        (e) => {
                                            setUserDetail({ ...userDetail, email: e.target.value });
                                        }}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={2} />
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="form.ControlPassword">
                                <Form.Control name="password" required type="password" placeholder="Password"
                                    onChange={
                                        (e) => {
                                            setUserDetail({ ...userDetail, password: e.target.value });
                                        }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={1} />
                        <Col md={4}>
                            <Form.Group controlId="form.ControlGender">
                                <Form.Control
                                    required
                                    name="gender"
                                    as="select"
                                    onChange={
                                        (e) => {
                                            setUserDetail({ ...userDetail, gender: e.target.value });
                                        }}
                                >
                                    <option value="">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={2} />
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="form.ControlPhoneNumber">
                                <Form.Control name="phoneNumber" required type="tel" pattern="[1-9]{1}[0-9]{9}" maxLength={10} placeholder="Phone Number"
                                    onChange={
                                        (e) => {
                                            setUserDetail({ ...userDetail, phoneNumber: e.target.value });
                                        }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={3} className="ml-5" />
                        <Col md={4} className="ml-5">
                            <Form.Group className="mb-3" controlId="form.ControlDob">
                                <Form.Control name="dob" type="date" required placeholder="DOB"
                                    onChange={
                                        (e) => {
                                            setUserDetail({ ...userDetail, dob: e.target.value });
                                        }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={3} className="ml-5" />
                        <Col md={4} className="ml-5">
                            <Form.Control type="submit" className="submit-btn" value="Sign Up" />
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default SignupForm