import "./style.css";
import dsclogo from "../../assets/dsclogo.png";
import insta from "../../assets/socialicons/instagram.png"
import discord from "../../assets/socialicons/discord.png"
import facebook from "../../assets/socialicons/facebook.png"
import twitter from "../../assets/socialicons/twitter.png"

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="branding">
          <img src={dsclogo} alt="" />
          Google Developer Student's Club<br></br>
          Jis University, Kolkata
        </div>
        <div className="socials">
          <a href=""><img src={insta} alt="" /></a>
          <a href=""><img src={facebook} alt="" /></a>
          <a href=""><img src={discord} alt="" /></a>
          <a href=""><img src={twitter} alt="" /></a>
        </div>
        <div className="copyright">©️ 2023 Google Developer Student Club's <br></br>Jis University, Kolkata</div>
      </div>
    </>
  );
}

export default Footer;
