import React, { Component } from 'react';

const Ziekenhuis = (props) => {

const firstYear = props.passedData[0].ziekenhuis_incl_afst.replaceAll(',', '.');
const lastYear = props.passedData[props.passedData.length - 1].ziekenhuis_incl_afst.replaceAll(',', '.');
let sumToRound = lastYear - firstYear;
let sum = Math.round(parseFloat(sumToRound)*100)/100;

console.log(props.passedData[0].Jaar + " " + firstYear);
console.log(props.passedData[props.passedData.length - 1].Jaar + " " + lastYear);

    switch (sum < 0){
        case true:
            console.log(sum.toString().replaceAll('-','') + " km afgenomen");
            return (
                <div class ="storycontainer">
                    <img src="./ziekenhuis.png"></img>
                    <div class="storycontent">
                        <p>De afstand naar het dichtstbijzijnde ziekenhuis in <span class="highlighted">{props.passedData[0].GWB_NAAM}</span> is met <span class="highlighted">{sum.toString().replaceAll('-','')} km </span>afgenomen</p>
                        <p class="sidenote">* tussen {props.passedData[0].Jaar} en {props.passedData[props.passedData.length - 1].Jaar} </p>
                        <img src='./ziekenhuis_dotplot.png' class="dotplot"></img>
                    </div>
                </div>
            );
        case false:
            console.log(sum + " km toegenomen");
            return (
                <div class ="storycontainer">
                    <img src="./ziekenhuis.png"></img>
                    <div class="storycontent">
                        <p>De afstand naar het dichtstbijzijnde ziekenhuis in <span class="highlighted">{props.passedData[0].GWB_NAAM}</span> is met <span class="highlighted">{sum} km </span>toegenomen</p>
                        <p class="sidenote">* tussen {props.passedData[0].Jaar} en {props.passedData[props.passedData.length - 1].Jaar} </p>
                        <img src='./ziekenhuis_dotplot.png' class="dotplot"></img>
                    </div>
                </div>
            );
    }
}

export default Ziekenhuis