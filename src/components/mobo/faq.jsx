import "./style.css";




function Faq() {

        const questionButtons = document.querySelectorAll(".question");
        
        questionButtons.forEach((button) => {
            button.addEventListener("click", function () {
              const answer = this.nextElementSibling;
                answer.classList.toggle("open");
                
            });
          });

  return (
    <>
      <div className="faq-container">
        <h2 className="container-title">Frequently asked questions!</h2>
        <div className="questions">
          <button className="question">
            What is a Google Developer Student Club (GDSC)?
          </button>
          <div className="answer">
            GDSC is a community-driven initiative sponsored by Google that
            empowers students to learn, share, and collaborate on projects
            related to technology and development. It provides resources,
            mentorship, and opportunities for skill-building.
          </div>
          <button className="question">Who can join GDSC?</button>
          <div className="answer">
            GDSC is open to all students who are interested in technology,
            regardless of their major or background. As long as you're a student
            with a passion for learning and building, you're welcome to join!
          </div>
          <button className="question">
            How can I join GDSC at my university?
          </button>
          <div className="answer">
            To join GDSC at your university, typically, you'll need to register
            or apply for membership through your university's GDSC chapter.
            Specific details may vary by chapter, so check with your local
            chapter for the exact process.
          </div>
          <button className="question">
            What are the benefits of joining GDSC?
          </button>
          <div className="answer">
            Joining GDSC offers numerous benefits, including access to
            workshops, hackathons, networking opportunities, mentorship, and the
            chance to collaborate on real-world projects.
          </div>
          <button className="question">Are there any membership fees?</button>
          <div className="answer">
            Membership in GDSC is typically free. GDSC is committed to being an
            inclusive community, and most chapters do not charge membership
            fees.
          </div>
          <button className="question">
            What types of events and activities does GDSC organize?
          </button>
          <div className="answer">
            GDSC hosts a wide range of events, such as coding workshops,
            hackathons, tech talks, community projects, and more. These events
            are designed to help students learn, connect, and grow.
          </div>
          <button className="question">
            Do I need prior coding experience to join GDSC?
          </button>
          <div className="answer">
            No, you do not need prior coding experience to join GDSC. GDSC is
            open to students at all skill levels, from beginners to experienced
            developers.
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
