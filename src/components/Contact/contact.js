import React from 'react';
import './contact.css';

const certifications = [
    {
        name: 'GeeksforGeeks Java Training',
        link: 'https://media.geeksforgeeks.org/courses/certificates/7edf456bf610bb221df22076656de6fe.pdf',
        btn: 'View Certificate'
    },
    {
        name: 'AWS Certified Solutions Architect',
        link: 'https://www.credly.com/badges/7e6cc260-dcbc-43b0-b1c7-b7fb49cc3cc2/linked_in_profile',
        btn: 'Verify Credential'
    }
];

const Contact = () => (
    <div id="contactPage">
        <section id="certification">
            <h2 className="contactPageTitle">Certifications</h2>
            <ul className="certificationList">
                {certifications.map((cert, idx) => (
                    <li key={idx}>
                        <span>{cert.name}</span>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            <button className="certBtn">{cert.btn}</button>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
        <section id="contact">
            <h2 className="contactPageTitle">Contact Me</h2>
            <p className="contactDesc">Let's connect! Fill out the form below to discuss any work opportunities or collaborations.</p>
            <form className="contactForm" action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="3b374baa-a7cb-495e-b1d5-6cc83aa6d053" />
                <input type="text" className="name" placeholder="Your name" name="name" required />
                <input type="email" className="email" placeholder="Your Email" name="email" required />
                <textarea name="message" placeholder="Your Message" rows={5} className="msg" required></textarea>
                <button type="submit" className="submitBtn">Send Message</button>
                <p className="contact-success" style={{color: '#ffe066', fontWeight: 'bold', marginTop: '1rem', display: 'none'}} id="contactSuccess">Successfully submitted! Thank you for your message.</p>
            </form>
        </section>
    </div>
);

export default Contact;
