import React, { useState } from 'react';
import '../../css/home/QuestionsSection.css';

const QuestionsSection = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      text: 'Is lunch provided free of cost ?',
      answer: 'Yes, a light lunch is included in the room rate daily.',
    },
    {
      id: 2,
      text: 'Do you have 2 Bedroom suites ?',
      answer:
        'Yes, we have a few 2 bedroom suites that are perfect for families or groups.',
    },
    {
      id: 3,
      text: 'Are Wi-Fi costs included in the price ?',
      answer: 'Yes, high-speed Wi-Fi is complimentary for all guests.',
    },
    {
      id: 4,
      text: 'Where can I reach you for support ?',
      answer:
        'You can contact our friendly front desk staff by phone or email for any assistance during your stay.',
    },
  ];

  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return (
    <div className="questions-container">
      <div className="questions-image">
        <img src={require('../../images/beach-road.avif')} alt="Beach hotel" />
      </div>
      <div className="questions-content">
        <h2 className="questions-title">Questions</h2>
        <p className="questions-description">
          Here are some frequently asked questions about our hotels from our
          loving customers. Should you have any other questions, feel free to
          reach out via the contact form below.
        </p>
        <div className="questions-list">
          {questions.map((question) => (
            <div key={question.id} className="question-item">
              <button
                className="question-toggle"
                onClick={() => toggleQuestion(question.id)}
              >
                {question.text}
                <span className="question-icon">
                  {expandedQuestion === question.id ? '−' : '+'}
                </span>
              </button>
              {expandedQuestion === question.id && (
                <div className="question-answer">{question.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsSection;
