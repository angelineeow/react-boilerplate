// module system: 
import HelloMessage from "./components/HelloMessage"
import ReactDOM from "react-dom/client";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloMessage name="Angeline" />)