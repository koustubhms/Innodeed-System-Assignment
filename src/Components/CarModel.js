import React from "react";

export function CarModel(props) {
  const { data } = props;
  return (
    <div className="card">
      <div className="card_container">
        <div className="header">
          <p>{data.bodyType.toUpperCase()}</p>
          <label>
            <b>{data.modelName.toUpperCase()}</b>
          </label>
          <label className="title">{data.modelType}</label>
        </div>
        <div className="card_body">
          <img src={data.imageUrl} alt="car" />
        </div>
        <div className="card_footer">
          <div>
            <p>LEARN </p>
          </div>
          <div>
            <p>SHOP </p>
          </div>
        </div>
      </div>
    </div>
  );
}
