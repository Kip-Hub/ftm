import React, { Component } from 'react';
 
import Stories from 'react-insta-stories';

const StoryTest = (props) => {

const lastIndex = props.passedData.length - 1;

const contentStyle = {
  background: "Lavender",
  width: "100%",
  height: "100%",
  color: "DarkSlateGrey",
  fontWeight: "bold"
};

const highlightStyle = {
  color: "OrangeRed"
};

const image = {
  display: "block",
  maxWidth: "100%"
};

const stories = [
  {
    content: ({ action, isPaused }) => {
      return (
        <div style={contentStyle}>
           <img
            style={image}
            src="https://i.imgur.com/2oko8zA.png"
          ></img>
          <p>In</p>
          <h2 style={highlightStyle}>{props.passedData[0].GWB_NAAM}</h2>
          <div>was de afstand tot een ziekenhuis<h2 style={highlightStyle}>{props.passedData[0].ziekenhuis_excl_afst} km</h2>
          <p>in het jaar</p>
          </div> 
          <p style={highlightStyle}>{props.passedData[0].Jaar}</p>
        </div>
      );
    }
  },
  {
    content: ({ action, isPaused }) => {
      return (
        <div style={contentStyle}>
           <img
            style={image}
            src="https://i.imgur.com/vg3vbRR.png"
          ></img>
          <p>In</p>
          <h2 style={highlightStyle}>{props.passedData[lastIndex].Jaar}</h2>
          <div>is die afstand</div> 
          <h2></h2>
          <h2 style={highlightStyle}>{props.passedData[lastIndex].ziekenhuis_excl_afst} km</h2>
          <p>(in {props.passedData[0].GWB_NAAM} )</p>
        </div>
      );
    }
  },
  {
    content: ({ action, isPaused }) => {
      return (
        <div style={contentStyle}>
           <img
            style={image}
            src="https://i.imgur.com/K3P3C1V.png"
          ></img>
          <p>de afstand tot een bibliotheek was in</p>
          <h2 style={highlightStyle}>{props.passedData[0].Jaar}</h2>
          <p>nog</p>
          <h2 style={highlightStyle}>{props.passedData[0].bibliotheek_afst} km</h2>
          <p>(in {props.passedData[0].GWB_NAAM} )</p>
        </div>
      );
    }
  },
  {
    content: ({ action, isPaused }) => {
      return (
        <div style={contentStyle}>
           <img
            style={image}
            src="https://i.imgur.com/C6gVI6Y.png"
          ></img>
          <p>in </p>
          <h2 style={highlightStyle}>{props.passedData[lastIndex].Jaar}</h2>
          <p>bedraagt die afstand</p>
          <h2 style={highlightStyle}>{props.passedData[lastIndex].bibliotheek_afst} km</h2>
          <p>(in {props.passedData[0].GWB_NAAM} )</p>
        </div>
      );
    }
  },
];

  return (
      <Stories
                  stories={stories}
                  defaultInterval={9000}
                  width={375}
                  height={812}
              />
  )
}

export default StoryTest