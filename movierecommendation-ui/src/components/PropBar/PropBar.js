import React from "react";
import "./PropBar.scss";
// import Imgone from './../images/img1.jpg';
// import Imgtwo from './../images/img2.jpg';
// import Imgthree from './../images/img3.jpg';
// import Imgfour from './../images/img4.jpg';


class PropBar extends React.Component {
  constructor(props) {
    super(props);
  }

  //property bar
  render() {
    return (
      <section class="cServices"> 
      <div class="contServ">
              <div class="clnServ">
                  <p>House Listings</p>
              </div>
              <div class="cservicesR">
                  <div class="colRc">
                      <h2>Appartment</h2>
                      
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, obcaecati amet, iusto dolores harum
                          asperiores
                          labore ipsam voluptates alias sunt</p>
                  </div>
                  <div class="colCc">
                      <h2>Condos</h2>
                     
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, obcaecati amet, iusto dolores harum
                          asperiores
                          labore ipsam voluptates alias sunt</p>
                  </div>
                  <div class="colOc">
                      <h2>Homes</h2>
                     
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, obcaecati amet, iusto dolores harum
                          asperiores
                          labore ipsam voluptates alias sunt</p>
                  </div>
                  <div class="colSc">
                      <h2>Studio</h2>
                     
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, obcaecati amet, iusto dolores harum
                          asperiores
                          labore ipsam voluptates alias sunt</p>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

export default PropBar;