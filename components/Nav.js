import React from "react";

export default function Nav() {
  return (
    <div>
      <div className="container mx-auto bg-blue-400 mt p-5 flex justify-between mt-0 lg:mt-14">
        <div>L O G O</div>

        <div className="lg:pl-20 xl:pl-36">About</div>
        <div>Features</div>
        <div>Pricing</div>
        <div>Testimonial</div>
        <div className="lg:pr-20 xl:pr-40">Help</div>

        <div className="">Sign In</div>
        <div className="">Sign Up</div>
      </div>
    </div>
  );
}
