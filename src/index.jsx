import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import "./assets/css/style.css";

class App extends Component {
    render() {
        return (
            <Fragment>

            <div className="w-100 bckgrnd">

            <Navbar />

            <div className="container pt-5">

            <div className="row pt-5">
                
                <div className="col-12">

                <h1 className="h1-head">გამარჯობა მსოფლიო!</h1>

                </div>

            <div className="col-6 mt-4">

            <div className="w-100">

            <h3 className="h3-head">ორიოდე სიტყვა ჩემს შესახებ!</h3>
            <p className="p-paragraph">&nbsp;&nbsp;მოგესალმებით მე გახლავართ ავთანდილ საგინაშვილი, ვმუშაობ FrontEnd დეველოპერად მაქვს რამდენიმე
                    ნამუშევარი რაც მინდა რომ გაგიზიაროთ. იმედია მოგეწონებათ და თხოვნა მექნება გამოხატოთ რეაქცია.<br />
                    &nbsp;&nbsp;თუ გსურთ მეტი გაიგოთ ჩემს შესახებ გადადით <a href="#">"ჩემს შესახებ"</a> განყოფილებაში.
                </p>

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