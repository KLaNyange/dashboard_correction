import './Card.css'

function Card (props){
    return(
        <div className="card">
            <div className="work">
            </div>
            <div className="working">
                <h1>{props.data.title}</h1>
                {/* <img src="" alt="" /> */}
                <div>
                    <div className="d-flex">
                        <p className="info"> {props.data.timeframes.weekly.current}  HRS</p>
                        <p className="colors">Last Week - {props.data.timeframes.weekly.previous} hrs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card