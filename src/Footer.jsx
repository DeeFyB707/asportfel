import React from "react";
import {ReactComponent as Discord} from "./assets/pics/discord.svg";
import {ReactComponent as Face} from "./assets/pics/facebook.svg";
import {ReactComponent as Instagram} from "./assets/pics/instagram.svg";
import {ReactComponent as Linkedin} from "./assets/pics/linkedin.svg";
import {ReactComponent as Github} from "./assets/pics/github.svg";




class Footer extends React.Component {
    render() {
        return (
            <footer className="w-100">

                <div className="container-fluid footborder">

                <div className="row">

                <div className="col-md-1 col-12 colborder" >

                <div className="w-100">

                <p className="findMe">find me:</p>

                </div>

                </div>

                <div className="col-md-1 col-3 colborder1">

                <div className="w-100 h-100 d-flex align-items-center justify-content-center">

                <a href="#"><Face className="social" /></a>

                </div>

                </div>
                
                <div className="col-md-1 col-3 colborder1">

                <div className="w-100 h-100 d-flex align-items-center justify-content-center">

                <a href="#"><Instagram className="social2" /></a>

                </div>

                </div>

                <div className="col-md-1 col-3 colborder1">

                <div className="w-100 h-100 d-flex align-items-center justify-content-center">

                <a href="#"><Linkedin className="social3" /></a>

                </div>

                </div>

                <div className="col-md-1 col-3 colborder1">

                <div className="w-100 h-100 d-flex align-items-center justify-content-center">

                <a href="#"><Discord className="social" /></a>

                </div>

                </div>

                <div className="col-md-6 col-12">

                <div className="w-100 h-100 d-flex align-items-end justify-content-center">

                <p className="copyright"><span className="material-symbols-outlined">copyright</span>- ავთანდილ საგინაშვილი
                </p>

                </div>

                </div>

                <div className="col-md-1 col-12 colborder707">

                <div className="w-100 h-100 d-flex align-items-center justify-content-center">

                <p className="deefyb">@DeeFyB</p>

                <Github className="social4" />

                </div>

                </div>

                </div>

                </div>

            </footer>
        )
    }
}

export default Footer;