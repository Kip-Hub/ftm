import React, { Component } from 'react';

const Basisschool = (props) => {

const firstYear = props.passedData[0].basis_afst.replaceAll(',', '.');
const lastYear = props.passedData[props.passedData.length - 1].basis_afst.replaceAll(',', '.');
let sumToRound = lastYear - firstYear;
let sum = Math.round(parseFloat(sumToRound)*100)/100;

console.log(props.passedData[0].Jaar + " " + firstYear);
console.log(props.passedData[props.passedData.length - 1].Jaar + " " + lastYear);

    switch (sum < 0){
        case true:
            console.log(sum.toString().replaceAll('-','') + " km afgenomen");
            return (
                <div class ="storycontainer">
                    <img src="./basisschool.png"></img>
                    <div class="storycontent">
                        <p>De afstand naar de dichtstbijzijnde basisschool in <span class="highlighted">{props.passedData[0].GWB_NAAM}</span> is met <span class="highlighted">{sum.toString().replaceAll('-','')} km </span>afgenomen</p>
                        <p class="sidenote">* tussen {props.passedData[0].Jaar} en {props.passedData[props.passedData.length - 1].Jaar} </p>
                    </div>
                </div>
            );
        case false:
            console.log(sum + " km toegenomen");
            return (
                <div class ="storycontainer">
                    <img src="./basisschool.png"></img>
                    <div class="storycontent">
                        <p>De afstand naar de dichtstbijzijnde basisschool in <span class="highlighted">{props.passedData[0].GWB_NAAM}</span> is met <span class="highlighted">{sum} km </span>toegenomen</p>
                        <p class="sidenote">* tussen {props.passedData[0].Jaar} en {props.passedData[props.passedData.length - 1].Jaar} </p>
                    </div>
                </div>
            );
    }
}

export default Basisschool