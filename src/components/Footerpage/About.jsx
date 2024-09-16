import React, { useState } from 'react';
import './About.css';
import { SiTicktick } from "react-icons/si";

const About = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (cardId) => {
        setSelectedCard(cardId);
    };
    
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
        <div className="about-us-container11">
            {/* Top Section: Image on the left, Content on the right */}
            <div className="top-section11">
                <div className="image-group11">
                    <div className="top-image11">
                        <img className="top-image111" src="https://s3-alpha-sig.figma.com/img/efc2/af7a/0b726ca08fe8175c75225ee90b6efa4a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~7jf91no6zHaDfssBpFE6YdkE8npuHZp1JwJoyRpJcDYrnbGFyxP5P6ndYrfkfkBytS9O7nrhaNq~SQV0Sqadlhh-jiSI1wgpe49Rj6rE9JfqD-0WnxSi8bG5ap45oktkLA4od53mkqpXxkC4GMQvTPtHAKF3pPorZ0SLOs0TIDqp9DxIPZnU7J2vh1czK~IEiSNItakq30L-~DiXnYeldV7pIvBT6qpOlrlAsDiu0uzsK1MGoB8LEcwdjGovbU81qFOVqNHl5ATHIaVB2Qxp1sjRmrNZVFylP2ozg5v4RfeNdxJB50gJMf0NR-TB5nLHF8vAbksKJTbOMrojzXYQ__" alt="Group of Doctors" />
                        <div className="image-overlay11">WE FOUNDED IN 2023 AS 
                            <br/>GLOBAL WELLNESS ALLIANCE</div>
                    </div>
                    <div className="bottom-images11">
                        <img className="top-image211" src="../Frame44.png" alt="Medical Staff" />
                        <img className="top-image311" src="../photsssss.png" alt="Senior Doctor" />
                    </div>
                </div>
                <div className="content-section11">
                    <h2>About us</h2>
                    <p>
                        Welcome to MedxBay, where healthcare innovation meets patient empowerment. Founded in 2023 as Global Wellness Alliance, MedxBay was born from a vision to bridge the gap between conventional and holistic healthcare practices. With the rising demand for integrated health solutions and the challenges individuals face in finding trusted healthcare providers, our platform aims to provide a seamless, comprehensive healthcare experience.
                    </p>
                    <h6>Our Purpose</h6>
                    <p>
                        MedxBay is an AI-enabled healthcare platform that revolutionizes provider workflows and patient care. By simplifying administrative tasks such as appointment scheduling, payment processing, and treatment management, MedxBay enables providers to focus on patient care. For patients, we offer a convenient platform to access tailored healthcare, make informed decisions about their medical providers and treatment options, and advocate for their own health.
                    </p>
                </div>
            </div>
            {/* Bottom Section: Our Mission and Goals */}
            <div className="bottom-section11">
                <div className="mission-content11">
                  
                    <h2>Our Mission and Goals</h2>
                    <p>
                        At MedxBay, our mission is to empower healthcare professionals and enhance patient care by leveraging advanced technology and innovative solutions that help support SDG#3 - Good Health & Well-being for all.
                    </p>
                    <p style={{color:"#272848",marginBottom:"30px",marginTop:"10px" }}><b>Our goals include</b></p>
                    <div className="goals11">
                    
                        <div className="goal11">
                       
                        <img src="../tee.png " alt="Team of Doctors" style={{ width: '20px' ,height:"20px",marginBottom:"20px"}} />
                            <p>Optimizing healthcare processes for better patient outcomes.</p>
                        </div>
                        <div className="goal11">
                        <img src="../tee.png" alt="Team of Doctors" style={{ width: '20px' ,height:"20px",marginBottom:"20px"}} />

                        
                            <p>Fostering a community of informed, empowered healthcare consumers.</p>
                        </div>
                        <div className="goal11">
                        <img src="../tee.png" alt="Team of Doctors"  style={{ width: '20px' ,height:"20px",marginBottom:"20px"}} />
                            <p>Expanding our reach across the globe, enabling more users to gain access to quality healthcare.</p>
                        </div>
                    </div>
                </div>
                <div className="mission-image11">
                    <img src="../doctors4.png" alt="Team of Doctors" />
                </div>
            </div>

            
            <div className='cardse23'>{/* New Section: Cards with Icon, Title, and Description */}
            <h2 className="regions-title11">
                    <span className="title-bar11"></span>Who we serve
                </h2>
                {/* <h1 className='borderlefts'>Who we severe</h1> */}
                <p>MedxBay serves a diverse audience</p>
 </div>
            <div className="bottom-section11">
            
            <div className="cards-row11">
                {/* Card 1 */}
                <div
                    className={`card11 ${selectedCard === 1 ? 'selected-card' : ''}`}
                    onClick={() => handleCardClick(1)}
                > <img src="../Frame1.png" alt="Team of Doctors" style={{ width: '40px' ,height:"40px",marginBottom:"20px"}} />

                    <h3>Patients</h3>
                    <p>Providing easy access to healthcare services, trusted provider connections, and accurate health information.</p>
                </div>

                {/* Card 2 */}
                <div
                    className={`card11 ${selectedCard === 2 ? 'selected-card' : ''}`}
                    onClick={() => handleCardClick(2)}
                >
                                            <img src="../Frame2.png" alt="Team of Doctors" style={{ width: '40px' ,height:"40px",marginBottom:"20px"}} />

                    <h3>Healthcare Providers</h3>
                    <p>Simplifying administrative duties, enhancing patient reach, and fostering professional collaboration.</p>
                </div>

                {/* Card 3 */}
                <div
                    className={`card11 ${selectedCard === 3 ? 'selected-card' : ''}`}
                    onClick={() => handleCardClick(3)}
                >
                    
                    <img src="../Frame3.png" alt="Team of Doctors" style={{ width: '40px' ,height:"40px",marginBottom:"20px"}} />

                    <h3>Medical Suppliers</h3>
                    <p>Connecting with healthcare professionals to introduce new medical products and innovations.</p>
                </div>
            </div>
       
        </div>

            <h1 className="key-prob11">Key problems we solve</h1>

            <div className="key-problems-section11">
            <div className="problems-column11">
                <h2><b>For Providers</b></h2>
                <ul>
                    {providerProblems.map(problem => (
                        <li key={problem.id}>
                            <div className="problem-number11">{problem.id}</div>
                            <div className="problem-details11">
                                <h3>{problem.title}</h3>
                                <p>{problem.description}</p>
                                {/* <div className="problem-numbers11"></div> */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="problems-column11">
                <h2><b>For Patients</b></h2>
                <ul>
                    {patientProblems.map(problem => (
                        <li key={problem.id}>
                            <div className="problem-number11">{problem.id}</div>
                            <div className="problem-details11">
                                
                                <h3>{problem.title}</h3>
                                <p>{problem.description}</p>
                                {/* <div className="problem-numbers11"></div> */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            <div  className="regions-section11   ">
            <div className="regions-content11 ">
                <h2 className="regions-title11">
                    <span className="title-bar11"></span>Regions we serve
                </h2>
                <p className="regions-description11">
                    MedxBay proudly serves the MENA region and various countries throughout Africa, 
                    including Kenya, Nigeria,<br/> Ghana, and South Africa. Our platform is designed to 
                    address the unique healthcare challenges in these<br/> regions, providing accessible 
                    and high-quality medical care.
                </p>
            </div>
        </div>
        
            <div>
            <div className="cards-section11">
            <h2 className="regions-title11">
                    <span className="title-bar11"></span>Meet Our Team
                </h2>
    {/* <h1 className='borderlefts'>Meet Our Team</h1> */}
    <p>Our dedicated team of experts in healthcare, technology,<br/> and marketing drives MedxBay's mission forward</p>
    <div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  flexWrap: 'wrap', 
  gap: '10rem'}}>

  {/* Card 1 */}
  <div style={{ width: '18rem', background: 'none', marginBottom: '1rem',  textAlign: 'left' ,textAlign:"justify" }}>
    <img
      style={{ width: '100%' }}
      src="../17.png"
      alt="Yunche Wilson"
    />
    <div>
      <h4 style={{ color: 'orange',fontSize:"20px" ,marginTop:"20px"}}>Yunche Wilson</h4>
      <h5  style={{ fontSize:"18px" }}><strong>Founder/CEO</strong></h5>
      <p  style={{ fontSize:"14px" }}>An 18-year management consultant with extensive experience in enterprise marketing, business development, and health & wellness research.</p>
    </div>
  </div>

  {/* Card 2 */}
  
  {/* Card 3 */}
  <div style={{ width: '18rem', background: 'none', marginBottom: '1rem', textAlign: 'left' ,textAlign:"justify" }}>
  <img
      style={{ width: '100%' }}
      src="../15.png"
      alt="Yunche Wilson"
    />
    <div>
      <h4 style={{ color: 'orange',fontSize:"20px",marginTop:"20px" }}>William Stenhouse</h4>
      <h5><strong>Chief Strategy Officer</strong></h5>
      <p style={{ fontSize:"14px" }}>A supply chain and logistics expert with a 30+ year career, focused on building relationships between the UAE and African markets.</p>
    </div>
  </div>
  
</div>

<div className="cards-section11">
            <h2 className="regions-title11">
                    <span className="title-bar11"></span>Meet Our Board Advisors.
                </h2>
    {/* <h1 className='borderlefts'>Meet Our Team</h1> */}
    <p>Our dedicated team of experts in healthcare, technology,<br/> and marketing drives MedxBay's mission forward</p>
    <div  className='nem' style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(3, 1fr)', 
  gap: '1rem' 
}}>
  {/* Card 1 */}
  <div style={{ width: '18rem', background: 'none', marginBottom: '1rem', textAlign: 'left', textAlign: 'justify' }}>
  <img style={{ width: '100%' }} src="../i1.png" alt="Ami Joy" />
  <div>
    <h4 style={{ color: 'orange', fontSize: '20px', marginTop: '20px' }}>Ami Joy</h4>
    <h5 style={{ fontSize: '18px' }}>Financial Mgmt. Strategist</h5>
    <p style={{ fontSize: '14px' }}>UAE</p>
  </div>
</div>

<div style={{ width: '18rem', background: 'none', marginBottom: '1rem', textAlign: 'left' }}>
  <img style={{ width: '100%' }} src="../i2.png" alt="Dr. Ricky Gallaway" />
  <div>
    <h4 style={{ color: 'orange', fontSize: '20px', marginTop: '20px' }}>Dr. Ricky Gallaway</h4>
    <h5>International Business Strategist</h5>
    <p style={{ fontSize: '14px' }}>USA</p>
  </div>
</div>

<div style={{ width: '18rem', background: 'none', marginBottom: '1rem', textAlign: 'left' }}>
  <img style={{ width: '100%' }} src="../i3.png" alt="Gillian Ashcroft" />
  <div>
    <h4 style={{ color: 'orange', fontSize: '20px', marginTop: '20px' }}>Gillian Ashcroft</h4>
    <h5>Philanthropist & Serial Entrepreneur</h5>
    <p style={{ fontSize: '14px' }}>UK</p>
  </div>
</div>

<div style={{ width: '18rem', background: 'none', textAlign: 'left', textAlign: 'justify' }}>
  <img style={{ width: '100%' }} src="../i4.png" alt="Dr. Mariam Awati" />
  <div>
    <h4 style={{ color: 'orange', fontSize: '20px', marginTop: '20px' }}>Dr. Mariam Awati</h4>
    <h5>Obstetrics and Gynaecology</h5>
    <p style={{ fontSize: '14px' }}>Dubai Healthcare City, UAE</p>
  </div>
</div>

<div style={{ width: '18rem', background: 'none',  textAlign: 'left', textAlign: 'justify' }}>
  <img style={{ width: '100%' }} src="../i5.png" alt="William Stenhouse" />
  <div>
    <h4 style={{ color: 'orange', fontSize: '20px', marginTop: '20px' }}>Dr. Dawnna Walton
    </h4>
    <h5>Anesthesiologist</h5>
    <p style={{ fontSize: '14px' }}>Texas, USA</p>
  </div>
</div>

<div style={{ width: '18rem', background: 'none',  textAlign: 'left', textAlign: 'justify' }}>
  <img style={{ width: '100%' }} src="../i6.png" alt="Dr. Dawnna Walton" />
  <div>
    <h4 style={{ color: 'orange', fontSize: '20px', marginTop: '20px' }}>Dr. Raees Tonse</h4>
    <h5>Oncologist
    </h5>
    <p style={{ fontSize: '14px' }}>UAE</p>
  </div>
</div>

  
</div>

</div>


</div>


            </div>
        </div>
    );
}

export default About;