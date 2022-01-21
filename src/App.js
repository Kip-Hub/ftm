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


    function createNumbers(obj) {
      results.forEach((data, index) => {
        let fixed = data[obj].toString()
        data[obj] = fixed.replace(/,/g, '.')
        data[obj] = Number(data[obj])
      })

    }

    function filterData(obj) {
      createNumbers(obj)
      const hoogste = Math.max.apply(Math, results.map(data => { return data[obj]; }))
      const behorendJaar = results.filter(word => word[obj] === hoogste).map(function (o) {
        return o.Jaar
      })
      return (
        <>
        <section>
          
          <p>De verste afstand van  naar een {obj} was <strong>{hoogste} </strong>kilometer.</p>
          <p>Dit was in:
            {behorendJaar.map(jaar => (

              <strong> {jaar},</strong>
            ))}
          </p>
          </section>

        </>
      )

    }

    return (
      <>
        {filterData('huisarts_afst')}
        {filterData('ziekenhuis_excl_afst')}
        {filterData('basis_afst')}
        {filterData('bibliotheek_afst')}
        {filterData('vmbo_afst')}
        {filterData('havovwo_afst')}



        <table>


          <tr>
            <th>Plaats</th>
            <th>Jaar</th>
            <th>Afstand ziekenhuis</th>
            <th>Aantal inwoners</th>
            <th>Afstand basisschool</th>

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
