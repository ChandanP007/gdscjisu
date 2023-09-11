import data from '../../data.json'

function Stats()
{
    return(
        <>
            <div className="stats-container">
            <div className="stats-box">  
                {data.coreteam.statistics.map(((item) => (
                    <div className="stats-item" key={item.id}>
                        <h2>{item.count}</h2>
                        <h6>{item.name}</h6>
                    </div>
                )))}
            </div>
            </div>
        </>
    )
}

export default Stats;