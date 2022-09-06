import { Alert } from "react-bootstrap";
//alert not working properly
export default function MessageBox(props) {
  return (
   <Alert variant={props.variant || "info"}>{props.children}
  </Alert>
  );

}
