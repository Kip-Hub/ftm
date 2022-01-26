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
                    <p>Een kind liep in <span class="highlighted">{props.passedData[0].GWB_NAAM}</span> eerst  <span class="highlighted">{firstYear} km </span>naar de basisschool, nu is dat <span class="highlighted">{lastYear} km </span></p>
                        <p class="sidenote">* afname van <span class="bold">{sum.toString().replaceAll('-','')}</span> tussen {props.passedData[0].Jaar} en {props.passedData[props.passedData.length - 1].Jaar} </p>
                        <img src='./basisschool_dotplot.png' class="dotplot"></img>
                    </div>
                </div>
            );
        case false:
            console.log(sum + " km toegenomen");
            return (
                <div class ="storycontainer">
                    <img src="./basisschool.png"></img>
                    <div class="storycontent">
                        <p>Een kind liep in <span class="highlighted">{props.passedData[0].GWB_NAAM}</span> eerst  <span class="highlighted">{firstYear} km </span>naar de basisschool, nu is dat <span class="highlighted">{lastYear} km </span></p>
                        <p class="sidenote">* toename van <span class="bold">{sum}</span> tussen  <span class="bold">{props.passedData[0].Jaar}</span> en <span class="bold">{props.passedData[props.passedData.length - 1].Jaar}</span> </p>
                        <img src='./basisschool_dotplot.png' class="dotplot"></img>
                    </div>
                </div>
            );
    }
}

export default Basisschool