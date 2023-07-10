import React from "react";
import "./footer.css";
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Food Donate</h3>
        <p>
          Made with <span class="heart">&#10084;</span> by Will
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <FaGoogle size={30} color="#DB4437" />
            </a>
          </li>
          {/* <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li> */}
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
          </li>
        </ul>
      </div>

    </footer>
  );
};


export default Footer;