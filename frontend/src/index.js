import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import MyProvider from "./Context_APIs/userContextAPI"
//jose's CSS

// import './styling/customDashboard.scss'
//bootstrap custom SCSS
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render( 
<React.StrictMode>
<MyProvider>
 <App />
</MyProvider>
</React.StrictMode>,
  document.getElementById("root")
);
