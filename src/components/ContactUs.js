import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="m-16">
        <div className="grid place-items-end">
          <div className="bg-white text-black font-semibold p-10">
            <div className="p-5">
              <h4 className="uppercase text-2xl mb-4">explore our collection and</h4>
              <h2 className="uppercase text-5xl">Visit our store</h2>
            </div>
            <div className="p-4 text-xl font-normal">
              <p className="mb-4">Ivan Vazov Street 18, Sofia, Bulgaria</p>
              <p className="mb-4">homeart@gmail.com</p>
              <p>+359 88 705 4421</p>
            </div>
            <div className="p-4">
              <button
                type="button"
                className="bg-red-500 hover:bg-black pt-4 pb-4 pl-8 pr-8 uppercase text-xl text-white font-semibold"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-background">
        <img src="./img/banners/id1-banner2.jpg" alt="img" />
      </div>
    </div>
  );
};

export default ContactUs;
