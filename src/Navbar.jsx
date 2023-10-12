import React from "react";

class Navbar extends React.Component {
    render() {
        return(
          <header className="mt-1">
            <nav className="navbar navbar-expand-lg navborder pt-0 pb-0">
              <div className="container-fluid">
                <a className="navbar-brand branditem pe-5" href="#">_avTandilSaginashvili</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ms-auto liborder1 pt-2 pb-2 ps-4 pe-4">
                      <a className="nav-link navLinks" aria-current="page" href="#">_hello</a>
                    </li>
                    <li className="nav-item ms-auto liborder pt-2 pb-2 ps-4 pe-4 ">
                      <a className="nav-link navLinks" href="#">_aboutMe</a>
                    </li>
                    <li className="nav-item ms-auto liborder pt-2 pb-2 ps-4 pe-4 ">
                      <a href="#" className="nav-link navLinks">_projects</a>
                    </li>
                  </ul>
                </div>
                <div className="h-auto p-3 ps-4 pe-4 borderdiv">
                <a className="contact" href="#">_contactMe</a>
                </div>
              </div>
            </nav>
          </header>
        )
    }
}

export default Navbar;