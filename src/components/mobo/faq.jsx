import { useState } from "react";
import "./style.css";
import sendbtn from "../../assets/send.png";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleAnswer}>{question}</button>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
}

function Faq() {
  const faqData = [
    {
      question: " What is a Google Developer Student Club (GDSC)?",
      answer:
        "GDSC is a community-driven initiative sponsored by Google that empowers students to learn, share, and collaborate on projects related to technology and development. It provides resources, mentorship, and opportunities for skill-building.",
    },
    {
      question: "Who can join GDSC?",
      answer:
        "GDSC is open to all students who are interested in technology, regardless of their major or background. As long as you're a student with a passion for learning and building, you're welcome to join!",
    },
    {
      question: "What are the benefits of joining GDSC?",
      answer: "Joining GDSC offers numerous benefits, including access to workshops, hackathons, networking opportunities, mentorship, and the chance to collaborate on real-world projects.",
    },
    {
      question: "Are there any membership fees?",
      answer: "Membership in GDSC is typically free. GDSC is committed to being an inclusive community, and most chapters do not charge membership fees.",
    },
    {
      question: "What types of events and activities does GDSC organize?",
      answer: "GDSC hosts a wide range of events, such as coding workshops, hackathons, tech talks, community projects, and more. These events are designed to help students learn, connect, and grow.",
    },
    {
      question: "Can non-technical students join GDSC?",
      answer: "Yes, GDSC welcomes students from all academic backgrounds. Many GDSC events and activities are beginner-friendly and offer opportunities to learn and explore technology.",
    },
    {
      question: "Do I need prior coding experience to join GDSC?",
      answer: "No, you do not need prior coding experience to join GDSC. GDSC is open to students at all skill levels, from beginners to experienced developers.",
    },
    {
      question: "How can I join GDSC at my university?",
      answer: "To join GDSC at your university, typically, you'll need to register or apply for membership through your university's GDSC chapter. Specific details may vary by chapter, so check with your local chapter for the exact process.",
    }
  ];

  return (
    <>
      <div className="faq-container">
        <h2 className="container-title">Frequently asked questions ?</h2>
        <div className="questions">
          <div className="question">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>

              <div className="ask-container">
              <h6>Not listed here ? Ask to Me </h6>
              <div className="take-question">
                <input type="mail" className="ask-box"/>
                <img src={sendbtn} alt="" />
              </div>
              </div>
        
      </div>
    </>
  );
}

export default Faq;
