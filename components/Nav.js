import React from "react";

export default function Nav() {
  return (
    <div>
      <div className="container mx-auto mt p-5 flex justify-between mt-0 lg:mt-14">
        <div>
          <img src="https://i.imgur.com/q9W5gcS.png" alt="logo" />
        </div>

        <div className="pt-1 lg:pl-20 xl:pl-36">About</div>
        <div className="pt-1">Features</div>
        <div className="pt-1">Pricing</div>
        <div className="pt-1">Testimonial</div>
        <div className="pt-1 lg:pr-20 xl:pr-40">Help</div>

        <div className="pt-1">Sign In</div>
        <div className="pt-1">Sign Up</div>
      </div>
    </div>
  );
}
