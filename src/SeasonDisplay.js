import React from "react";

const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Brrr it is cold",
    iconName: "snowflake",
  },
};

function getSeason(lat, month) {
  let test;

  //northern
  if (lat > 0) {
    if (month > 2 && month < 9) {
      test = "summer";
    } else {
      test = "winter";
    }
  }
  //southern
  else {
    if (month > 2 && month < 9) {
      test = "winter";
    } else {
      test = "summer";
    }
  }

  return test;
}

function SeasonDisplay(props) {
  let season = getSeason(props.lat, new Date().getMonth());

  let { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon `} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive`} />
    </div>
  );
}

export default SeasonDisplay;
