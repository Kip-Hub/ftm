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

console.log(results)


  return(
    <>
      <table>
<tr>
  <th>Plaats</th>
  <th>Jaar</th>
  <th>Afstand huisarts</th>
  <th>Aantal inwoners</th>

</tr>
    {results.map((data, index) =>(
     
  <tr>
   <td>{data.GWB_NAAM}</td>
   <td>{data.Jaar}</td>
   <td>{data.huisarts_afst}</td>
   <td>{data.inwoners}</td>
  </tr>
  
    ))}
   

     </table>
    </>
  )}

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
