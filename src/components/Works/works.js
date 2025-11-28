import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';

const projects = [
    {
        img: Portfolio1,
        name: 'Project One',
        github: 'https://github.com/',
        demo: 'https://example.com/'
    },
    {
        img: Portfolio2,
        name: 'Project Two',
        github: 'https://github.com/',
        demo: 'https://example.com/'
    },
    {
        img: Portfolio3,
        name: 'Project Three',
        github: 'https://github.com/',
        demo: 'https://example.com/'
    }
];

const Works = () => (
    <section id="projects" style={{width: '100vw', minHeight: '100vh', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <h2 className="worksTitle" style={{fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.2rem', color: '#fff', textAlign: 'center'}}>Projects</h2>
        <p className="worksDesc" style={{fontSize: '1.1rem', fontWeight: '400', maxWidth: '600px', textAlign: 'center', color: '#fff', marginBottom: '2rem'}}>A selection of my recent projects, demonstrating my skills in web development and cloud technology.</p>
        <div className="worksImgs" style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', width: '100vw', maxWidth: '1200px'}}>
            {projects.map((project, idx) => (
                <div className="projectBox" key={idx} style={{background: '#232526', color: '#fff', borderRadius: '1rem', boxShadow: '0 2px 16px rgba(0,0,0,0.12)', padding: '2rem', minWidth: '280px', maxWidth: '340px', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'background 0.3s, color 0.3s, box-shadow 0.3s'}}>
                    <h3 style={{marginBottom: '0.5rem'}}>{project.name}</h3>
                    <img src={project.img} alt={project.name} className="worksImg" style={{width: '100%', maxWidth: '220px', height: '140px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', transition: 'transform 0.3s, box-shadow 0.3s'}} />
                    <button className="projectLink" style={{background: '#ffe066', color: '#232526', border: 'none', borderRadius: '2rem', padding: '0.5rem 1.2rem', fontSize: '1rem', fontWeight: '600', margin: '0.5rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', transition: 'background 0.3s, color 0.3s'}} onClick={() => window.open(project.github, '_blank')}>GitHub</button>
                    <button className="projectLink" style={{background: '#ffe066', color: '#232526', border: 'none', borderRadius: '2rem', padding: '0.5rem 1.2rem', fontSize: '1rem', fontWeight: '600', margin: '0.5rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', transition: 'background 0.3s, color 0.3s'}} onClick={() => window.open(project.demo, '_blank')}>Live Demo</button>
                </div>
            ))}
        </div>
    </section>
);

export default Works;