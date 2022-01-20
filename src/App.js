import React, { useState, useEffect } from "react";
import { csv } from "d3";
import './App.css';

function App() {

  const [postcode, setPostcode] = useState("");
  const [postcodeLink, setpostcodeLink] = useState(null);
  const [cbsData, setcbsData] = useState(null);
  const [results, setResults] = useState([])

  useEffect(() => {
    const getData = async () => {
      await fetch("./cbs.json")
        .then((response) => response.json())
        .then((data) => {
          setcbsData(data);
        });

      const response = await csv("./areacodes.csv");
      setpostcodeLink(response);
    };

    getData();
  }, []);


  const createList = () => {

    results.forEach((data, index) => {

      let propNames = Object.keys(data)
      let dinges = propNames

      data.Jaar = Number(data.Jaar)
      let fixed = data.ziekenhuis_excl_afst.toString()
      data.ziekenhuis_excl_afst = fixed.replace(/,/g, '.')
      data.ziekenhuis_excl_afst = Number(data.ziekenhuis_excl_afst)
      let yot = data.basis_afst.toString()
      data.basis_afst = yot.replace(/,/g, '.')
      data.basis_afst = Number(data.basis_afst)


    })
    const highestValue = Math.max.apply(Math, results.map(data => { return data.ziekenhuis_excl_afst; }))
    const highestSchoolValue = Math.max.apply(Math, results.map(function (o) { return o.basis_afst; }))
    const filtered = results.filter(word => word.ziekenhuis_excl_afst === highestValue).map(function (o) {
       console.log(results) 
       return o.Jaar })
    const basis = results.filter(word => word.basis_afst === highestSchoolValue).map(function (o) {
      return o.Jaar
    })




    return (
      <>
        <table>
          <tr>
            <th>Plaats</th>
            <th>Jaar</th>
            <th>Afstand huisarts</th>
            <th>Aantal inwoners</th>

          </tr>
          {results.map((data, index) => (

            <tr>
              <td>{data.GWB_NAAM}</td>
              <td>{data.Jaar}</td>
              <td>{data.ziekenhuis_excl_afst}</td>
              <td>{data.inwoners}</td>
              <td>{data.basis_afst}</td>

            </tr>

          ))}

          <h1> yoo de verste ziekenhuis is {highestValue} in {filtered.map(jaar => (
            <p>{jaar}</p>
          ))}</h1>
          <h2>yoo de verste basisschool is {highestSchoolValue} in{basis.map(jaar => (
            <p>{jaar}</p>
          ))} </h2>

        </table>
      </>
    )
  }

  const onSearch = () => {

    const input = postcode.toUpperCase();
    let areaCode = postcodeLink.filter((d) => d.PC6 === input)[0];

    let combinedData = cbsData.filter((d) =>
      d.GWB_CODE.includes(areaCode.Buurt2020)
    );

    setResults(combinedData)
  };






  return (
    <section>
      <p>Hoe gaat het er in jouw buurt aan toe?</p>
      <input
        placeholder="1234AB"
        id="postcodeInput"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
      />
      <button onClick={onSearch}>Bekijk jouw buurt</button>
      {createList()}

    </section>
  )
}

export default App;
