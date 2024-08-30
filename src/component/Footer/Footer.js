import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
            </div>
        </div>

        <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About-us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
        </div>

        <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 96314 52678</li>
                    <li>contact@zomato.com</li>
                </ul>
        </div>
      </div>
      <hr>
      </hr>
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  );
}

export default Footer;
