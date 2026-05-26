import React from "react";

/*
  About Component
  Displays blog image and description
*/

function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;