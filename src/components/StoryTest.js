import React, { Component } from 'react';
import Basisschool from "./Basisschool"
import Bibliotheek from "./Bibliotheek"
import Vmbo from "./Vmbo"
import Ziekenhuis from "./Ziekenhuis"
 
import Stories from 'react-insta-stories';

const StoryTest = (props) => {

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
              <Bibliotheek passedData = {result}/>
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
              <Ziekenhuis passedData = {result}/>
         </div>
    ),
  }
];

  return (
      <Stories
                  stories={stories}
                  defaultInterval={8000}
                  width={375}
                  height={812}
              />
  )
}

export default StoryTest