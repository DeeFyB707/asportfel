import React from "react";
import Html from "./assets/pics/html5-logo-24.png";
import Css from "./assets/pics/css3-logo-24.png";
import Bootstrap from "./assets/pics/bootstrap-logo-24.png";
import Js from "./assets/pics/javascript-logo-24.png";
import ReactLogo from "./assets/pics/react-logo-24.png";
import Git from "./assets/pics/git-logo-24.png";

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
                    <div className="h-auto p-3 ps-4 pe-4 borderdiv ms-auto">
                    <li className="nav-item ms-auto"><a className="contact" data-bs-toggle="offcanvas" href="#offcanvasExample2" role="button" aria-controls="offcanvasExample">_aboutMe</a></li>
                    </div>
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
          <div class="offcanvas offcanvas-top canvasbckg2" tabindex="-2" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title canvastitle" id="offcanvasExampleLabel">// ჩემს შესახებ</h5>
              <button type="button" class="btn-close closebutt" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div className="w-100 pt-4">
                <p className="tel">_hello World!/გამარჯობა მე ვარ ავთანდილ საგინაშვილი <b className="frontB">"Front-End Developer"</b>, მოხარული ვარ თქვენი გაცნობით.<br />
                უკვე წელიწადზე მეტია რაც შემოვდგი ფეხი ამ სფეროში, ეს იყო ალბათ ჩემთვის ერთ-ერთი საუკეთესო გადაწყვეტილება ჩემს ცხოვრებაში, მინდა გაგიზიაროთ ჩემი გზა: თავიდან დავიწყე სწავლა "HTML"-ით და რომ ვისწავლე მეგონა უკვე შემდგარი დეველოპერი ვიყავი (რა თქმა უნდა ვხუმრობ 😁), შემდეგ დავიწყე "CSS"-ის სწავლა და მივხვდი რომ შემდეგ საფეხურზე ავიყვანე ეს საქმე შემდეგი იყო "Bootstrap", რომელსაც ცოტა უცნაურად შევხვდი, თუმცა მაინც დავძლიე და ალბათ საუკეთესო ხელსაწყოა CSS-სთან მუშაობისთვის და აი ისიც მისი უდიდებულესობა "JavaScript", JS არის პროგრამირების ენა, რომელთანაც შეხებისთანავე მივხვდი რომ სულ სხვა ადგილას მოვხვდი, იყო ბევრი ჩავარდნა თუმცა არ ვუშინდები გამოწვევებს და მაინც დავძლიე და ბოლოს ჩემთვის ყველაზე საყვარელი _FrameWork "React JS", რომელმაც შემაყვარა ჯავასკრიპტი. მოკლედ გადმოვეცი ჩემი განვლილი გზა ვებ დეველოპერობამდე, ძალიან ბევრი ჩავარდნები მქონდა, მქონდა ჩემთავთან ბრძოლა, რომ მე ვერ შევძლებდი, თუმცა გავიმარჯვე და გავედი ბოლომდე. არ ვაპირებ გაჩერებას და მივიწევ წინ! შემდეგი მიზანი "Back-End" არის! </p>
                <hr className="hr-me"/>
                <h6 className="h6-study">რა ვისწავლე?</h6>
                <div className="d-flex justify-content-around ps-5 pe-5 mt-3">

                  <img src={Html} alt="html-logo" />
                  <img src={Css} alt="Css-logo" />
                  <img src={Bootstrap} alt="Bootstrap-logo" />
                  <img src={Js} alt="Js-logo" />
                  <img src={ReactLogo} alt="React-logo" />
                  <img src={Git} alt="Git-logo" />

                </div>
                <hr className="hr-me mt-3"/>
                
                <h6 className="h6-study mt-4">რატომ მე?</h6>
                
                <p className="tel">
                  დავიბადე 1994 წლის 18 დეკემბერს ქ. გურჯაანში, 2013 წელს დავამთავრე გურჯაანის #1 საჯარო სკოლა და იმავე წელს ჩავაბარე საქართველოს ტექნიკურ უნივერსიტეტში, ფირმისა და ტრანსპორტის მენეჯმენტზე, 2018 წელს დავამთავრე უნივერსიტეტი და მას შემდეგ ბევრი სამსახური გამოვიცვალე. ახლა კი ვიცი რომ სხვაგან არსად წავალ და ეს არის ის საქმე რაც უნდა ვაკეთო და მაქვს უამრავი მიზეზი თუ რატომ აღარ ვაპირებ სხვაგან წასვლას. მაქვს გამოცდილება პატარა თასქებზე მუშაობის, ასევე ძალიან მეხმარებოდნენ ჩემი მწვრთნელები პორტფოლიოს გამრავალფეროვნებისთვის. ვარ მოტივირებული, პასუხისმგებლიანი, კომუნიკაბელური, მიყვარს გუნდური მუშაობა. ყველაზე მთავარი რატომ მე?! <span className="importantText">"თქვენ გინდათ რომ დროულად მიიღოთ შედეგი და მე გაძლევთ გარანტიას რომ თქვენ დროულად მიიღებთ იმ შედეგს რომელსაც ელოდებით."</span><br /> საკონტაქტო ინფორმაცია იხილეთ ნავიგაციაში "_ContactMe".
                </p>

                <p className="p-gamowveva">
                  მზად ვარ გამოწვევებისთვის!
                </p>
                
              </div>
            </div>
          </div>
          </header>
        )
    }
}

export default Navbar;