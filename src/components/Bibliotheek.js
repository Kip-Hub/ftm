import React, { Component } from 'react';

const Bibliotheek = (props) => {

    const firstYear = props.passedData[0].bibliotheek_afst.toString().replaceAll(',', '.');
    const lastYear = props.passedData[props.passedData.length - 1].bibliotheek_afst.toString().replaceAll(',', '.');
    let sumToRound = lastYear - firstYear;
    let sum = Math.round(parseFloat(sumToRound) * 100) / 100;

    switch (sum < 0) {
        case true:
            return (
                <div class="storycontainer">
                    <div class="imagediv">
                        <img src="./bibliotheek.png"></img>
                    </div>
                    <div class="storycontent">
                        <p> Om een boek te lenen leg je nu <span class="highlighted">{sum.toString().replaceAll('-', '')} km   </span> minder af dan in <span class="highlighted">{props.passedData[0].Jaar}</span></p>
                        <p class="sidenote">* afname van <span class="bold">{sum.toString().replaceAll('-', '')}</span> tussen  <span class="bold">{props.passedData[0].Jaar}</span> en <span class="bold">{props.passedData[props.passedData.length - 1].Jaar}</span> </p>
                        <img src='./bibliotheek_dotplot.png' class="dotplot"></img>
                    </div>
                </div>
            );
        case false:
            return (
                <div class="storycontainer">
                    <div class="imagediv">
                        <img src="./bibliotheek.png"></img>
                    </div>
                    <div class="storycontent">
                        <p> Om een boek te lenen leg je nu <span class="highlighted"> {sum} km   </span> meer af dan in <span class="highlighted">{props.passedData[0].Jaar}. </span></p>
                        <p class="sidenote">* toename van <span class="bold">{sum}</span> tussen  <span class="bold">{props.passedData[0].Jaar}</span> en <span class="bold">{props.passedData[props.passedData.length - 1].Jaar}</span> </p>
                        <img src='./bibliotheek_dotplot.png' class="dotplot"></img>
                    </div>
                </div>
            );
    }
}

export default Bibliotheek