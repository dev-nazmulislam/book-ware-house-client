import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.Init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loadding, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loadding2, error2] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
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
          onClick={() => signInWithGoogle()}
          className=" btn btn-light border rounded fs-4 w-100 my-2"
        >
          <FcGoogle className="mx-3" />
          Google Login
        </button>
        <button
          onClick={() => signInWithGithub()}
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
