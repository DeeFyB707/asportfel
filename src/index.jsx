import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import "./assets/css/style.css";
import Blurs from "./assets/pics/Background Blurs.png";
import peace from "./assets/pics/peace.png";

class App extends Component {
    render() {
        return (
        <div className="w-100">

            

            <Navbar />

            <div className="container position-relative">

            <span className="position-absolute githubsky">Github</span>

            <div className="row">

            <div className="col-md-5 col-12 pt-5">

            <div className="textbox">

            <p className="p-hello">_Hello world. _I am</p>
            <h2 className="h2-name">ავთანდილ საგინაშვილი</h2>
            <p className="p-frontend"><span class="material-symbols-outlined">
                chevron_right
                </span>&nbsp;Front-end developer
            </p>

            <p className="text-warning shadowdown d-none d-md-block">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>

            <p className="p-comment">
                // თქვენ შეგიძლიათ ნახოთ ჩემი გითჰაბის/<span className="github">Github</span> გვერდი:
            </p>
            
            <p className="getshadow"><span className="let">let</span> <span className="letlink">Link</span> <span className="text-light sumshadow">=</span> <a className="gitlink" href="https://github.com/DeeFyB">"https://github.com/DeeFyB"</a></p>

            </div>

            </div>

            <div className="col-md-7 col-12">

            <div className="w-100">

            <img className="w-100" src={peace} alt="peace" />

            </div>

            </div>

            </div>

            </div>
        </div>
        )
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);