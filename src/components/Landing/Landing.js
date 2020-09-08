import React from 'react';
import logo from '../../img/logo-white.png';


const Landing = ({}) => {
  return (
    <>
    <header className="header">
    <div className="header__logo-box">
      <img loading="lazy" src={logo} alt="Logo" className="header__logo"/>

    </div>

    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">
          Petit CEO
        </span>
        <span className="heading-primary--sub">
          Build your personal brand
        </span>
      </h1>
      <a className="btn btn--white btn--animated">Discover our program</a>
    </div>
  </header>
  </>
  );
}



export default Landing;
