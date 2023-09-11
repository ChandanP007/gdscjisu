import './style.css'
import data from '../../data.json'

function Team(){
    
    return(
        <>
        <div className="team-container">
            <h1 className='section-title'>Meet The Team </h1>
            <h4>The Facilitators</h4>

            <div className="team-members">  
                {data.coreteam.mentors.map(((item) => (
                    <div className="member" key={item.id}>
                        <img src={item.dp} alt="" />
                        <h2>{item.name}</h2>
                        <h6>{item.designation}</h6>
                    </div>
                )))}
            </div>
            <h4>The Promo Team</h4>
            <div className="subcontainer">
            <div className="team-members">  
                {data.coreteam.pr.map(((item) => (
                    <div className="member" key={item.id}>
                        <img src={item.dp} alt="" />
                        <h2>{item.name}</h2>
                    </div>
                )))}
            </div>
            <div className="slidemsg">
                    <img src="https://media2.giphy.com/media/MZXmFVrbMA1qSDNGOt/giphy.gif" alt="" />
            </div>
            </div>

            <h4>The Design Team</h4>
            <div className="subcontainer">
            <div className="team-members">  
                {data.coreteam.designteam.map(((item) => (
                    <div className="member" key={item.id}>
                        <img src={item.dp} alt="" />
                        <h2>{item.name}</h2>
                    </div>
                )))}
            </div>
            <div className="slidemsg">
                    <img src="https://media2.giphy.com/media/MZXmFVrbMA1qSDNGOt/giphy.gif" alt="" />
            </div>
            </div>
            
            
            
        </div>
        </>
    );
}
export default Team;