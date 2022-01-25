import React, { useEffect, Component } from 'react';
import Basisschool from "./Basisschool"
import Bibliotheek from "./Bibliotheek"
import Vmbo from "./Vmbo"
import Ziekenhuis from "./Ziekenhuis"
import Havovwo from "./Havovwo"
import Summary from "./Summary"
import * as d3 from "d3";
 
import Stories from 'react-insta-stories';

const StoryTest = (props) => {

  useEffect(() => {
    const removeParent = () => {
      d3.select("#search")
      .attr("class", "hidden")
    }
    removeParent();
  }, []);

const result = props.passedData;

const stories = [
  {
    content: (props) => (
        <div class="storyelement">
              <Basisschool passedData = {result}/>
        </div>
       ),
  },
  {
    content: (props) => (
         <div class="storyelement">
              <Vmbo passedData = {result}/>
         </div>
    ),
  },
  {
    content: (props) => (
         <div class="storyelement">
              <Havovwo passedData = {result}/>
         </div>
    ),
  },
  {
    content: (props) => (
         <div class="storyelement">
              <Bibliotheek passedData = {result}/>
         </div>
    ),
  },
  {
    content: (props) => (
         <div class="storyelement">
              <Ziekenhuis passedData = {result}/>
         </div>
    ),
  },
  {
    content: (props) => (
         <div class="storyelement">
              <Summary passedData = {result}/>
         </div>
    ),
  }
];

  return (
      <Stories
                  stories={stories}
                  defaultInterval={8000}
                  width={window.screen.width}
                  height={window.screen.height}
              />
  )
}

export default StoryTest