import React, { Component } from 'react';

const Summary = (props) => {

const firstYear = props.passedData[0].bibliotheek_afst.replaceAll(',', '.');
const lastYear = props.passedData[props.passedData.length - 1].bibliotheek_afst.replaceAll(',', '.');
let sum = lastYear - firstYear;

console.log(props.passedData[0].Jaar + " " + firstYear);
console.log(props.passedData[props.passedData.length - 1].Jaar + " " + lastYear);

return (
    <div class ="storycontainer">
        <div>Hoe gaat het eraan toe in <p class="highlighted">{props.passedData[0].GWB_NAAM}</p></div>
        <div>Afstand basisschool: <p></p></div>
        <div>Afstand vmbo: <p></p></div>
        <div>Afstand havo/vwo: <p></p></div>
        <div>Afstand bibliotheek: <p></p></div>
        <div>Afstand ziekenhuis: <p></p></div>
    </div>
);
}

export default Summary