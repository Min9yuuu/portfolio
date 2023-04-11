import React from "react";
import "./Skill.css";

function Skill() {
  return (
    <section className='skill-section section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 my-3'>
            <div className='sm-title'>
              <h4>Education</h4>
            </div>
            <ul className='education-box theme-bg'>
              <li>
                <span className='dark-bg'>YYYY-YYYY</span>
                <h6>학교학교학교학교학교</h6>
                <p>설명설명설명설명설명설명설명설명설명</p>
              </li>
              <li>
                <span className='dark-bg'>YYYY-YYYY</span>
                <h6>학교학교학교학교학교</h6>
                <p>설명설명설명설명설명설명설명설명설명</p>
              </li>
              <li>
                <span className='dark-bg'>YYYY-YYYY</span>
                <h6>학교학교학교학교학교</h6>
                <p>설명설명설명설명설명설명설명설명설명</p>
              </li>
            </ul>
          </div>
          <div className='col-lg-4 my-3'>
            <div className='sm-title'>
              <h4>Education</h4>
            </div>
            <ul className='education-box dark-bg'>
              <li>
                <span className='theme-bg'>YYYY-YYYY</span>
                <h6>학교학교학교학교학교</h6>
                <p>설명설명설명설명설명설명설명설명설명</p>
              </li>
              <li>
                <span className='theme-bg'>YYYY-YYYY</span>
                <h6>학교학교학교학교학교</h6>
                <p>설명설명설명설명설명설명설명설명설명</p>
              </li>
              <li>
                <span className='theme-bg'>YYYY-YYYY</span>
                <h6>학교학교학교학교학교</h6>
                <p>설명설명설명설명설명설명설명설명설명</p>
              </li>
            </ul>
          </div>
          <div className='col-lg-4 my-3'>
            <div className='sm-title'>
              <h4>My Skill</h4>
            </div>
            <div className='gray-bg skill-box'>
              <div className='skill-li'>
                <h6>React js</h6>
                <div className='skill-bar'>
                  <div className='skill-proficiency'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
