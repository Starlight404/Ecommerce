import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import CheckoutSteps from "../components/CheckoutSteps";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Store } from "../Store";

export default function PaymentMethodScreen() {
    const {state,dispatch: ctxDispatch} = useContext(Store);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-containers">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 className="my-3"> Payment Method </h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentMethodName === "PayPal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </div>
          <div className="mb-3">
            <Form.Check
              type="Bkash"
              id="Bkash"
              label="Bkash"
              value="Bkash"
              checked={paymentMethodName === "Bkash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </div>
          <div className="mb-3">
            <Form.Check
              type="Nagad"
              id="Nagad"
              label="Nagad"
              value="Nagad"
              checked={paymentMethodName === "Nagad"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </div>
          <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
