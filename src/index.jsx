import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import "./css/style.css";

class App extends Component {
    render() {
        return (
            <Fragment>

            <div className="w-100 bckgrnd">

            <Navbar />

            <div className="container pt-5">

            <div className="row pt-5">

            <div className="col-6">

            <div className="w-100">

            <h3></h3>

            </div>

            </div>

            </div>

            </div>

            </div>

            </Fragment>
        )
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);