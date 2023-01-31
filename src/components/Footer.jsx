import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import sabifi from "../assets/sabifi.png";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text ml-2">
                  <h4>Find us</h4>
                  <span>Block 1, Johar Town, Lahore</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>9276543210 0</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>contact@sabifi.io</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="index.html">
                    <img src={sabifi} alt="logo" />
                  </a>
                </div>
                <div class="footer-text">
                  <p>
                    Sabifi is a cutting-edge NFT marketplace that allows users to buy and sell unique digital assets such as art, collectibles and more. It is built on the Ethereum blockchain, which ensures that all transactions are secure, transparent and verifiable. It's easy to use interface, makes buying and selling NFTs accessible to everyone. Sabifi also supports all ERC-721 standard tokens.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <NavLink
                      exact
                      activeClassName="active-link"
                      to="/"
                      className=" cursor-pointer
          "
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      activeClassName="active-link"
                      to="/about"
                      className=" cursor-pointer 
          "
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      activeClassName="active-link"
                      to="/token"
                      className=" cursor-pointer 
          "
                    >
                      Token
                    </NavLink>
                  </li>
                  <li>
                    <a href="#">portfolio</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="https://swap.sabifi.io/#/swap" target="_blank">Sabswap</a>
                  </li>
                  <li>
                    <a href="https://opensea.io/Wahhab_Mirza" target="_blank">Our NFTs</a>
                  </li>
                  <li>
                    <a href="#">Expert Team</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button className="text-white">
                      <TelegramIcon />
                    </button>
                  </form>
                </div>
                <div class="footer-social-icon py-2">
                  <span>Follow us</span>
                  <a href="">
                    <i class="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="https://twitter.com/sabifi5" target="_blank">
                    <i class="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="https://pk.linkedin.com/in/sbf-028596258?trk=public_post_feed-actor-name" target="_blank">
                  <i class="fa-brands fa-linkedin-in google-bg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class=" text-center text-lg-left">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2023, All Right Reserved{" "}
                  <a href="https://swap.sabifi.io/" target="_blank">
                    Sabifi
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
