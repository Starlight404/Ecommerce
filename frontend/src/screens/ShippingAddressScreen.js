import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress },
  } = state;//for saving address

  const [fullName, setFullName] = useState(shippingAddress.fullName || " ");
  const [Address, setAddress] = useState(shippingAddress.Address || " ");
  const [City, setCity] = useState(shippingAddress.City || " ");
  const [PostCode, setPostCode] = useState(shippingAddress.PostCode || " ");
  const [Country, setCountry] = useState(shippingAddress.Country || " ");
  const [Contact, setContact] = useState(shippingAddress.Contact || " ");

  const submitHandler = (e) => {
    e.preventDefault();

    ctxDispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: {
        fullName,
        Address,
        City,
        PostCode,
        Country,
        Contact,
      },
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({
        fullName,
        Address,
        City,
        PostCode,
        Country,
        Contact,
      })
    );
    navigate("/payment");
  };

  return (
    <div>
      <Helmet>
        <title> Shipping Address</title>
      </Helmet>
      <div className="container small-containers">
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
          <div className="mb-3">
            <Button variant="primary" type="Submit">
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
