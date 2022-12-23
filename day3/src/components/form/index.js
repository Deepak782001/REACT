import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SignUp from "./Signup";



function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
function handleClick() {
  const payload = {
    email: email,
    password: password
  }
  console.log(payload);
}
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          autoComplete="off"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Form.Text className="text-muted">
          Your email address is end to end protected
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete="off"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label=" Remember password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick= { () => handleClick()}>
        Login
      </Button>
      <Button onClick={() => <SignUp />}> 
        signup
        </Button>
    </Form>
  );
}

export default LoginForm;
