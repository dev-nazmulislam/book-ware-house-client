import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../Shared/Loading/Loading";
import auth from "../../firebaseInit";

const Singup = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error2] =
    useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification, sending, error3] =
    useSendEmailVerification(auth);

  if (loading || sending) {
    return <Loading />;
  }

  let element;
  if (error || error2 || error3) {
    element = <p className="text-danger">{error}</p>;
  } else {
    element = "";
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      return setError("Password Do not match");
    } else {
      await sendEmailVerification();
      alert(`Verification code sent in ${email} Please Check your Email.`);
      createUserWithEmailAndPassword(email, password);
      setError("");
    }
  };

  return (
    <div className="row mx-0">
      <div className="col-12 col-md-8 col-lg-6 mx-auto my-5 shadow-lg p-5">
        <h1 className="text-primary text-center">Please Register</h1>
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
