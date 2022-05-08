import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.Init";
import useHistory from "../../Hooks/useHistory";

const SocialLogin = () => {
  const [signInWithGoogle, user, loadding, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loadding2, error2] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [histories, setHistories] = useHistory();
  let from = location.state?.from?.pathname || "/";

  let element;
  if (error2) {
    element = <p className="text-danger">{error2?.message}</p>;
  } else {
    element = "";
  }
  if (error) {
    element = <p className="text-danger">{error?.message}</p>;
  } else {
    element = "";
  }

  if (loadding || loadding2) {
    return <Loading />;
  }

  if (user || user2) {
    navigate(from, { replace: true });
  }
  const googleSingin = () => {
    signInWithGoogle();
    // Create History Data
    const newHistory = {};
    newHistory.email = user?.email;
    newHistory.bookName = user?.displayName;
    newHistory.task = "Login with google";
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
  const gitHublogin = () => {
    signInWithGithub();
    // Create History Data
    const newHistory = {};
    newHistory.email = user2?.email;
    newHistory.bookName = user2?.displayName;
    newHistory.task = "Login with Github";
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
    <div>
      <div className="d-flex aling-items-center">
        <div style={{ height: "2px" }} className="w-50 mt-2 bg-primary"></div>
        <p className="px-3">or</p>
        <div style={{ height: "2px" }} className="w-50 mt-2 bg-primary"></div>
      </div>
      {element}
      <div>
        <button
          onClick={googleSingin}
          className=" btn btn-light border rounded fs-4 w-100 my-2"
        >
          <FcGoogle className="mx-3" />
          Google Login
        </button>
        <button
          onClick={gitHublogin}
          className="btn btn-dark border rounded fs-4 w-100  my-2"
        >
          <FaGithub className="mx-3" />
          GitHub Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
