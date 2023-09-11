import data from '../../data.json';
import './style.css'

function Partners()
{
    return (
        <>
            <div className="partners-container">
                <h2>Community Partners</h2>
                <div className="partner">  
                {data.coreteam.partners.map(((item) => (
                    <div className="partner-item" key={item.id}>
                        <img src={item.imgsrc} alt="" />
                    </div>
                )))}
            </div>
            </div>
        </>
    )
}

export default Partners