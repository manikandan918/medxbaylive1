import React from 'react';
import './About.css';
import { SiTicktick } from "react-icons/si";

const About = () => {
    const providerProblems = [
        {
            id: 1,
            title: 'Administrative Burden',
            description: 'Reducing excessive paperwork and manual scheduling.',
        },
        {
            id: 2,
            title: 'Limited Patient Reach',
            description: 'Expanding visibility and attracting a broader patient base.',
        },
        {
            id: 3,
            title: 'Inefficient Patient Management',
            description: 'Streamlining tools for appointment scheduling, communication, and follow-up.',
        },
        {
            id: 4,
            title: 'Fragmented Systems',
            description: 'Integrating disparate systems for billing, scheduling, and patient records.',
        },
        {
            id: 5,
            title: 'Mental Distress',
            description: 'Providing a safe space for professional support and growth.',
        },
    ];

    const patientProblems = [
        {
            id: 1,
            title: 'Difficulty Finding Trusted Providers',
            description: 'Simplifying the search for reliable healthcare professionals.',
        },
        {
            id: 2,
            title: 'Inconvenient Scheduling',
            description: 'Offering easy-to-use appointment booking processes.',
        },
        {
            id: 3,
            title: 'Limited Access to Care',
            description: 'Overcoming barriers, especially for remote or mobility-challenged individuals.',
        },
        {
            id: 4,
            title: 'Misinformation Online',
            description: 'Ensuring access to accurate, vetted health information.',
        },
        {
            id: 5,
            title: 'Coordination Gaps',
            description: 'Enhancing communication and document sharing for better care continuity.',
        },
    ];
    return (
        <div className="about-us-container">
            {/* Top Section: Image on the left, Content on the right */}
            <div className="top-section">
                <div className="image-group">
                    <div className="top-image">
                        <img className="top-image1" src="https://s3-alpha-sig.figma.com/img/efc2/af7a/0b726ca08fe8175c75225ee90b6efa4a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~7jf91no6zHaDfssBpFE6YdkE8npuHZp1JwJoyRpJcDYrnbGFyxP5P6ndYrfkfkBytS9O7nrhaNq~SQV0Sqadlhh-jiSI1wgpe49Rj6rE9JfqD-0WnxSi8bG5ap45oktkLA4od53mkqpXxkC4GMQvTPtHAKF3pPorZ0SLOs0TIDqp9DxIPZnU7J2vh1czK~IEiSNItakq30L-~DiXnYeldV7pIvBT6qpOlrlAsDiu0uzsK1MGoB8LEcwdjGovbU81qFOVqNHl5ATHIaVB2Qxp1sjRmrNZVFylP2ozg5v4RfeNdxJB50gJMf0NR-TB5nLHF8vAbksKJTbOMrojzXYQ__" alt="Group of Doctors" />
                        <div className="image-overlay">WE FOUNDED IN 2023 AS GLOBAL WELLNESS ALLIANCE</div>
                    </div>
                    <div className="bottom-images">
                        <img className="top-image2" src="https://s3-alpha-sig.figma.com/img/efc2/af7a/0b726ca08fe8175c75225ee90b6efa4a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~7jf91no6zHaDfssBpFE6YdkE8npuHZp1JwJoyRpJcDYrnbGFyxP5P6ndYrfkfkBytS9O7nrhaNq~SQV0Sqadlhh-jiSI1wgpe49Rj6rE9JfqD-0WnxSi8bG5ap45oktkLA4od53mkqpXxkC4GMQvTPtHAKF3pPorZ0SLOs0TIDqp9DxIPZnU7J2vh1czK~IEiSNItakq30L-~DiXnYeldV7pIvBT6qpOlrlAsDiu0uzsK1MGoB8LEcwdjGovbU81qFOVqNHl5ATHIaVB2Qxp1sjRmrNZVFylP2ozg5v4RfeNdxJB50gJMf0NR-TB5nLHF8vAbksKJTbOMrojzXYQ__" alt="Medical Staff" />
                        <img className="top-image3" src="https://s3-alpha-sig.figma.com/img/efc2/af7a/0b726ca08fe8175c75225ee90b6efa4a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~7jf91no6zHaDfssBpFE6YdkE8npuHZp1JwJoyRpJcDYrnbGFyxP5P6ndYrfkfkBytS9O7nrhaNq~SQV0Sqadlhh-jiSI1wgpe49Rj6rE9JfqD-0WnxSi8bG5ap45oktkLA4od53mkqpXxkC4GMQvTPtHAKF3pPorZ0SLOs0TIDqp9DxIPZnU7J2vh1czK~IEiSNItakq30L-~DiXnYeldV7pIvBT6qpOlrlAsDiu0uzsK1MGoB8LEcwdjGovbU81qFOVqNHl5ATHIaVB2Qxp1sjRmrNZVFylP2ozg5v4RfeNdxJB50gJMf0NR-TB5nLHF8vAbksKJTbOMrojzXYQ__" alt="Senior Doctor" />
                    </div>
                </div>
                <div className="content-section">
                    <h2>About us</h2>
                    <p>
                        Welcome to MedxBay, where healthcare innovation meets patient empowerment. Founded in 2023 as Global Wellness Alliance, MedxBay was born from a vision to bridge the gap between conventional and holistic healthcare practices. With the rising demand for integrated health solutions and the challenges individuals face in finding trusted healthcare providers, our platform aims to provide a seamless, comprehensive healthcare experience.
                    </p>
                    <h2>Our Purpose</h2>
                    <p>
                        MedxBay is an AI-enabled healthcare platform that revolutionizes provider workflows and patient care. By simplifying administrative tasks such as appointment scheduling, payment processing, and treatment management, MedxBay enables providers to focus on patient care. For patients, we offer a convenient platform to access tailored healthcare, make informed decisions about their medical providers and treatment options, and advocate for their own health.
                    </p>
                </div>
            </div>
            {/* Bottom Section: Our Mission and Goals */}
            <div className="bottom-section">
                <div className="mission-content">
                    <h2>Our Mission and Goals</h2>
                    <p>
                        At MedxBay, our mission is to empower healthcare professionals and enhance patient care by leveraging advanced technology and innovative solutions that help support SDG#3 - Good Health & Well-being for all.
                    </p>
                    <div className="goals">
                        <div className="goal">
                        <SiTicktick className="tick-icon" />
                            <p>Optimizing healthcare processes for better patient outcomes.</p>
                        </div>
                        <div className="goal">
                        <SiTicktick className="tick-icon" />
                            <p>Fostering a community of informed, empowered healthcare consumers.</p>
                        </div>
                        <div className="goal">
                        <SiTicktick className="tick-icon" />
                            <p>Expanding our reach across the globe, enabling more users to gain access to quality healthcare.</p>
                        </div>
                    </div>
                </div>
                <div className="mission-image">
                    <img src="https://s3-alpha-sig.figma.com/img/71ff/db83/f4d1d2b8756ce564a4ffeff0d0cf7106?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BWrHv00IEZO2WaFkKMAbxhcpEpD4G-zXl1Y5B03V~fn1pwI2j~dn4365AuaQXbsiY-VUXbrdd9zgb8Cc2zTDWSLw3YJQ24uA4dZGQpK7Xx3ahMG6RYWc6Z~IFszr~htiqPyEi9skX69824dmjFDagkKGP6TGOtHw40Exn~2H9bYy~8iSRUK4rXdoSNDkArigBSJJ~VaNVMl5mktLWyR52A4KvZyKA9-jki3O8PI9EFDd20O6R1iXOZ6D1804MKKqjdD6u5ZuZGSqaDuW1ldYqCFRysnI3Nru18u7GVrI2rLtciQ9qpLAt3V3HRKM72T7vTvIj0xnicLLZEJO4hIzIA__" alt="Team of Doctors" />
                </div>
            </div>

            {/* New Section: Cards with Icon, Title, and Description */}
            <div className="cards-section">
                
            <h2 className="regions-title">
                    <span className="title-bar"></span>Who we severe
                </h2>
                {/* <h1 className='borderlefts'>Who we severe</h1> */}
                <p>MedxBay serves a diverse audience</p>

                <div className="cards-row">
                    {/* Card 1 */}
                    <div className="card">
                        <div className="icon">
                            <i className="bi bi-heart"></i> {/* Replace with your desired icon */}
                        </div>
                        <h3>Patients</h3>
                        <p>Providing easy access to healthcare services, trusted provider connections, and accurate health information.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="card">
                        <div className="icon">
                            <i className="bi bi-gear"></i> {/* Replace with your desired icon */}
                        </div>
                        <h3>Healthcare Providers</h3>
                        <p>Simplifying administrative duties, enhancing patient reach, and fostering professional collaboration.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="card">
                        <div className="icon">
                            <i className="bi bi-chat"></i> {/* Replace with your desired icon */}
                        </div>
                        <h3>Medical Suppliers</h3>
                        <p>Connecting with healthcare professionals to introduce new medical products and 
                        innovations.</p>
                    </div>
                </div>
            </div>
            
            <h1 className="key-prob">Key problems we solve</h1>

            <div className="key-problems-section">
            <div className="problems-column">
                <h2>For Providers</h2>
                <ul>
                    {providerProblems.map(problem => (
                        <li key={problem.id}>
                            <div className="problem-number">{problem.id}</div>
                            <div className="problem-details">
                                <h3>{problem.title}</h3>
                                <p>{problem.description}</p>
                                <div className="problem-numbers"></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="problems-column">
                <h2>For Patients</h2>
                <ul>
                    {patientProblems.map(problem => (
                        <li key={problem.id}>
                            <div className="problem-number">{problem.id}</div>
                            <div className="problem-details">
                                
                                <h3>{problem.title}</h3>
                                <p>{problem.description}</p>
                                <div className="problem-numbers"></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            <div className="regions-section">
            <div className="regions-content">
                <h2 className="regions-title">
                    <span className="title-bar"></span>Regions we serve
                </h2>
                <p className="regions-description">
                    MedxBay proudly serves the MENA region and various countries throughout Africa, 
                    including Kenya, Nigeria,<br/> Ghana, and South Africa. Our platform is designed to 
                    address the unique healthcare challenges in these<br/> regions, providing accessible 
                    and high-quality medical care.
                </p>
            </div>
        </div>
            <div>
            <div className="cards-section">
            <h2 className="regions-title">
                    <span className="title-bar"></span>Meet Our Team
                </h2>
    {/* <h1 className='borderlefts'>Meet Our Team</h1> */}
    <p>Our dedicated team of experts in healthcare, technology,<br/> and marketing drives MedxBay's mission forward</p>

    <div className="cards-row">
        {/* Card 1 */}
        <div className="card" style={{ width: '18rem',background:"none" }}>
            <img style={{ width: '18rem' }} src="https://s3-alpha-sig.figma.com/img/efc2/af7a/0b726ca08fe8175c75225ee90b6efa4a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~7jf91no6zHaDfssBpFE6YdkE8npuHZp1JwJoyRpJcDYrnbGFyxP5P6ndYrfkfkBytS9O7nrhaNq~SQV0Sqadlhh-jiSI1wgpe49Rj6rE9JfqD-0WnxSi8bG5ap45oktkLA4od53mkqpXxkC4GMQvTPtHAKF3pPorZ0SLOs0TIDqp9DxIPZnU7J2vh1czK~IEiSNItakq30L-~DiXnYeldV7pIvBT6qpOlrlAsDiu0uzsK1MGoB8LEcwdjGovbU81qFOVqNHl5ATHIaVB2Qxp1sjRmrNZVFylP2ozg5v4RfeNdxJB50gJMf0NR-TB5nLHF8vAbksKJTbOMrojzXYQ__" className="card-img-top" alt="..." />
            <div className="card-body">
            <h4  style={{color:"orange" }}className="card-title">Yunche Wilson</h4>
            <h5><b>Founder/CEO</b></h5>
            <p className="card-text">An 18-year management consultant with extensive experience in enterprise marketing, business development, and health & wellness research.</p>
            </div>
        </div>

        {/* Card 2 */}
        <div className="card" style={{ width: '18rem',background:"none" }}>
            <img src="https://s3-alpha-sig.figma.com/img/efc2/af7a/0b726ca08fe8175c75225ee90b6efa4a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~7jf91no6zHaDfssBpFE6YdkE8npuHZp1JwJoyRpJcDYrnbGFyxP5P6ndYrfkfkBytS9O7nrhaNq~SQV0Sqadlhh-jiSI1wgpe49Rj6rE9JfqD-0WnxSi8bG5ap45oktkLA4od53mkqpXxkC4GMQvTPtHAKF3pPorZ0SLOs0TIDqp9DxIPZnU7J2vh1czK~IEiSNItakq30L-~DiXnYeldV7pIvBT6qpOlrlAsDiu0uzsK1MGoB8LEcwdjGovbU81qFOVqNHl5ATHIaVB2Qxp1sjRmrNZVFylP2ozg5v4RfeNdxJB50gJMf0NR-TB5nLHF8vAbksKJTbOMrojzXYQ__" className="card-img-top" style={{ width: '18rem' }}alt="..." />
            <div className="card-body">
            <h4  style={{color:"orange" }}className="card-title">Sarin Ram</h4>
            <h5><b>Chief Technology Officer</b></h5>
            <p className="card-text">A seasoned CTO with over 10 years of experience in streamlining operations and enhancing productivity through cutting-edge technologies.</p>
            </div>
        </div>  

        {/* Card 3 */}
        <div className="card" style={{ width: '18rem',background:"none" }}>
        <img style={{ width: '18rem' }} src="https://s3-alpha-sig.figma.com/img/efc2/af7a/0b726ca08fe8175c75225ee90b6efa4a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~7jf91no6zHaDfssBpFE6YdkE8npuHZp1JwJoyRpJcDYrnbGFyxP5P6ndYrfkfkBytS9O7nrhaNq~SQV0Sqadlhh-jiSI1wgpe49Rj6rE9JfqD-0WnxSi8bG5ap45oktkLA4od53mkqpXxkC4GMQvTPtHAKF3pPorZ0SLOs0TIDqp9DxIPZnU7J2vh1czK~IEiSNItakq30L-~DiXnYeldV7pIvBT6qpOlrlAsDiu0uzsK1MGoB8LEcwdjGovbU81qFOVqNHl5ATHIaVB2Qxp1sjRmrNZVFylP2ozg5v4RfeNdxJB50gJMf0NR-TB5nLHF8vAbksKJTbOMrojzXYQ__" className="card-img-top" alt="..." />
        <div className="card-body">
                <h4  style={{color:"orange" }}className="card-title">William Stenhouse</h4>
                <h5><b>Chief Strategy Officer</b></h5>
                <p className="card-text">A supply chain and logistics expert with a 30+ year career, focused on building relationships between the UAE and African markets.</p>
                
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    );
}

export default About;
