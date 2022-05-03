import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddInspector from "./components/AddInspector";

import { BrowserRouter } from "react-router-dom";
import MapContainer from "./components/MapContainer";
import Maps from "./components/Map";
import SignIn from "./components/SignIn";
import Administraitor from "./components/Administrator";
import DeleteInspector from "./components/DeleteInspector";
import AddShift from "./components/AddShift";
function App() {

  // const hhh = () => {
  //   fetch(
  //     "http://moran.mot.gov.il:110/Channels/HTTPChannel/SmQuery/2.8/xml?Key=AR36156187&MonitoringRef=32902",
  //     { method: "POST", headers:{'Accept':'application/xml'} }
  //   ).then(x=>console.log(x));
  // };

  return (
    <div className="App">
      {/* <Administrator/> */}
      {/* <AddInspector/> */}
      <SignIn/>
      {/* <AddShift/> */}
      {/* <DeleteInspector/> */}
    {/* <AddInspector/> */}
    {/* <button onClick={hhh}>click</button>
    <BrowserRouter> */}
    
    {/* <Maps/> */}
    {/* <MapContainer/>
    </BrowserRouter> */}
     </div>
  );
}

export default App;
