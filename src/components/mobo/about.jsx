import "./style.css";

function About() {
  const eventPictures = [
    "https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-dsc/chapter_photos/20230218_135819.jpg",
    "https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-dsc/chapter_photos/IMG_20230317_140917481_HDR.jpg",
    "https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-dsc/chapter_photos/IMG20220817171843.jpg",
  ];

  return (
    <>
      <div className="about-container">

        <div className="section1">
          <h2>
            At Google Developer Student Clubs <b>JISU,</b>
          </h2>
          <h1>We develop</h1>
          <h3>communities</h3>
          <div className="eventPicturesSlider">
            <img src={eventPictures[2]} alt="" />
          </div>
          <div className="pastevents">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1ZcNuyyHMcfv2BGa2weVQutqI5Q_lYMcag&usqp=CAU"
              alt=""
            />
            <button>see past events</button>
          </div>
          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              <b>We're built different, so we build different.</b> Our mission is to
              empower future developers by bringing students passionate about
              technology together and helping them grow their skills in tech,
              regardless of background.
            </p><br></br>
            <h3>Our Values</h3>
            <p>
              We believe you don't need to code to be a developer. We develop
              both products and people by making Google technologies accessible
              to everyone through workshops, events, and more. <b>Dreamers, problem
              solvers, and tinkerers: That's who we are.</b> 
            </p><br></br>
            <h3>Events</h3>
            <p>
              We want to be a part of your journey through tech! From workshops
              to competitions. Networking events to socials. We have something
              for everyone!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
