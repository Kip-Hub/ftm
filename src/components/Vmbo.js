import React, { Component } from 'react';

const Vmbo = (props) => {

const firstYear = props.passedData[0].vmbo_afst.replaceAll(',', '.');
const lastYear = props.passedData[props.passedData.length - 1].vmbo_afst.replaceAll(',', '.');
let sumToRound = lastYear - firstYear;
let sum = Math.round(parseFloat(sumToRound)*100)/100;

console.log(props.passedData[0].Jaar + " " + firstYear);
console.log(props.passedData[props.passedData.length - 1].Jaar + " " + lastYear);

    switch (sum < 0){
        case true:
            console.log(sum.toString().replaceAll('-','') + " km afgenomen");
            return (
                <div class ="storycontainer">
                    <img src="./vmbo.png"></img>
                    <p>De afstand naar de dichtstbijzijnde vmbo school in <p class="highlighted">{props.passedData[0].GWB_NAAM}</p></p>
                    <p>is met <p class="highlighted">{sum.toString().replaceAll('-','')} km </p>afgenomen</p>
                    <p class="sidenote">* tussen {props.passedData[0].Jaar} en {props.passedData[props.passedData.length - 1].Jaar} </p>
                </div>
            );
        case false:
            console.log(sum + " km toegenomen");
            return (
                <div class ="storycontainer">
                    <img src="./vmbo.png"></img>
                    <p>De afstand naar de dichtstbijzijnde vmbo school in <p class="highlighted">{props.passedData[0].GWB_NAAM}</p></p>
                    <p>is met <p class="highlighted">{sum} km </p>toegenomen</p>
                    <p class="sidenote">* tussen {props.passedData[0].Jaar} en {props.passedData[props.passedData.length - 1].Jaar} </p>
                </div>
            );
    }
}

export default Vmbo