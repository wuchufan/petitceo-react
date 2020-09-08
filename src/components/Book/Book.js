import React from 'react';
import PropTypes from 'prop-types';

const Book = ({}) => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">

          <div className="book__form">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">联系我们</h2>
            </div>
            <form className="form" action="#">
              <div className="form__group">
                <input id="name" type="text" className="form__input" placeholder="姓名" required/>
                <label className="form__label">姓名</label>
              </div>
              <div className="form__group">
                <input id="email" type="email" className="form__input" placeholder="邮箱地址" required/>
                <label className="form__label">邮箱地址</label>
              </div>

              <div className="form__group">
                <button className="btn btn--green">submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Book;
