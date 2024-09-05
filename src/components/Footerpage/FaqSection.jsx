import React, { useState } from "react";
import "./FaqSection.css"; // Make sure this CSS file includes the necessary styles

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <div
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: isOpen ? "#0167FF" : "#F2F6FF",
          color: isOpen ? "#fff" : "#272848",
          padding: "20px",
          borderRadius: "5px",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        <h2 style={{ color: isOpen ? "#fff" : "#272848", transition: "color 0.3s ease" }}>
          {question}
        </h2>
        <span style={{ color: isOpen ? "#fff" : "#545454", transition: "color 0.3s ease" }}>
          {isOpen ? "−" : "+"}
        </span>
      </div>
      {isOpen && (
        <div className="faq-answer" style={{ paddingLeft: "20px" }}>
          {answer}
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const faqData = [
    {
        question: "1. What is MedXBay?",
        answer: "MedXBay is an AI-enabled healthcare platform designed to streamline the healthcare experience for patients, providers, and medical suppliers. It simplifies tasks like appointment scheduling, payment processing, and treatment management, making healthcare more accessible and efficient. The platform also offers a social network for medical professionals, enabling collaboration and sharing of the latest medical innovations."
    },
    {
        question: "2. Who is MedXBay for?",
        answer: "MedXBay is for patients, healthcare providers, and medical suppliers who want to enhance the efficiency of healthcare delivery. Patients can easily schedule appointments and access treatment management, while providers and suppliers can benefit from streamlined operations and a professional network."
    },
    {
        question: "3. What problems does MedXBay solve?",
        answer: "MedXBay addresses the inefficiencies in healthcare by simplifying appointment scheduling, payment processing, and treatment management. It also fosters collaboration among medical professionals and helps ensure that patients receive timely and effective care."
    },
    {
        question: "4. Does it cost to be on MedXBay?",
        answer: "The cost structure of MedXBay can vary depending on the services used. Patients generally do not incur a fee for using the basic platform features, but healthcare providers and suppliers might be subject to subscription fees or service charges depending on their usage."
    },
    {
        question: "5. Can I recommend that my healthcare provider join MedXBay?",
        answer: "Yes, you can recommend that your healthcare provider join MedXBay. The platform is designed to benefit both patients and providers by improving communication, appointment scheduling, and overall care management."
    },
    {
        question: "6. How does MedXBay ensure the quality of care provided?",
        answer: "MedXBay ensures quality care by offering a platform where only verified healthcare providers can join. Additionally, it enables patients to review and rate their providers, fostering accountability and transparency."
    },
    {
        question: "7. What features are available for patients on MedXBay?",
        answer: "Patients on MedXBay can access features such as appointment scheduling, treatment management, secure payment processing, and provider reviews. They can also interact with a network of healthcare professionals for advice and support."
    },
    {
        question: "8. What features are available for healthcare providers on MedXBay?",
        answer: "Healthcare providers can use MedXBay to manage appointments, process payments, and access a network of medical professionals for collaboration. They also have tools for managing patient records, treatment plans, and interacting with medical suppliers."
    },
    {
        question: "9. How does MedXBay compare to other healthcare platforms?",
        answer: "MedXBay stands out from other healthcare platforms by integrating AI to streamline various processes, offering a social network for medical professionals, and providing a holistic solution that caters to patients, providers, and suppliers alike."
    },
    {
        question: "10. What regions does MedXBay serve?",
        answer: "MedXBay serves multiple regions, but its availability may vary depending on the location. Users should check the platform for the most up-to-date information on regional coverage."
    },
    {
        question: "11. How can I get started with MedXBay?",
        answer: "Getting started with MedXBay is simple. Patients can sign up through the platform’s website or app, while healthcare providers and suppliers can contact MedXBay for registration and onboarding details."
    }
];


  return (
    <div className="faq-section">
      <h1 className="fqa">Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqSection;
