import React from "react";
import { CONTACT } from "../constants";

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="text-center my-20 text-4xl">
        Contact <span className="text-neutral-400"> me</span>
      </h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a className="border-b" href="#">{CONTACT.email}</a>
      </div>
    </div>
  );
}

export default Contact;
