import React from "react";
import Logo from "./pics/Logo.png";

class Navbar extends React.Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img className="logo" src={Logo} alt="Logo" style={{width:"60px", height:"60px"}} />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link navLinks" aria-current="page" href="#">მთავარი</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navLinks2 ms-3" href="#">ჩემს შესახებ</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link navLinks3 ms-3">ჩემი პორტფოლიო</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link navLinks4 ms-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            კონტაქტი
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"></a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        )
    }
}

export default Navbar;