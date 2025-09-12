import React, { useState } from "react";
import "./faqs.css";
import { useNavigate } from "react-router-dom";

export default function FAQ() {
    const navigate=useNavigate()
  const faqs = [
    {
      question: "How often is the weather data updated?",
      answer:
        "The data refreshes every few minutes directly from the OpenWeatherMap API."
    },
    {
      question: "Can I search for international cities?",
      answer:
        "Yes, you can search for any city worldwide as long as it’s supported by OpenWeatherMap."
    },
    {
      question: "Why is my city not showing?",
      answer:
        "Check your spelling or try including the country code, e.g. London, UK."
    },
    {
      question: "Is this service free to use?",
      answer:
        "Yes, but heavy usage may require your own API key from OpenWeatherMap."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="container">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>FAQs</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <i className="fa-solid fa-circle-question"></i>
              <h3>{faq.question}</h3>
              <i
                className={`fa-solid ${
                  openIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </div>
            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="container"><button onClick={()=>navigate("/")}>Back To Home</button></div>
      
    </section>
  );
}
