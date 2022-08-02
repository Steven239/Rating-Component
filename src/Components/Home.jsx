import { useState, useEffect } from "react";
import Image from "../icon-star.svg";
import WebFont from "webfontloader";
import { useNavigate } from "react-router";
import $ from "jquery";

function Home() {
  let navigate = useNavigate();

  const [rating, setRating] = useState(0);

  const [textData] = useState({
    text: "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!",
  });

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Overpass"],
      },
    });
  }, []);

  const onButtonSubmit = () => {
    if (rating > 0) {
      navigate("/thankyou", { state: rating });
    }
  };

  // See if you can use a for loop that will iterate through the button and toggle the selected.

  const onOneClick = (e) => {
    $("#one").toggleClass("selected");

    if (e.target.value === 1) {
      $("#two").removeClass("selected");
      $("#three").removeClass("selected");
      $("#four").removeClass("selected");
      $("#five").removeClass("selected");
    }
    setRating(1);
  };

  const onTwoClick = (e) => {
    $("#two").toggleClass("selected");

    if (e.target.value === 2) {
      $("#one").removeClass("selected");
      $("#three").removeClass("selected");
      $("#four").removeClass("selected");
      $("#five").removeClass("selected");
    }
    setRating(2);
  };

  const onThreeClick = (e) => {
    $("#three").toggleClass("selected");

    if (e.target.value === 3) {
      $("#one").removeClass("selected");
      $("#two").removeClass("selected");
      $("#four").removeClass("selected");
      $("#five").removeClass("selected");
    }
    setRating(3);
  };

  const onFourClick = (e) => {
    $("#four").toggleClass("selected");

    if (e.target.value === 4) {
      $("#one").removeClass("selected");
      $("#three").removeClass("selected");
      $("#two").removeClass("selected");
      $("#five").removeClass("selected");
    }
    setRating(4);
  };

  const onFiveClick = (e) => {
    $("#five").toggleClass("selected");

    if (e.target.value === 5) {
      $("#one").removeClass("selected");
      $("#three").removeClass("selected");
      $("#four").removeClass("selected");
      $("#two").removeClass("selected");
    }
    setRating(5);
  };

  return (
    <div className="card-body">
      <div className="star-body">
        <img className="starImg" src={Image} alt="star"></img>
      </div>
      <h3 className="headline-font-style">How did we do?</h3>
      <p className="sub-font-style"> {textData.text}</p>
      <ul className="row star-card">
        <li onClick={onOneClick} value={1} id="one" className="list-style">
          1
        </li>
        <li onClick={onTwoClick} value={2} id="two" className="list-style">
          2
        </li>
        <li onClick={onThreeClick} value={3} id="three" className="list-style">
          3
        </li>
        <li onClick={onFourClick} value={4} id="four" className="list-style">
          4
        </li>
        <li onClick={onFiveClick} value={5} id="five" className="list-style">
          5
        </li>
      </ul>

      <button id={"submit"} onClick={onButtonSubmit} className="submit-button">
        SUBMIT
      </button>
    </div>
  );
}

export default Home;
