import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter, AiFillGithub, AiFillYoutube } from "react-icons/ai";

const SocialConnect = () => {
  return (
    <div className=" d-flex align-items-center justify-content-center gap-2 mt-3">
      <a href="https://github.com/dev-nazmulislam">
        <ImFacebook className="fs-3" />
      </a>
      <a href="https://github.com/dev-nazmulislam">
        <AiOutlineTwitter className="fs-3" />
      </a>
      <a href="https://github.com/dev-nazmulislam">
        <AiFillGithub className="fs-3" />
      </a>
      <a href="https://github.com/dev-nazmulislam">
        <FaLinkedinIn className="fs-3" />
      </a>
      <a href="https://github.com/dev-nazmulislam">
        <AiFillYoutube className="fs-3" />
      </a>
    </div>
  );
};

export default SocialConnect;
