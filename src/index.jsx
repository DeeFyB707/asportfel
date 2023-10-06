import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import "./css/style.css";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
            </Fragment>
        )
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);