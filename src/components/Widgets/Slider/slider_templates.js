import React from "react";
import Slick from "react-slick";
import { Link } from "react-router-dom";
import "./slider.css";

const SliderTeamplates = props => {
  let template = null;
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  switch (props.type) {
    case "featured":
      template = props.data.map((item, i) => {
        return (
          <div key={i}>
            <div className="featured_item">
              <div
                className="featured_image"
                style={{ background: `url(../images/articles/${item.image})` }}
              />
              <Link to={`/articles/${item.id}`}>
                <div className="featured_title">{item.title}</div>
              </Link>
            </div>
          </div>
        );
      });
      break;
    default:
      template = null;
  }

  return <Slick {...settings}>{template}</Slick>;
};

export default SliderTeamplates;
