import React from 'react';
import logo from '../../img/favicon.png';

const Footer = ({}) => {
  return (
    <footer className="footer">
    <div className="footer__logo-box">
      <img loading="lazy" src={logo} alt="" className="footer__logo"/>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">主页</a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">核心课程</a>
            </li>

          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        <div className="footer__contact">
          <p>Office Number: +1 (647)352-1328</p>
          <p>
             Email: info@yuchakcorp.com
          </p>
          <p>Address: ​#802 - 100 Allstate, Markham ON, L3R 6H3</p>
        </div>
      </div>
    </div>
  </footer>
  );
}



export default Footer;
