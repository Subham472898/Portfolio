import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => (
    <section id="skills" className="skills-section">
        <h2 className="skillTitle">What I Do</h2>
        <p className="skillDesc">I specialize in Data Structures & Algorithms, Web Development, and Cloud Technology. My experience covers building responsive web apps, optimizing code, and deploying scalable solutions on AWS.</p>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="DSA" className="skillBarImg" />
                <h3>DSA</h3>
                <p>Solving complex problems and optimizing code for efficiency and scalability.</p>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="Web Development" className="skillBarImg" />
                <h3>Web Development</h3>
                <p>Building responsive and scalable web applications using React, Node.js, and MongoDB.</p>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="Cloud Technology" className="skillBarImg" />
                <h3>Cloud Technology</h3>
                <p>Deploying and managing applications for high availability and performance on AWS.</p>
            </div>
        </div>
    </section>
);

export default Skills;