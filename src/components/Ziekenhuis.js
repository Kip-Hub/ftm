import React, { Component } from 'react';

const Ziekenhuis = (props) => {

    const firstYear = props.passedData[0].ziekenhuis_excl_afst.replaceAll(',', '.');
    const lastYear = props.passedData[props.passedData.length - 1].ziekenhuis_excl_afst.toString().replaceAll(',', '.');
    let sumToRound = lastYear - firstYear;
    let sum = Math.round(parseFloat(sumToRound) * 100) / 100;

    switch (sum < 0) {
        case true:
            return (
                <div class="storycontainer">
                    <img src="./ziekenhuis.png"></img>
                    <div class="storycontent">
                        <p>Bij een noodgeval moet je nu <span class="highlighted"> {lastYear} km</span> rijden naar het ziekenhuis. Dit was voorheen<span class="highlighted"> {firstYear} km</span>.</p>
                        <p class="sidenote">* afname van <span class="bold">{sum.toString().replaceAll('-', '')}</span> tussen  <span class="bold">{props.passedData[0].Jaar}</span> en <span class="bold">{props.passedData[props.passedData.length - 1].Jaar}</span> </p>
                        <img src='./ziekenhuis_dotplot.png' class="dotplot"></img>
                    </div>
                </div>
            );
        case false:
            return (
                <div class="storycontainer">
                    <img src="./ziekenhuis.png"></img>
                    <div class="storycontent">
                        <p>Bij een noodgeval moet je nu <span class="highlighted"> {lastYear} km</span> rijden naar het ziekenhuis. Dit was voorheen<span class="highlighted"> {firstYear} km</span>.</p>
                        <p class="sidenote">* toename van <span class="bold">{sum}</span> tussen  <span class="bold">{props.passedData[0].Jaar}</span> en <span class="bold">{props.passedData[props.passedData.length - 1].Jaar}</span> </p>
                        <img src='./ziekenhuis_dotplot.png' class="dotplot"></img>
                    </div>
                </div>
            );
    }
}

export default Ziekenhuis