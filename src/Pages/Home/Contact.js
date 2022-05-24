import React from "react";

const Contact = () => {
  return (
    <section className="container w-50 mx-auto">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact us
      </h2>

      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>

      <div className="grid place-content-center">
        <form className="grid grid-cols-1 items-center gap-4">
          <input
            type="text"
            placeholder="Your Name"
            class="input input-bordered input-md w-full max-w-xs"
          />
          <input
            type="email"
            placeholder="Your Email"
            class="input input-bordered input-md w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Your Message"
            class="input input-bordered input-lg w-full max-w-xs"
          />
        </form>
        <button className="btn btn-primary my-8 text-white">Send</button>
      </div>
    </section>
  );
};

export default Contact;
