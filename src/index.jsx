import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./assets/css/style.css";
import "./script.js";
import SpeakerIcon from "./assets/pics/speakerIcon.svg";
import peace from "./assets/pics/peace2.png";
import Sound from "./assets/media/Wanted.mp3";
import Carousel from "./Carousel.jsx";





class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isPlaying: false,
          audio: new Audio(Sound), 
        };
      }
    
      // Function to play or pause the audio
      togglePlay = () => {
        const audio = this.state.audio;
        if (this.state.isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        this.setState({ isPlaying: !this.state.isPlaying });
      }
      
      


    render() {
        return (
        <div className="w-100">

            <Navbar />

            <div className="w-100">
            <div className="container position-relative pb-5">

            <span className="position-absolute githubsky">Github</span>

            <div className="position-absolute playMusic">
                <audio className="mp3" id="audio" src={Sound}></audio>
                <button onClick={this.togglePlay} className="speakerbtn" type="button">
                <img className="spkr" src={SpeakerIcon} alt="SpeakerIcon" />
                </button>
            </div>

            <div className="row">

            <div className="col-md-5 col-12 pt-3">

            <div className="textbox">

            <p className="p-hello">_Hello world. _I am</p>
            <h2 className="h2-name">ავთანდილ საგინაშვილი<br />Avtandil Saginashvili</h2>
            <p className="p-frontend"><span className="material-symbols-outlined">
                chevron_right
                </span>&nbsp;Front-end developer
            </p>

            <p className="text-warning shadowdown d-none d-md-block">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>

            <p className="p-comment">
                // თქვენ შეგიძლიათ ნახოთ ჩემი გითჰაბის/<span className="github">Github</span> გვერდი:
            </p>

            <p className="getshadow"><span className="let">let</span> <span className="letlink">Link</span> <span className="text-light sumshadow">=</span> <a className="gitlink" href="https://github.com/DeeFyB" target="_blank">"https://github.com/DeeFyB"</a></p>

            </div>

            </div>

            <div className="col-md-7 col-12">

            <div className="w-100">

            <img className="w-100" src={peace} alt="peace" />

            </div>

            </div>

            </div>

            </div>

            <hr className="hr-cent" />

            <div className="container-fluid">

            <div className="row mt-5 pt-5">

            <div className="col-12 p-0">
              <Carousel />
            </div>

            </div>
            </div>
            </div>

            <Footer />
        </div>
        )
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);