import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";

export default function ShippingAddressScreen() {
  const [fullName, setFullName] = useState(" ");
  const [Address, setAddress] = useState(" ");
  const [City, setCity] = useState(" ");
  const [PostCode, setPostCode] = useState(" ");
  const [Country, setCountry] = useState(" ");
  const [Contact, setContact] = useState(" ");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Helmet>
        <title> Shipping Address</title>
      </Helmet>
      <h1 className="my-3">Shipping Address </h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="City">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={City}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="PostCode">
          <Form.Label>Post Code</Form.Label>
          <Form.Control
            value={PostCode}
            onChange={(e) => setPostCode(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            value={Country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Contact">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            value={Contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </Form.Group>
      </Form>
    </div>
  );
}
