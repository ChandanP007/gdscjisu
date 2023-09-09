import dsclogo from '../../assets/dsclogo.png';
import menubtn from '../../assets/menu.png';
import './style.css'

function Nav()
{
    return(
        <>
        <div className="navigation-container">
            <div className="dsc-branding">
            <img src={dsclogo} alt="" />GDSC JISU
            </div>
            <div className="dsc-menu">
                <img src={menubtn} alt="" />
            </div>
        </div>
        </>
    )
}

export default Nav;