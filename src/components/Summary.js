import React, { Component } from 'react';

const Summary = (props) => {

    const basisFirstYear = props.passedData[0].basis_afst.toString().replaceAll(',', '.');
    const basisLastYear = props.passedData[props.passedData.length - 1].basis_afst.toString().replaceAll(',', '.');
    let basisSum = Math.round(parseFloat(basisLastYear - basisFirstYear) * 100) / 100;

    const vmboFirstYear = props.passedData[0].basis_afst.toString().replaceAll(',', '.');
    const vmboLastYear = props.passedData[props.passedData.length - 1].basis_afst.toString().replaceAll(',', '.');
    let vmboSum = Math.round(parseFloat(vmboLastYear - vmboFirstYear) * 100) / 100;

    const havovwoFirstYear = props.passedData[0].havovwo_afst.toString().replaceAll(',', '.');
    const havovwoLastYear = props.passedData[props.passedData.length - 1].havovwo_afst.toString().replaceAll(',', '.');
    let havovwoSum = Math.round(parseFloat(havovwoLastYear - havovwoFirstYear) * 100) / 100;

    const bibFirstYear = props.passedData[0].bibliotheek_afst.toString().replaceAll(',', '.');
    const bibLastYear = props.passedData[props.passedData.length - 1].bibliotheek_afst.toString().replaceAll(',', '.');
    let bibSum = Math.round(parseFloat(bibLastYear - bibFirstYear) * 100) / 100;

    const ziekFirstYear = props.passedData[0].ziekenhuis_incl_afst.toString().replaceAll(',', '.');
    const ziekLastYear = props.passedData[props.passedData.length - 1].ziekenhuis_incl_afst.toString().replaceAll(',', '.');
    let ziekSum = Math.round(parseFloat(ziekLastYear - ziekFirstYear) * 100) / 100;



    return (
        <div class="storycontainer">
            <h2 class="title"> Hoe erg is de verschraling in  <span class="highlighted">{props.passedData[0].GWB_NAAM}</span></h2>
            <img id="summaryImage" src='./summary.png'></img>
            <div class="summarycontent">
                <p>Afstand basisschool: {(() => {
                    switch (basisSum <= 0) {
                        case true: return <span class="blue"> {basisSum.toString().replaceAll('-', '')} km</span>;
                        case false: return <span class="red"> {basisSum} km</span>;
                    }
                })()}</p>

                <p>Afstand vmbo: {(() => {
                    switch (vmboSum <= 0) {
                        case true: return <span class="blue"> {vmboSum.toString().replaceAll('-', '')} km</span>;
                        case false: return <span class="red"> {vmboSum} km</span>;
                    }
                })()}</p>

                <p>Afstand havo/vwo: {(() => {
                    switch (havovwoSum <= 0) {
                        case true: return <span class="blue"> {havovwoSum.toString().replaceAll('-', '')} km</span>;
                        case false: return <span class="red"> {havovwoSum} km</span>;
                    }
                })()}</p>

                <p>Afstand bibliotheek: {(() => {
                    switch (bibSum <= 0) {
                        case true: return <span class="blue"> {bibSum.toString().replaceAll('-', '')} km</span>;
                        case false: return <span class="red"> {bibSum} km</span>;
                    }
                })()}</p>

                <p>Afstand ziekenhuis: {(() => {
                    switch (ziekSum <= 0) {
                        case true: return <span class="blue"> {ziekSum.toString().replaceAll('-', '')} km</span>;
                        case false: return <span class="red"> {ziekSum} km</span>;
                    }
                })()}</p>
                <p class="sidenote"> <span class="blue">blauw</span> : niet veranderd / verkleind </p>
                <p class="sidenote"> <span class="red">rood</span> : afstand vergroot </p>
            </div>
            <div class="sharecontainer">
                <img src="./facebook.png" class="icon"></img>
                <img src="./twitter.png" class="icon"></img>
                <img src="./instagram.png" class="icon"></img>
                <button id=''>Bekijk andere postcode</button>
            </div>
        </div>
    );
}

export default Summary