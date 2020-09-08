import React from 'react';


const Navigation = ({}) => {
  return (
    <div className="navigation">
  <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
  <label for="navi-toggle" className="navigation__button"><span className="navigation__icon"></span>&nbsp;</label>
  <div className="navigation__background">
    &nbsp;
  </div>
  <nav className="navigation__nav">
    <ul className="navigation__list">
      <li className="navigation__item">
        <a href="#" className="navigation__link">主页</a>
      </li>
      <li className="navigation__item">
        <a href="#" className="navigation__link">核心课程</a>
      </li>
    </ul>

  </nav>
</div>
  );
}



export default Navigation;
