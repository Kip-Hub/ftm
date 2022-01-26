import React, { Component } from 'react';

const Vmbo = (props) => {

const firstYear = props.passedData[0].vmbo_afst.replaceAll(',', '.');
const lastYear = props.passedData[props.passedData.length - 1].vmbo_afst.toString().replaceAll(',', '.');
let sumToRound = lastYear - firstYear;
let sum = Math.round(parseFloat(sumToRound)*100)/100;

    switch (sum < 0){
        case true:
            return (
                <div class ="storycontainer">
                    <img src="./vmbo.png"></img>
                    <div class="storycontent">
                    <p>Vmbo leerlingen moesten eerst <span class="highlighted"> {firstYear} km   </span> naar hun school afleggen, nu bedraagt die afstand <span class="highlighted">{lastYear} km </span></p>
                        <p class="sidenote">* afname van <span class="bold">{sum.toString().replaceAll('-','')}</span> tussen  <span class="bold">{props.passedData[0].Jaar}</span> en <span class="bold">{props.passedData[props.passedData.length - 1].Jaar}</span> </p>
                        <img src='./vmbo_dotplot.png' class="dotplot"></img>
                    </div>
                </div>
            );
        case false:
            return (
                <div class ="storycontainer">
                    <img src="./vmbo.png"></img>
                    <div class="storycontent">
                        <p>Vmbo leerlingen moesten eerst <span class="highlighted"> {firstYear} km   </span> naar hun school afleggen, nu bedraagt die afstand <span class="highlighted">{lastYear} km </span></p>
                        <p class="sidenote">* toename van <span class="bold">{sum}</span> tussen  <span class="bold">{props.passedData[0].Jaar}</span> en <span class="bold">{props.passedData[props.passedData.length - 1].Jaar}</span> </p>
                        <img src='./vmbo_dotplot.png' class="dotplot"></img>
                    </div>
                </div>
            );

    }
}

export default Vmbo