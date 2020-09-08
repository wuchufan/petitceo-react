import React from 'react';


const Education = () => {
  return (
    <section className="section-education">
      <div className="u-center-text u-margin-bottom-ultra">
        <h2 className="heading-secondary u-margin-bottom-medium">
          教育系统介绍
        </h2>
        <p className="paragraph">基于使用便利的原则，Petit CEO采用远程网络教育系统。</p>
      </div>
      <div className="education row">
        <div className="col-1-of-2">
          <div className="system">
            <div className="icon-wraper u-margin-bottom-medium">
              <i className="icon icon-basic-server2"></i>
            </div>
            <div className="system__text">
              <h3 className="heading-fourthly u-center-text u-margin-bottom-small">硬件设备配套</h3>
              <p className="paragraph-secondary u-center-text">Petit CEO使用视频方式教学,更有后续研发的车载系统以及全息投影系统作为辅助。</p>

            </div>

          </div>
        </div>
        <div className="col-1-of-2">
          <div className="system">
            <div className="icon-wraper u-margin-bottom-medium">
              <i className="icon icon-basic-book-pen"></i>
            </div>
            <div className="system__text">
              <h3 className="heading-fourthly u-center-text u-margin-bottom-small">系统软件研发</h3>
              <p className="paragraph-secondary u-center-text">Petit CEO网络教育系统会建成一个成熟安全以及注重孩子的眼部以及脑部发展的技术。</p>
            </div>

          </div>
        </div>
      </div>
      <div className="u-center-text">
            <a href="#" className="btn btn--white-sub">了解更多</a>
      </div>

    </section>
  );
}


export default Education;
