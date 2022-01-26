import React, { Component } from 'react';

const Summary = (props) => {

const basisFirstYear = props.passedData[0].basis_afst.replaceAll(',', '.');
const basisLastYear = props.passedData[props.passedData.length - 1].basis_afst.replaceAll(',', '.');
let basisSum = Math.round(parseFloat(basisLastYear - basisFirstYear)*100)/100;

const vmboFirstYear = props.passedData[0].basis_afst.replaceAll(',', '.');
const vmboLastYear = props.passedData[props.passedData.length - 1].basis_afst.replaceAll(',', '.');
let vmboSum = Math.round(parseFloat(vmboLastYear - vmboFirstYear)*100)/100;

const havovwoFirstYear = props.passedData[0].havovwo_afst.replaceAll(',', '.');
const havovwoLastYear = props.passedData[props.passedData.length - 1].havovwo_afst.replaceAll(',', '.');
let havovwoSum = Math.round(parseFloat(havovwoLastYear - havovwoFirstYear)*100)/100;

const bibFirstYear = props.passedData[0].bibliotheek_afst.replaceAll(',', '.');
const bibLastYear = props.passedData[props.passedData.length - 1].bibliotheek_afst.replaceAll(',', '.');
let bibSum = Math.round(parseFloat(bibLastYear - bibFirstYear)*100)/100;

const ziekFirstYear = props.passedData[0].ziekenhuis_incl_afst.replaceAll(',', '.');
const ziekLastYear = props.passedData[props.passedData.length - 1].ziekenhuis_incl_afst.replaceAll(',', '.');
let ziekSum = Math.round(parseFloat(ziekLastYear - ziekFirstYear)*100)/100;



return (
    <div class ="storycontainer">
        <h2>Hoe gaat het eraan toe in <span class="highlighted">{props.passedData[0].GWB_NAAM}</span></h2>
        <div class ="storycontent">
            <p>Afstand basisschool: {(() => {
                switch (basisSum <= 0) {
                    case true:   return <span class="green"> {basisSum.toString().replaceAll('-','')} km</span>;
                    case false: return <span class="red"> {basisSum} km</span>;
                }
            })()}</p>
                
            <p>Afstand vmbo: {(() => {
                switch (vmboSum <= 0) {
                    case true:   return <span class="green"> {vmboSum.toString().replaceAll('-','')} km</span>;
                    case false: return <span class="red"> {vmboSum} km</span>;
                }
            })()}</p>

            <p>Afstand havo/vwo: {(() => {
                switch (havovwoSum <= 0) {
                    case true:   return <span class="green"> {havovwoSum.toString().replaceAll('-','')} km</span>;
                    case false: return <span class="red"> {havovwoSum} km</span>;
                }
            })()}</p>

            <p>Afstand bibliotheek: {(() => {
                switch (bibSum <= 0) {
                    case true:   return <span class="green"> {bibSum.toString().replaceAll('-','')} km</span>;
                    case false: return <span class="red"> {bibSum} km</span>;
                }
            })()}</p>

            <p>Afstand ziekenhuis: {(() => {
                switch (ziekSum <= 0) {
                    case true:   return <span class="green"> {ziekSum.toString().replaceAll('-','')} km</span>;
                    case false: return <span class="red"> {ziekSum} km</span>;
                }
            })()}</p>
            <p class="sidenote"> <span class="green">groen</span> : niet veranderd / verkleind </p>
            <p class="sidenote"> <span class="red">rood</span> : afstand vergroot </p>
        </div>
        
    </div>
);
}

export default Summary