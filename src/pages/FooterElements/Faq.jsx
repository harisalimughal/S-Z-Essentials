import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "How do I add items to my cart?",
      answer:
        "Browse the products and click on the 'Add to Cart' button. You can view your cart anytime by clicking on the cart icon.",
    },
    {
      question: "Can I remove or update the quantity of items in my cart?",
      answer:
        "Yes, go to the cart page. You'll find options to increase, decrease, or remove each item from the cart.",
    },
    {
      question: "Do I need to create an account to order groceries?",
      answer:
        "You can browse items without an account, but placing an order requires a quick sign-up or login to ensure delivery and order tracking.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery (COD) based on availability in your area.",
    },
    {
      question: "How do I track my order?",
      answer:
        "After placing your order, go to your profile > 'My Orders' to see live updates and order history.",
    },
    {
      question: "Is there a minimum order value for free delivery?",
      answer:
        "Yes, orders above ₹499 qualify for free delivery. A small delivery charge applies for smaller orders.",
    },
  ];

  const feedbackData = [
    {
      name: "Aarav Sharma",
      role: "Regular shopper",
      rating: 5,
      review:
        "The app makes grocery shopping feel effortless. Delivery was fast, fresh, and the checkout experience was seamless.",
    },
    {
      name: "Meera Patel",
      role: "Busy parent",
      rating: 5,
      review:
        "I love the convenience of ordering essentials in minutes. The quality of produce is consistently excellent.",
    },
    {
      name: "Rohan Verma",
      role: "Weekend buyer",
      rating: 4,
      review:
        "Great variety, fair prices, and helpful recommendations. It has become my go-to store for weekly groceries.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [activeFeedbackIndex, setActiveFeedbackIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const showPreviousFeedback = () => {
    setActiveFeedbackIndex((prevIndex) =>
      prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
    );
  };

  const showNextFeedback = () => {
    setActiveFeedbackIndex((prevIndex) =>
      prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeFeedback = feedbackData[activeFeedbackIndex];

  return (
    <div className="faq-container">
      <div className="feedback-section">
        <div className="section-head text-center mt-8">
          <h2 className="h3style" style={{ color: "green" }} data-title="Customer Feedback">
            Customer Feedback
          </h2>
          <div className="wt-separator bg-primarys"></div>
          <div className="wt-separator2 bg-primarys"></div>
        </div>

        <div className="feedback-carousel">
          <button className="feedback-nav" onClick={showPreviousFeedback} aria-label="Previous feedback">
            ‹
          </button>
          <div className="feedback-card">
            <div className="feedback-stars" aria-label={`Rated ${activeFeedback.rating} out of 5 stars`}>
              {"★".repeat(activeFeedback.rating)}{"☆".repeat(5 - activeFeedback.rating)}
            </div>
            <p className="feedback-review">“{activeFeedback.review}”</p>
            <div className="feedback-author">
              <strong>{activeFeedback.name}</strong>
              <span>{activeFeedback.role}</span>
            </div>
          </div>
          <button className="feedback-nav" onClick={showNextFeedback} aria-label="Next feedback">
            ›
          </button>
        </div>

        <div className="feedback-dots">
          {feedbackData.map((_, index) => (
            <button
              key={index}
              className={`feedback-dot ${activeFeedbackIndex === index ? "active" : ""}`}
              onClick={() => setActiveFeedbackIndex(index)}
              aria-label={`Show feedback ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mb-6">
          <div className="section-head text-center mt-8">
            <h1 className="h3style" style={{ color: "green" }} data-title="Frequently Asked Questions">
              Frequently Asked Questions
            </h1>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
          </div>
        </div>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                +
              </span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
