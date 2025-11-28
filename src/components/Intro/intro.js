import React from 'react';
import './intro.css';
import profileImg from '../../assets/image.png';

const Intro = () => (
    <section id="intro">
        <img src={profileImg} alt="Profile" className="intro-img" />
        <h1 className="intro-title">Hello, I'm <span className="introName">Subham</span></h1>
        <p className="intro-desc">A passionate software developer skilled in full-stack web development, cloud technology, and problem solving. I love building modern, scalable applications and turning ideas into reality.</p>
        <a
          className="intro-btn"
          href={process.env.PUBLIC_URL + '/resume.pdf'}
          download="resume.pdf"
        >
          Download Resume
        </a>
    </section>
);

export default Intro;
