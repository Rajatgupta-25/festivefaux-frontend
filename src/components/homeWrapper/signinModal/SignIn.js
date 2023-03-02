import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import base_url from '../../../api/boot_api';
import axios from "axios";
import swal from 'sweetalert';
import './signIn.css';
import { userContext } from '../../global/userContext';

const SignIn = () => {

    const { user, setLogin } = useContext(userContext);

    const [loginDetail, setLoginDetail] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        postDataToServer(loginDetail);
    }
    const postDataToServer = (data) => {
        console.log(data);
        axios.post(`${base_url}/login`, data).then(
            (response) => {
                const d = response.data;
                if (d) {
                    swal({
                        title: "Authenticated Successfully",
                        icon: "success",
                        button: "Okay",
                    }).then((value) => {
                        navigate('/');
                        setLogin(d);
                        localStorage.setItem("user", JSON.stringify(d))
                        window.location.reload();
                    });
                } else if (d === "not valid") {
                    swal({
                        title: "Invalid Username or Password",
                        icon: "error",
                        button: "Try Again",
                    });
                } else {
                    swal({
                        title: "Error Occured",
                        text: "Server Issue",
                        icon: "error",
                        button: "Try Again",
                    });
                }
            },
            (error) => {
                swal({
                    title: "Error Occured",
                    text: "Server Issue occured",
                    icon: "error",
                    button: "Try Again",
                });
            }
        );
    }

    return (
        <>
            <Container fluid>
                <Row className="mt-4">
                    <Col className="text-center">
                        <h4>Google</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <h5>Or</h5>
                    </Col>
                </Row>
                <Form>
                    <Row>
                        <Col md={11} className="ml-4">
                            <Form.Group className="mb-3" controlId="form.ControlFirstName">
                                <Form.Label className='login-label'><h6>Email / Phone Number</h6></Form.Label>
                                <Form.Control name="userEmail" type="text" onChange={
                                    (e) => {
                                        setLoginDetail({ ...loginDetail, userEmail: e.target.value });
                                    }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={11} className="ml-4">
                            <Form.Group controlId="form.ControlFirstName">
                                <Form.Label className='login-label'><h6>Password</h6></Form.Label>
                                <Form.Control name="userPassword" type="password" onChange={
                                    (e) => {
                                        setLoginDetail({ ...loginDetail, userPassword: e.target.value });
                                    }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="ml-4">
                            <Link ><small>Forgot Password?</small></Link>
                        </Col>
                        <Col md={4} className='ml-4'>
                            <Link to="/signup" className="create-account-option"><small>Create Account</small></Link>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col md={2} />
                        <Col md={8} >
                            <Button onClick={handleSubmit} className="submit-btn"><h5>LogIn</h5></Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default SignIn