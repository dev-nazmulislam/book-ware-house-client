import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import auth from "../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loadding, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user1, loadding1, error1] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, user2, loadding2, error2] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let element;
  if (error || error1 || error2) {
    element = <p className="text-danger">{error?.message}</p>;
  } else {
    element = "";
  }

  if (loadding || loadding1 || loadding2) {
    return <Loading />;
  }

  if (user) {
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
          onClick={() => signInWithFacebook()}
          className="btn btn-primary border rounded fs-4 w-100  my-2"
        >
          <FaFacebookF className="mx-3" />
          Facebook Login
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
