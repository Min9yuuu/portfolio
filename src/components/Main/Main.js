import React, { useRef, useState } from "react";
// Import Swiper React components

import "./Main.css";
function Main() {
  return (
    <section
      id='main'
      className='home-banner overlay'
      style={{
        backgroundImage: `url("https://krozo.ibthemespro.com/img/banner/bg-2.jpg")`,
      }}
    >
      <div className='top-style'>
        <img src='image/home_item01.png' />
      </div>
      <div className='bottom-style'>
        <img src='image/home_item02.png' />
      </div>
      <div className='frame-layout'></div>
      <div className='container'>
        <div className='row align-items-center full-screen'>
          <div className='text-center home-typo'>
            <h6>Hi There, I'm</h6>
            <h1>김민규</h1>
          </div>
        </div>
      </div>
      <div className='scroll-bottom'></div>
      <div className='social-icons'>
        <a href='www.naver.com'>a</a>
        <a href='www.github.com'>a</a>
        <a href='www.google.com'>a</a>
      </div>
    </section>
  );
}

export default Main;
