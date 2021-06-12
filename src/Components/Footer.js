
import React from 'react';
import './Footer.css'
// import '../assets/ShahanawajResume.pdf'

function Footer() {
//  const   onResumeC

        
       

    return (
       <div className="footer">
      <div className="footer-content">
        <div className="">Developed And Maintained By</div>
        <div>Shahanawaj Alam</div>

        <a
          href={
            "https://drive.google.com/file/d/1NWKRoCRqdCWVFQdyvj6rLrxgJSP9kH9Y/view?usp=sharing"
          }
        >
          Resume/CV
        </a>
        </div>
        <div className="contact-info">
            <h6>Contact :</h6>
            <h6>+91-9113105655</h6>
            <h6>+91-7079015262</h6>
        </div>
      <div class="dropup float-sm-right">
        <button class="dropbtn">More Project Links</button>
        <div class="dropup-content">
          <a href={"https://todoappshah3.netlify.app/"}>React Todo Application</a>
          <a href={"https://shahanawajalam.github.io/covid-tracker/"}>Covid-19 Cases tracker</a>
          <a href={"https://shahanawajalam.github.io/mycalculator/"}>Simple Javascript Calculator</a>
       
      </div>
      </div>
    </div>
    )
}

export default Footer
