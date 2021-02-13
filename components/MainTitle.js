import React from "react";

export default function MainTitle() {
  return (
    <div className="flex flex-col md:grid  grid-cols-2 gap-4">
      <div className="mt-4 text-4xl font-light  md:mt-40 text-5xl leading-ex70 font-medium pr-6 ">
        Want anything to be easy with <b>LaslesVPN.</b>
      </div>
      <div>
        <img
          className="mt-32"
          src="https://i.imgur.com/6946PCw.png"
          alt="wew"
        />
      </div>
      <div className="-mt-30x">
        Provide a network for all your needs with ease and fun using LaslesVPN
        discover interesting features from us.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        fermentum purus eu diam sagittis viverra nec quis enim. Nam sapien diam,
        ultricies eget ex sit amet, blandit tristique arcu. Nunc eget lectus ut
        justo ornare varius. Aliquam euismod sagittis sagittis. Proin dolor
        ante, vestibulum non varius faucibus, fermentum non ligula. Etiam tempus
        scelerisque eros a consequat. Sed pharetra imperdiet rhoncus. Donec et
        nisl velit.
      </div>
      <div>
        <button>Get Started</button>
      </div>
    </div>
  );
}
