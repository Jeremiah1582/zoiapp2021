import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";

//this is the import for Bootstrap MDBreact
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
//jose's CSS
import "./index.css";
//bootstrap custom SCSS
// import "./styling/custom_bootstrap.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
