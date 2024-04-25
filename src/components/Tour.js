import React from "react";

const Tour = (props) => {
  const { id, name, info, image, price, date, country, days } = props.tour;
  return (
    <article className="tour-card" key={id}>
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{name}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {country}
          </p>
          <p>{days}</p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
