import React from "react";
import Logo from "../../logo.png";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer p-10 bg-base-200 text-base-content rounded-lg shadow-lg justify-items-center">
      <div>
        <img src={Logo} alt="" className="w-full h-12" />
        <p>
          anikkhan1105@gmail.com
          <br />
          Providing reliable support since 2018
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/anikahammedkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm rounded-btn text-3xl"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/anikahammedkhan/"
            className="btn btn-ghost btn-sm rounded-btn text-3xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="https://www.facebook.com/anikahammedkhan.99"
            className="btn btn-ghost btn-sm rounded-btn text-3xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook></FaFacebook>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
