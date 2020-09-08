import React from 'react';
import brand2 from '../../img/personal-brand-2.jpg';
import brand3 from '../../img/personal-brand-3.jpg';
import brand4 from '../../img/personal-brand-4.jpg';

const About = ({}) => {
  return (
    <section className="section-about">
    <div className="u-center-text u-margin-bottom-ultra">
      <h2 className="heading-secondary">
        建立个人价值品牌
      </h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">
          什么是个人品牌价值？
        </h3>
        <p className="paragraph">
          个人品牌价值用一句话来说，就是别人怎么看待你，是个人商业价值的综合体现，它是一种无形资产。

         </p>
        <h3 className="heading-tertiary u-margin-bottom-small">
          更进一步的说
        </h3>
        <p className="paragraph">
          当一家公司要吸引风险投资，或是招聘高素质的员工，它必须要依靠CEO的个人品牌的力量。
          CEO的个人品牌对内能够增强员工的荣誉感、自豪感，对外能够赢得投资人、客户对公司的信任。
          可以说在这个竞争越来越激烈的时代，CEO的一部分作用就是是用个人品牌翘动企业品牌。对于公众公司的CEO而言，个人品牌甚至会影响公司股票价格。

        </p>

        <a href="#" className="btn-text">了解更多 &rarr;</a>
      </div>
      <div className="col-1-of-2">
        <div className="composition">
          <img loading="lazy" src={brand2} className="composition__photo composition__photo--p1" alt=""/>
          <img loading="lazy" src={brand3} className="composition__photo composition__photo--p2" alt=""/>
          <img loading="lazy" src={brand4} className="composition__photo composition__photo--p3" alt=""/>
        </div>
      </div>
    </div>

  </section>
  );
}



export default About;
