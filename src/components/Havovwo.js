import React, { Component } from 'react';

const Havovwo = (props) => {

const firstYear = props.passedData[0].havovwo_afst.replaceAll(',', '.');
const lastYear = props.passedData[props.passedData.length - 1].havovwo_afst.toString().replaceAll(',', '.');
let sumToRound = lastYear - firstYear;
let sum = Math.round(parseFloat(sumToRound)*100)/100;

console.log(props.passedData[0].Jaar + " " + firstYear);
console.log(props.passedData[props.passedData.length - 1].Jaar + " " + lastYear);

    switch (sum < 0){
        case true:
            console.log(sum.toString().replaceAll('-','') + " km afgenomen");
            return (
                <div class ="storycontainer">
                    <img src="./havovwo.png"></img>
                    <div class="storycontent">
                    <p>Na de basisschool moesten leerlingen eerst <span class="highlighted"> {firstYear} km   </span> naar de havo/vwo school  lopen, nu <span class="highlighted">{lastYear} km </span></p>
                        <p class="sidenote">* afname van <span class="bold">{sum.toString().replaceAll('-','')}</span> tussen  <span class="bold">{props.passedData[0].Jaar}</span> en <span class="bold">{props.passedData[props.passedData.length - 1].Jaar}</span> </p>
                        <img src='./havovwo_dotplot.png' class="dotplot"></img>
                    </div>
                </div>
            );
        case false:
            console.log(sum + " km toegenomen");
            return (
                <div class ="storycontainer">
                    <img src="./havovwo.png"></img>
                    <div class="storycontent">
                    <p>Na de basisschool moesten leerlingen eerst <span class="highlighted"> {firstYear} km   </span> naar de havo/vwo school  lopen, nu <span class="highlighted">{lastYear} km </span></p>
                        <p class="sidenote">* toename van <span class="bold">{sum}</span> tussen  <span class="bold">{props.passedData[0].Jaar}</span> en <span class="bold">{props.passedData[props.passedData.length - 1].Jaar}</span> </p>
                        <img src='./havovwo_dotplot.png' class="dotplot"></img>
                    </div>
                </div>
            );
    }
}

export default Havovwo