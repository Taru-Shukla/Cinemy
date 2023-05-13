import React from "react";
import "./Footer.scss";


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
//footer
  render() {
    return (
        <footer class="ftr">    
            <div class="ftrbody"> 
                    <section class="footClnNw">
                        <b>Cinemy Movie <br/>Recommendation</b>
                        <p>Cinemy is an online database of information related to films, television series, home videos, video games, and streaming content online – including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews. Cinemy began as an academic project and now going to be soon on online platform</p>
                    </section>           
                    <section class="footQview">
                        <b>About</b>
                        <div class="ftQV">
                            <li>Know about us</li>
                            <li>News</li>
                            <li>Our Services</li>
                            <li>Careers</li>
                            <li>Your feed back</li>
                        </div>
                    </section>
                    <section class="footServ">
                        <b>Community</b>
                        <div class="ftSL">
                            <li>Advertising</li>
                            <li>Help</li>
                            <li>Our Employees</li>
                            <li>Resources</li>
                        </div>
                    </section>
                    <section class="footCntct">
                        <b>Contact</b>
                        <p>Phone : +1 4567891230</p>
                        <p>Email : info@cinemy.com</p>
                        <p>Fax : +1 567 789 8901</p>
                    </section>
                    
                </div>
            <div class="ftrtail">
                <div class="copyRights">
                    <div class="leftCR">
                        &copy; Copyright 2021, Cinemy Inc., <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Privacy |  Services |  Terms and Conditions  </b>
                    </div>
                </div>
            </div> 
    </footer> 
    );
  }
}

export default Footer;