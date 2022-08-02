import { useEffect } from "react";
import ThankYouImage from "../illustration-thank-you.svg";
import WebFont from "webfontloader";
import { useLocation } from "react-router-dom";

function ThankYouPage() {
  let location = useLocation();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Overpass"],
      },
    });
  }, []);

  const ratingSeleted = location.state;

  return (
    <div className="card-body">
      <div className="img-box">
        <img className="ty-img" src={ThankYouImage} alt="thankyou" />
      </div>
      <div className="selection-text">
        {`You selected ${ratingSeleted} out of 5`}
      </div>
      <div>
        <h2 className="ty-text">Thank you!</h2>
        <p className="ty-para">
          We appreciate you taking the time to give a rating. <br />
          If you ever need more support, don't hesitate to
          <br /> get in touch with us!
        </p>
      </div>
    </div>
  );
}

export default ThankYouPage;
