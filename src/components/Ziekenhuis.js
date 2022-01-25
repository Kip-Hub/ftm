import React, { Component } from 'react';

const Ziekenhuis = (props) => {

const firstYear = props.passedData[0].ziekenhuis_incl_afst.replaceAll(',', '.');
const lastYear = props.passedData[props.passedData.length - 1].ziekenhuis_incl_afst.replaceAll(',', '.');
let sum = lastYear - firstYear;

console.log(props.passedData[0].Jaar + " " + firstYear);
console.log(props.passedData[props.passedData.length - 1].Jaar + " " + lastYear);

    switch (sum < 0){
        case true:
            console.log(sum.toString().replaceAll('-','') + " km afgenomen");
            return (
                <div class ="storycontainer">
                    <img src="./ziekenhuis.png"></img>
                    <p>De afstand naar het dichtstbijzijnde ziekenhuis in <p class="highlighted">{props.passedData[0].GWB_NAAM}</p></p>
                    <p>is met <p class="highlighted">{sum.toString().replaceAll('-','')} km </p>afgenomen</p>
                    <p class="sidenote">* tussen {props.passedData[0].Jaar} tot {props.passedData[props.passedData.length - 1].Jaar} </p>
                </div>
            );
        case false:
            console.log(sum + " km toegenomen");
            return (
                <div class ="storycontainer">
                    <img src="./ziekenhuis.png"></img>
                    <p>De afstand naar het dichtstbijzijnde ziekenhuis in <p class="highlighted">{props.passedData[0].GWB_NAAM}</p></p>
                    <p>is met <p class="highlighted">{sum} km </p>toegenomen</p>
                    <p class="sidenote">* tussen {props.passedData[0].Jaar} tot {props.passedData[props.passedData.length - 1].Jaar} </p>
                </div>
            );
    }
}

export default Ziekenhuis