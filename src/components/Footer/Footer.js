import React from "react";
import Icons from "../.././assets/icons/guarantee.png";

const Footer = () => {
  return (
    <footer className="footer p-10 border-t-2 mt-10 text-neutral-content border-own-primary">
      <div>
        <span className=" text-own-primary">
          <a
            className=" text-own-primary normal-case text-xl  font-semibold"
            href="/"
          >
            Easy Buy
          </a>
        </span>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Branding
        </a>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Design
        </a>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Marketing
        </a>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Advertisement
        </a>
      </div>
      <div>
        <span className=" font-bold text-own-primary">Services</span>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Branding
        </a>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Design
        </a>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Marketing
        </a>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Advertisement
        </a>
      </div>
      <div>
        <span className=" font-bold text-own-primary ">Company</span>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          About us
        </a>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Contact
        </a>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Jobs
        </a>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Press kit
        </a>
      </div>
      <div>
        <span className=" font-bold text-own-primary">Legal</span>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Terms of use
        </a>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Privacy policy
        </a>
        <a
          href="/"
          className="link text-own-secondary dark:text-own-white link-hover"
        >
          Cookie policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
