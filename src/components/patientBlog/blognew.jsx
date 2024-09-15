import React from 'react';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';

import './blognew.css';

const NutritionTips = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const articlesData = [
    {
      id: 1,
      image: '../Re.png', // Replace with actual URLs
      category: 'TELEMEDICINE',
      date: '05 June, 2024',
      title: 'Free Checkup',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.',
      link: '#'
    },
    {
      id: 2,
       image: '../Re.png', // Replace with actual URLs,
      category: 'HEALTHCARE',
      date: '10 July, 2024',
      title: 'Health Insurance Benefits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.',
      link: '#'
    },
    {
      id: 3,
      image: '../Re.png', // Replace with actual URLs,
      category: 'NUTRITION',
      date: '18 August, 2024',
      title: 'Healthy Diet Tips',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.',
      link: '#'
    }
  ];

  return (
    <Container className="nutrition-tips-container">
      {/* Back Button */}
      <Button 
         
        onClick={() => navigate(-1)} // Go to the previous page
        className="back-button"
        style={{ marginBottom: '20px' }} // Optional styling
      >
        ← Back
      </Button>

      {/* Header Section */}
      <div className="nutrition-tips-header">
        <h1 className="nutrition-tips-title">
          Nutrition Tips and Hacks
        </h1>
        {/* <Button variant="contained" className="nutrition-tips-button">
          Nutrition
        </Button> */}
      </div>

      {/* Subheader */}
      <p className="nutrition-tips-subheader">
        <span>
          <img src="../Image.png" alt="Authoress" />
        </span>&nbsp;  Dr. Tracey Wilson &nbsp; &nbsp;&nbsp;| &nbsp;&nbsp; August 20, 2024 &nbsp; |&nbsp;&nbsp; &nbsp;. 6 Minute Read &nbsp; |&nbsp;&nbsp; &nbsp;<span>
          <img src="../heart.png" alt="Authoress" />
        </span> &nbsp; 654K Views
      </p>

      {/* Image Section */}
      <div className="nutrition-tips-image-container">
        <img
          src="https://th.bing.com/th/id/OIP.FtLIstvQFyS67dC8qYWO3AHaCv?rs=1&pid=ImgDetMain"
          alt="Doctor with fruits"
          className="nutrition-tips-image"
        />
      </div>

      {/* Content Section */}
      <div className="nutrition-tips-content">
        {/* <h2 className="nutrition-tips-content-heading">Section 1.10.33 of “de Finibus Bonorum et Malorum”</h2> */}
        <p style={{marginTop:"30px"}} className="nutrition-tips-content-paragraph">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt.
        </p>

        <h2 className="nutrition-tips-content-heading">Section 1.10.33 of "de Finibus Bonorum et Malorum"</h2>
        <p className="nutrition-tips-content-paragraph">
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        </p>

        <h1 className="nutrition-tips-content-headings">Section</h1>
        <p className="nutrition-tips-content-paragraph">
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
       
        <h1 className="nutrition-tips-content-headings">Section 1.10.33</h1>
        <p className="nutrition-tips-content-paragraph">
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
        </p>
      
      </div>
      <div className="social-media-container">
      <div className="social-icons">
        <a href="#" className="icon">
          <FaFacebook />
        </a>
        <a href="#" className="icon">
          <FaTwitter />
        </a>
        <a href="#" className="icon">
          <FaInstagram />
        </a>
      </div>
      <p className="helpful-text">Was this helpful? &nbsp;&nbsp;<span> <FaThumbsUp style={{ color: 'grey', fontSize: '24px',marginTop:"-10px" }} /></span></p>
    </div>

        <div className="about-author-section">
          <h1 className="nutrition-tips-content-headingse">
            About the Author
          </h1>
          <div className="author-cards">
            <img 
              src="../has.png" // Replace with an actual image
              alt="Author"
              className="author-image"
            />
            <div className="author-info">
              <h5 className="author-infos">Dr. Shantanu Jambhekar</h5>
              <p style={{ color: "#787887" }}>Dentist</p>
              <p style={{ color: "#787887" }}>16 years experience overall</p>
              <p style={{ color: "#272848", marginTop: "10px" }}><b>Pare, Mumbai</b></p>
              <p style={{ color: "#272848" }}>Smilescence Center for Advanced Dentistry</p>
            </div>
          </div>
        </div>

        {/* Similar Articles Section */}
        <div className="similar-articles-section">
          <h2 className="nutrition-tips-content-headingse">Similar Articles</h2>
          <div className="articles">
            {articlesData.map(article => (
              <div key={article.id} className="article-card">
                <img
                  src={article.image}
                  alt={article.title}
                  className="article-image"
                />
                <div className="article-info">
                  <span className="category">{article.category}</span>
                  <span className="categorysimg"><img className="" src='../Vector.png' /></span> 
                  <p className="date">{article.date}</p>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <a href={article.link} className="learn-more">Learn More -></a>
                </div>
              </div>
            ))}
          </div>
          <button className="view-all">View All</button>
        </div>
      
    </Container>
  );
};

export default NutritionTips;
