import dsclogo from "../../assets/dsclogo.png";
import data from '../../data.json';
import "./style.css";

function Hero() {
  const heroimg =
    "https://www.dsctcet.tech/static/media/gdsc-landing1.f8c33f4b4af4dd7625ad.png";
  return (
    <>
      <div className="hero-container">
        {/* <img className='hero-thumb' src={heroimg} alt="" /> */}
        <div className="hero-content">
        <div className="branding">
          <img src={dsclogo} alt="" />
          Google Developer Student's Club<br></br>
          Jis University, Kolkata
        </div>

          <p className="para2">
            Our Mission is to empower
            students with the latest tech skills,create a collaborative
            environment for learning, and build amazing projects together.
          </p>

          <button>Join Now</button>

          <div className="lead-quote">
            <img src={data.lead.dp} alt="" />
          <p className="para1">
            "At <b>GDSC JISU</b>, we are a community of passionate students who love
            technology, learning, and innovation."<br/>
          </p>
          <h6> {data.lead.name} | {data.lead.designation}</h6>
        </div>
          
        </div>
      </div>
    </>
  );
}

export default Hero;
