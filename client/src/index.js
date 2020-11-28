import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


//Socket listener
window.ioSocket.on('message', function (msg) {
    window.M.toast({ html: msg });
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
