import React from "react";
import {createRoot} from 'react-dom/client';
import Heatmap from "./Heatmap/heatmap";
import { Routes, Route, HashRouter as Router, Navigate} from "react-router-dom";
import Navbarcustom from "./Navbar/navbar";
import { DATA_URL_MAP1, DATA_URL_MAP2, DATA_URL_MAP3, DATA_URL_MAP4, GEOJSON_URL_MAP1, GEOJSON_URL_MAP2, GEOJSON_URL_MAP3, GEOJSON_URL_MAP4, IFRAME_URL_AUDIOM_MAP1, IFRAME_URL_AUDIOM_MAP2, IFRAME_URL_AUDIOM_MAP3, IFRAME_URL_AUDIOM_MAP4 } from "./constants/constants";
import AccessibleTables from "./Tables/accessible-tables";
import Audiom from "./Audiom/audiom";
import Home from "./Home/home";

function App() {
    console.log('inside app');
    return (
        <div>
        <Router>
          <Navbarcustom/>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/maps/map1"
          element={<Heatmap pageTitle="Visual Map 1" geojsonUrl={GEOJSON_URL_MAP1} dataUrl={DATA_URL_MAP1}/>} />
          <Route path="/maps/map2"
          element={<Heatmap pageTitle="Visual Map 2" geojsonUrl={GEOJSON_URL_MAP2} dataUrl={DATA_URL_MAP2}/>} />
          <Route path="/maps/map3"
          element={<Heatmap pageTitle="Visual Map 3" geojsonUrl={GEOJSON_URL_MAP3} dataUrl={DATA_URL_MAP3}/>} />
          <Route path="/maps/map4"
          element={<Heatmap pageTitle="Visual Map 4" geojsonUrl={GEOJSON_URL_MAP4} dataUrl={DATA_URL_MAP4}/>} />

          <Route path="/tables/table1"
          element={<AccessibleTables pageTitle="Table Map 1" dataUrl={DATA_URL_MAP1} />} />
          <Route path="/tables/table2"
          element={<AccessibleTables pageTitle="Table Map 2" dataUrl={DATA_URL_MAP2} />} />
          <Route path="/tables/table3"
          element={<AccessibleTables pageTitle="Table Map 3" dataUrl={DATA_URL_MAP3} />} />
          <Route path="/tables/table4"
          element={<AccessibleTables pageTitle="Table Map 4" dataUrl={DATA_URL_MAP4} />} />


          <Route path="/audiom/map1"
          element={<Audiom pageTitle="Audiom Map 1" iframeUrl={IFRAME_URL_AUDIOM_MAP1}/>} />
          <Route path="/audiom/map2"
          element={<Audiom pageTitle="Audiom Map 2" iframeUrl={IFRAME_URL_AUDIOM_MAP2}/>} />
          <Route path="/audiom/map3"
          element={<Audiom pageTitle="Audiom Map 3" iframeUrl={IFRAME_URL_AUDIOM_MAP3}/>} />
          <Route path="/audiom/map4"
          element={<Audiom pageTitle="Audiom Map 4" iframeUrl={IFRAME_URL_AUDIOM_MAP4}/>} />
  
            {/* 👇️ only match this when no other routes match */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </Router>
        </div>
        );
}

const container = document.getElementById('map');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App/>);
