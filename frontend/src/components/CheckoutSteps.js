import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CheckoutSteps(props) {
  return (
    <Row classname="checkout-steps">
      <Col classname={props.step1 ? "active" : " "}>Sign-In</Col>
      <Col classname={props.step2 ? "active" : " "}>Shipping</Col>
      <Col classname={props.step3 ? "active" : " "}>Payment</Col>
      <Col classname={props.step4 ? "active" : " "}>Place Order</Col>
    </Row>
  );
}
