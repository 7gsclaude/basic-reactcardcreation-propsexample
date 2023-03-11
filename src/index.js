import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
// i can create more with different information
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Claude"
      img="https://www.giantbomb.com/a/uploads/original/46/462814/3181186-8832722279-af535.jpg"
      tel="1231456"
      email="fake@email.com"
    />
    <input id="fName" />
  </div>,
  document.getElementById("root")
);
