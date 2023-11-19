import React from "react";

class Navbar extends React.Component {
    render() {
        return(
          <header className="mt-1">
            <nav className="navbar navbar-expand-lg navborder pt-0 pb-0">
              <div className="container-fluid">
                <a className="navbar-brand branditem pe-5" href="https://asportfel.vercel.app/">_avTandilSaginashvili</a>
                <button className="navbar-toggler burgerbtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <label className="hamburger-menu">
                    <input type="checkbox" />
                  </label>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ms-auto liborder1 pt-2 pb-2 ps-4 pe-4">
                      <a className="nav-link navLinks" aria-current="page" href="https://asportfel.vercel.app/">_hello</a>
                    </li>
                    <li className="nav-item ms-auto liborder pt-2 pb-2 ps-4 pe-4 ">
                      <a className="nav-link navLinks" href="#">_aboutMe</a>
                    </li>
                    <li className="nav-item ms-auto liborder pt-2 pb-2 ps-4 pe-4 ">
                      <a href="#" className="nav-link navLinks">_projects</a>
                    </li>
                    <div className="h-auto p-3 ps-4 pe-4 borderdiv ms-auto">
                    <li className="nav-item ms-auto"><a className="contact" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">_contactMe</a></li>
                    </div>
                    
                  </ul>
                </div>

              </div>
            </nav>
            <div class="offcanvas offcanvas-top canvasbckg" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title canvastitle" id="offcanvasExampleLabel">// იხილეთ საკონტაქტო ინფორმაცია</h5>
              <button type="button" class="btn-close closebutt" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div className="w-100 pt-4">
                <p className="tel">_tel: +995551574747 | +995514707997</p>
                <p className="tel">_viber | whatsup: +995514707997</p>
                <p className="tel">_email: a.saginashvili707@outlook.com</p>
              </div>
            </div>
          </div>
          </header>
        )
    }
}

export default Navbar;