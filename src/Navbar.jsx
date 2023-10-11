import React from "react";

class Navbar extends React.Component {
    render() {
        return(
          <header className="mt-1">
            <nav class="navbar navbar-expand-lg navborder pt-0 pb-0">
              <div class="container-fluid">
                <a class="navbar-brand branditem pe-5" href="#">_avTandilSaginashvili</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item ms-auto liborder1 pt-2 pb-2 ps-4 pe-4">
                      <a class="nav-link navLinks" aria-current="page" href="#">_hello</a>
                    </li>
                    <li class="nav-item ms-auto liborder pt-2 pb-2 ps-4 pe-4 ">
                      <a class="nav-link navLinks" href="#">_aboutMe</a>
                    </li>
                    <li class="nav-item ms-auto liborder pt-2 pb-2 ps-4 pe-4 ">
                      <a href="#" class="nav-link navLinks">_projects</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        )
    }
}

export default Navbar;