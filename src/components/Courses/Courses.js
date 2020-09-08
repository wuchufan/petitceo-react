import React from 'react';
import course1 from '../../img/course-1-600x600.jpg';
import course2 from '../../img/course-2-600x600.jpg';
import course3 from '../../img/course-3-600x600.jpg';
import course4 from '../../img/course-4-600x600.jpg';



const Courses = ({}) => {
  return (
    <section className="section-courses">

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          课程流程</h2>
      </div>

      <div className="row">
        <div className="card-container">
          <div className="card">
            <div className="card__image-box">
              <div className="card__white-screen">
                <div className="card__white-screen-element card__button" data-modal-target="#phase1">
                  <h1>了解更多</h1>
                </div>
              </div>
              <img loading="lazy" className="card__image" src={course1} alt="c1"/>
            </div>
            <div className="card__text-box">
              <h3 className="heading-tertiary-dark">第一阶段：幼儿阶段</h3>
              <p className="paragraph-secondary">幼兒階段將通過領域性、目的性、效益等方面廣泛關注小總裁在實踐生活中以及預
設情景下的表現形式。</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image-box">
              <div className="card__white-screen">
                <div className="card__white-screen-element card__button" data-modal-target="#phase2">
                  <h1>了解更多</h1>
                </div>
              </div>
              <img loading="lazy" className="card__image" src={course2} alt="c2"/>
            </div>
            <div className="card__text-box">
              <h3 className="heading-tertiary-dark">第二阶段：基石階段</h3>
              <p className="paragraph-secondary">基石階段課程專注於培養小總裁們的探究，創造力和協作能力。</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image-box">
              <div className="card__white-screen">
                <div className="card__white-screen-element card__button" data-modal-target="#phase3">
                  <h1>了解更多</h1>
                </div>
              </div>
              <img loading="lazy" className="card__image" src={course3} alt="c3"/>
            </div>
            <div className="card__text-box">
              <h3 className="heading-tertiary-dark">第三阶段：拓展階段</h3>
              <p className="paragraph-secondary">基於對這個年齡段孩子的研究，拓展階段課程將會更為積極，而且多為課余活動，
專注於四大基柱：冒險，智慧，社交和自由的培訓。</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image-box">
              <div className="card__white-screen">
                <div className="card__white-screen-element card__button" data-modal-target="#phase4">
                  <h1>了解更多</h1>
                </div>
              </div>
              <img loading="lazy" className="card__image" src={course4} alt="c4"/>
            </div>
            <div className="card__text-box">
              <h3 className="heading-tertiary-dark">第四阶段: 頂尖階段</h3>
              <p className="paragraph-secondary">頂尖階段將更偏向於學術性培養，為小總裁們入讀全球頂尖大學以及之後的課程做
好準備。</p>
            </div>
          </div>
        </div>

      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">了解详情 &rarr;</a>
      </div>
    </section>
  );
}



export default Courses;
