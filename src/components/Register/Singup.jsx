import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../Shared/Loading/Loading";
import auth from "../../firebase.Init";
import "./Singup.css";
import useHistory from "../../Hooks/useHistory";

const Singup = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [error, setError] = useState("");
  const [histories, setHistories] = useHistory();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error2] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
  if (loading || updating) {
    return <Loading />;
  }

  let element;
  if (error2) {
    element = <p className="text-danger">{error2}</p>;
  } else {
    element = "";
  }

  if (error) {
    element = <p className="text-danger">{error}</p>;
  } else {
    element = "";
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      return setError("Password Do not match");
    } else {
      alert(`Verification code sent in ${email} Please Check your Email.`);
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      setError("");
    }
    // Create History Data
    const newHistory = {};
    newHistory.email = user?.email;
    newHistory.bookName = user?.displayName;
    newHistory.task = "Singup";
    newHistory.time = Date().toLocaleString();

    // Post New History Data to server
    fetch("https://mighty-dusk-49836.herokuapp.com/histories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newHistory),
    })
      .then((res) => res.json())
      .then((result) => {
        const updatedHistory = [...histories, newHistory];
        setHistories(updatedHistory);
      });
  };

  return (
    <div className="row mx-0 singup-component">
      <div className="col-12 col-md-8 col-lg-6 mx-auto my-5 shadow-lg p-5">
        <h1 className="text-primary text-center">Please Register</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              ref={nameRef}
              type="text"
              placeholder="Enter your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter Your email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={confirmPasswordRef}
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>

          <Button
            className="border rounded fs-4 w-100  my-2 mx-auto d-block"
            variant="success"
            type="submit"
          >
            Register
          </Button>
        </Form>
        {element}
        <p className="py-2">
          Already have an account?{" "}
          <Link to="/login" className="text-danger text-decoration-none">
            Please Login.
          </Link>
        </p>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Singup;
