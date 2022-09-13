import React from "react";
import Icons from "../.././assets/icons/guarantee.png";

const Footer = () => {
  return (
    <footer class="footer p-10 border-t-2 mt-10 text-neutral-content border-own-primary">
      <div>
        <span class=" text-own-primary">
          <a
            class="btn btn-ghost normal-case text-xl text-own-white font-semibold"
            href="/"
          >
            <img width="25px" className="mr-2" src={Icons} alt="icons" />{" "}
            Quality <span className="text-own-secondary">C</span> ookie
          </a>
        </span>
        <a href="/" class="link text-own-white link-hover">
          Branding
        </a>
        <a href="/" class="link text-own-white link-hover">
          Design
        </a>
        <a href="/" class="link text-own-white link-hover">
          Marketing
        </a>
        <a href="/" class="link text-own-white link-hover">
          Advertisement
        </a>
      </div>
      <div>
        <span class=" font-bold text-own-primary">Services</span>
        <a href="/" class="link text-own-white link-hover">
          Branding
        </a>
        <a href="/" class="link text-own-white link-hover">
          Design
        </a>
        <a href="/" class="link text-own-white link-hover">
          Marketing
        </a>
        <a href="/" class="link text-own-white link-hover">
          Advertisement
        </a>
      </div>
      <div>
        <span class=" font-bold text-own-primary ">Company</span>
        <a href="/" class="link text-own-white link-hover">
          About us
        </a>
        <a href="/" class="link text-own-white link-hover">
          Contact
        </a>
        <a href="/" class="link text-own-white link-hover">
          Jobs
        </a>
        <a href="/" class="link text-own-white link-hover">
          Press kit
        </a>
      </div>
      <div>
        <span class=" font-bold text-own-primary">Legal</span>
        <a href="/" class="link text-own-white link-hover">
          Terms of use
        </a>
        <a href="/" class="link text-own-white link-hover">
          Privacy policy
        </a>
        <a href="/" class="link text-own-white link-hover">
          Cookie policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
