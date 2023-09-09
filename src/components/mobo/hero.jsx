import dsclogo from '../../assets/dsclogo.png';
import './style.css';

function Hero()
{
    return (
        <>
        <div className="hero-container">
            <div className="hero-content">
                <img src={dsclogo} alt="" />
                Google Developer Student's Club<br></br>
                Jis University, Kolkata
                <button >Join Now</button>
            </div>
            
        </div>
        </>
    );
}


export default Hero;