import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function  SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");

  function handleClick() {
    const payload = {
      firstname: firstname,
      lastname: lastname,
      dob: dob,
      email: email,
    };
    console.log(payload);
  }
  return (

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="firstname"
          placeholder="Your first name"
          autoComplete="off"
          name="firstname"
          value={firstname}
          onChange={(event) => setFirstname(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your last name</Form.Label>
        <Form.Control
          type="Lastname"
          placeholder="Your last name"
          autoComplete="off"
          name="Lastname"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="Date of birth"
          placeholder="Your Birth Date"
          autoComplete="off"
          name="DOB"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
        />
      </Form.Group>

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
        
      </Form.Group>

      <Button variant="primary" type="submit" onClick= { () => handleClick()}>
        Submit
      </Button>
    </Form>
  );
}

export default SignUp;
