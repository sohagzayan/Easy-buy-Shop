import React from "react";

const Footer = () => {
  return (
    <footer class="footer p-10 border-t-2 mt-10 text-neutral-content">
      <div>
        <span class=" text-secondary">
            <a class=" normal-case text-xl text-primary font-semibold" href="/">
            Hardware <span className="text-secondary font-bold text-2xl">Fair </span>
            </a>
        </span>
        <a href="/" class="link text-primary link-hover">Branding</a>
        <a href="/" class="link text-primary link-hover">Design</a>
        <a href="/" class="link text-primary link-hover">Marketing</a>
        <a href="/" class="link text-primary link-hover">Advertisement</a>
      </div>
      <div>
        <span class=" font-bold text-secondary">Services</span>
        <a href="/" class="link text-primary link-hover">Branding</a>
        <a href="/" class="link text-primary link-hover">Design</a>
        <a href="/" class="link text-primary link-hover">Marketing</a>
        <a href="/" class="link text-primary link-hover">Advertisement</a>
      </div>
      <div>
        <span class=" font-bold text-secondary ">Company</span>
        <a href="/" class="link text-primary link-hover">About us</a>
        <a href="/" class="link text-primary link-hover">Contact</a>
        <a href="/" class="link text-primary link-hover">Jobs</a>
        <a href="/" class="link text-primary link-hover">Press kit</a>
      </div>
      <div>
        <span class=" font-bold text-secondary">Legal</span>
        <a href="/" class="link text-primary link-hover">Terms of use</a>
        <a href="/" class="link text-primary link-hover">Privacy policy</a>
        <a href="/" class="link text-primary link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
