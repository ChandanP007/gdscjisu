import data from '../../data.json';

function Upcoming()
{
    return(
        <>
            <div className="upcoming-events-container">
                <h2>🗓️ Upcoming Events  </h2>
                <div className="events-box">
                <div className="upevents-container">
                    <div className="upevent-box">  
                        {data.coreteam.upcomingEvents.map(((item) => (
                            <div className="event" key={item.id}>
                                <img src={item.thumbnail} alt="" />
                                <h2>{item.name}</h2>
                                <h6>{item.timeline}</h6>
                            </div>
                        )))}
                    </div>
            </div>
                </div>
            </div>
        </>
    )
}
export default Upcoming;