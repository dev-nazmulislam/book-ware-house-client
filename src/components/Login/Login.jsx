import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.Init";
import useHistory from "../../Hooks/useHistory";

import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [histories, setHistories] = useHistory();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loadding, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);

  let element;
  if (error) {
    element = <p className="text-danger">{error?.message}</p>;
  } else {
    element = "";
  }
  if (error2) {
    element = <p className="text-danger">{error2?.message}</p>;
  } else {
    element = "";
  }

  if (loadding || sending) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);

    // Create History Data
    const newHistory = {};
    newHistory.email = user?.email;
    newHistory.bookName = user?.displayName;
    newHistory.task = "Login";
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

  async function handlePasswordReset() {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      alert("Sent email");
      navigate(from, { replace: true });
    } else {
      alert("Please provide a email.");
    }
  }

  return (
    <div className="row mx-0 login-component">
      <div className="col-12 col-md-6 mx-auto my-5 shadow-lg p-5">
        <h1 className="text-primary text-center">Please login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
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

          <Button
            className="border rounded fs-4 w-100  my-2 mx-auto d-block"
            variant="success"
            type="submit"
          >
            Login
          </Button>
        </Form>
        {element}
        <p className="pt-2">
          New to Elite Photographer?{" "}
          <Link to="/register" className="text-danger text-decoration-none">
            Pleasse Register.
          </Link>
        </p>
        <p>
          Forget your password?{" "}
          <button
            onClick={handlePasswordReset}
            className="text-primary btn btn-link"
          >
            Reset Password
          </button>
        </p>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
