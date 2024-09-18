import React from 'react';
import './LanguageEdit.css';
import orangetick from '../../assests/orangetick.png'



const Languages = ({ Languages }) => {
  return (
    <div className="language-container-background">
      <div className="languages-container-edit text-center py-4">
        <h2>Languages</h2>
        <div className="d-flex justify-content-center languages-row-container">
          <div className="languages-row d-flex flex-wrap">
            {Languages?.map(language => (
              <div key={language} className="language-item d-flex align-items-center mb-2 mr-3">
                <img src={orangetick} alt="tick" className="mr-2" />
                <span className="language-text">{language}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Languages;