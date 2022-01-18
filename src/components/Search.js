import React, { useState, useEffect } from "react";
import { csv } from "d3";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import StoryTest from "./StoryTest";


const Search = () => {

  const [postcode, setPostcode] = useState("");
  const [postcodeLink, setpostcodeLink] = useState(null);
  const [cbsData, setcbsData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await fetch("./CBS.json")
        .then((response) => response.json())
        .then((data) => {
          setcbsData(data);
        });

      const response = await csv("./jointable.csv");
      setpostcodeLink(response);
    };

    getData();
  }, []);

  const onSearch = () => {
    const input = postcode.toUpperCase();
    let areaCode = postcodeLink.filter((d) => d.PC6 === input)[0];
    let combinedData = cbsData.filter((d) =>
      d.GWB_CODE.includes(areaCode.Buurt2020)
    );
    console.log(combinedData);
  };

    return (
      <Router>
            <section>
              <p>Hoe gaat het er in jouw buurt aan toe?</p>
                <input
                    placeholder="1234AB"
                    id="postcodeInput"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    />
                    <Link to="/search"><button id="doe" onClick={onSearch}>Bekijk jouw buurt</button></Link>
            </section>
        <Routes>
          <Route exact path="/search" element={<StoryTest/>}></Route>
        </Routes>
      </Router>
    )
}



export default Search

