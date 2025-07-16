import React from 'react';

// import "./subcriber.css"

export const Subcriber = ({Subcriber_css,title,button_title}) => {

  return (
  <div className={Subcriber_css.card}>
    <span className={Subcriber_css.card__title}>{title}</span>
    <p className={Subcriber_css.card__content}>Get fresh web design resources delivered straight to your inbox every week.
    </p>
    <div className={Subcriber_css.card__form}>
        <input placeholder="Your Email" type="text"/>
        <button className={Subcriber_css.sign_up}> {button_title}</button>
    </div>
</div>
  )
}
