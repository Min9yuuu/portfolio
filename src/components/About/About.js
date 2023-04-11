import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./About.css";

function About() {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-lg-6 my-3'>
            <div className='image-box'>
              <img src='image/about-1.jpg' alt='girl' />
            </div>
          </div>
          <div className='col-lg-6 my-3'>
            <div className='text-box'>
              <h3>김민규</h3>
              <h5>
                A read <span>Front-end</span> Developer base in <span>Korea</span>
              </h5>
              <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>
              <div className='row about-list'>
                <div className='col-md-6'>
                  <div className='media'>
                    <label>Birthday</label>
                    <p>6th october 1994</p>
                  </div>
                  <div className='media'>
                    <label>Age</label>
                    <p>30year</p>
                  </div>
                  <div className='media'>
                    <label>Residence</label>
                    <p>Korea</p>
                  </div>
                  <div className='media'>
                    <label>Address</label>
                    <p>Pangyo</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='media'>
                    <label>E-mail</label>
                    <p>info@domain.com</p>
                  </div>
                  <div className='media'>
                    <label>Phone</label>
                    <p>820-885-3321</p>
                  </div>
                  <div className='media'>
                    <label>Skype</label>
                    <p>skype.0404</p>
                  </div>
                  <div className='media'>
                    <label>Freelance</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
              <div className='btn-bar'>
                <a href='/' className='px-btn px-btn-theme'>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
